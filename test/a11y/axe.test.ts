import { expect, test, type Page } from '@playwright/test';
import * as cheerio from 'cheerio';
import { AxeResults } from 'axe-core';
import { readFileSync } from 'fs';
import { analyzeAccessibility, getDisabledRules, saveViolationsReport, shouldSkipRoute } from './test-setup';

const CONFIG = {
  baseUrl: 'http://localhost:3000',
  sitemapPath: './build/sitemap.xml',
  reportPath: './tmp/axe.json',
};

const violations: AxeResults[] = [];

test.describe('Accessibility features', () => {
  // Axe scans on very long pages (e.g. alle-basis-tokens) can exceed the default 30s timeout on CI
  test.setTimeout(60_000);

  const pathnames = getPathnamesFromSitemap(CONFIG.sitemapPath).filter((pathname) => !shouldSkipRoute(pathname));

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

    const paths = $('loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname);

    return Array.from(new Set(paths));
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapPath}, skipping accessibility tests generation.`, error);
    return [];
  }
}

async function verifyPageAccessibility(page: Page, pathname: string): Promise<void> {
  const url = CONFIG.baseUrl + pathname;
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(isDocusaurusHydrated, { timeout: 10000 });

  const isAxeDisabled = (await page.locator('meta[name="axe"][content="false"]').count()) > 0;
  test.skip(isAxeDisabled, 'Skipped because of <meta name="axe" content="false">');

  const disabledRules = getDisabledRules(pathname);
  const results = await analyzeAccessibility(page, disabledRules);
  expect(results.violations).toEqual([]);
}

function isDocusaurusHydrated(): boolean {
  return document.documentElement.dataset.hasHydrated === 'true';
}
