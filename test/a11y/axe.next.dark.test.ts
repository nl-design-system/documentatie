import { expect, test, type Page } from '@playwright/test';
import { AxeResults } from 'axe-core';
import { analyzeAccessibility, getPathnamesFromSitemap, getDisabledRules, saveViolationsReport } from './test-setup';
import { exclusionsNext } from './a11y-exclusions';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
  reportPath: './tmp/axe.next.dark.json',
  failOnImpact: ['critical', 'serious', 'moderate'],
};

const violations: AxeResults[] = [];

test.use({ colorScheme: 'dark' });

test.describe('Accessibility features (dark mode)', () => {
  const pathnames = getPathnamesFromSitemap(CONFIG.sitemapDir, CONFIG.sitemap);

  pathnames.forEach((pathname) => {
    test(pathname, async ({ page }) => {
      await verifyPageAccessibility(page, pathname);
    });
  });

  test.afterAll(async () => {
    await saveViolationsReport(violations, CONFIG.reportPath);
  });
});

async function verifyPageAccessibility(page: Page, pathname: string): Promise<void> {
  const url = CONFIG.baseUrl + pathname;
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const isAxeDisabled = (await page.locator('meta[name="axe"][content="false"]').count()) > 0;
  test.skip(isAxeDisabled, 'Skipped because of <meta name="axe" content="false">');

  const disabledRules = getDisabledRules(pathname, exclusionsNext);
  const results = await analyzeAccessibility(page, disabledRules);

  violations.push(results);

  const violationsWhichFail = results.violations
    .filter((v) => CONFIG.failOnImpact.includes(v.impact))
    .map((violation) => `[${violation.id}] ${violation.description}`);

  expect(violationsWhichFail).toEqual([]);
}
