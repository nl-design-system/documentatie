import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';
import { writeFile } from 'fs/promises';

const CONFIG = {
  baseUrl: 'http://localhost:3000',
  sitemapPath: './build/sitemap.xml',
  reportPath: './tmp/axe.json',
};

const violations: unknown[] = [];

test.describe('Accessibility features', () => {
  const pathnames = getPathnamesFromSitemap(CONFIG.sitemapPath);

  pathnames.forEach((pathname) => {
    test(pathname, async ({ page }) => {
      await verifyPageAccessibility(page, pathname);
    });
  });

  test.afterAll(async () => {
    await saveViolationsReport(violations, CONFIG.reportPath);
  });
});

function getPathnamesFromSitemap(sitemapPath: string): string[] {
  try {
    const sitemap = readFileSync(sitemapPath, 'utf8');
    const $ = cheerio.load(sitemap, { xmlMode: true });

    return $('loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname);
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapPath}, skipping accessibility tests generation.`, error);
    return [];
  }
}

async function verifyPageAccessibility(page: Page, pathname: string): Promise<void> {
  const url = CONFIG.baseUrl + pathname;
  await page.goto(url);
  await page.waitForFunction(isDocusaurusHydrated);

  const isAxeDisabled = (await page.locator('meta[name="axe"][content="false"]').count()) > 0;
  test.skip(isAxeDisabled, 'Skipped because of <meta name="axe" content="false">');

  const results = await analyzeAccessibility(page);

  violations.push(results);
  expect(results.violations).toEqual([]);
}

function isDocusaurusHydrated(): boolean {
  return document.documentElement.dataset.hasHydrated === 'true';
}

async function analyzeAccessibility(page: Page) {
  return new AxeBuilder({ page })
    .options({ resultTypes: ['violations'] })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
}

async function saveViolationsReport(reportData: unknown[], filePath: string): Promise<void> {
  if (reportData.length > 0) {
    console.log(`Writing accessibility report to ${filePath}`);
    await writeFile(filePath, JSON.stringify(reportData, null, 2));
  }
}
