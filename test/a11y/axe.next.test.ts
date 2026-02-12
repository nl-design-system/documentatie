import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as cheerio from 'cheerio';
import { AxeResults } from 'axe-core';
import { readFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import { exclusions, exclusionGroups } from './a11y-exclusions';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
  reportPath: './tmp/axe.next.json',
};

const violations: AxeResults[] = [];

test.describe('Accessibility features', () => {
  const pathnames = getPathnamesFromSitemap(`${CONFIG.sitemapDir}${CONFIG.sitemap}`);
  // .filter((pathname) => !shouldSkipRoute(pathname));

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
  const paths = [];

  try {
    const sitemapIndex = readFileSync(sitemapPath, 'utf8');
    const $ = cheerio.load(sitemapIndex, { xmlMode: true });

    $('sitemap loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((sitemapPath) => {
        getPathnamesFromSitemap(`${CONFIG.sitemapDir}${sitemapPath}`).forEach((path) => paths.push(path));
      });

    $('url loc')
      .map((_, element) => $(element).text())
      .toArray()
      .map((url) => new URL(url).pathname)
      .forEach((path) => paths.push(path));

    return paths;
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapPath}, skipping accessibility tests generation.`, error);
    return [];
  }
}

async function verifyPageAccessibility(page: Page, pathname: string): Promise<void> {
  const url = CONFIG.baseUrl + pathname;
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const isAxeDisabled = (await page.locator('meta[name="axe"][content="false"]').count()) > 0;
  test.skip(isAxeDisabled, 'Skipped because of <meta name="axe" content="false">');

  const disabledRules = getDisabledRules(pathname);
  const results = await analyzeAccessibility(page, disabledRules);

  violations.push(results);
  expect(results.violations).toEqual([]);
}

async function analyzeAccessibility(page: Page, disabledRules: string[]) {
  return new AxeBuilder({ page })
    .options({ resultTypes: ['violations'] })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .disableRules(disabledRules)
    .analyze();
}

async function saveViolationsReport(reportData: unknown[], filePath: string): Promise<void> {
  console.log(`Writing accessibility report to ${filePath}`);
  await writeFile(filePath, JSON.stringify(reportData, null, 2));
}

function getDisabledRules(pathname: string): string[] {
  const disabledRules = new Set<string>();

  for (const exclusion of exclusions) {
    const isMatch = exclusion.routes.some((route) => {
      if (typeof route === 'string') {
        return route === pathname;
      }
      return route.test(pathname);
    });

    if (isMatch) {
      if (exclusion.rules) {
        exclusion.rules.forEach((rule) => disabledRules.add(rule));
      }
      if (exclusion.groups) {
        exclusion.groups.forEach((groupName) => {
          const groupRules = exclusionGroups[groupName];
          if (groupRules) {
            groupRules.forEach((rule) => disabledRules.add(rule));
          } else {
            console.warn(`Warning: Exclusion group '${groupName}' not found in configuration.`);
          }
        });
      }
    }
  }

  return Array.from(disabledRules);
}
