import { expect, test } from '@playwright/test';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import AxeBuilder from '@axe-core/playwright';
import { writeFile } from 'fs/promises';

// Constants
const siteUrl = 'http://localhost:3000';
const sitemapPath = './build/sitemap.xml';
// Screenshot path is relative to `/screenshots/` in the root

// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
const extractSitemapPathnames = (sitemapPath: string): string[] => {
  const sitemap = fs.readFileSync(sitemapPath).toString();
  const $ = cheerio.load(sitemap, { xmlMode: true });
  const urls: string[] = [];
  $('loc').each(function handleLoc() {
    /* eslint-disable-next-line no-invalid-this */
    urls.push($(this).text());
  });
  return urls.map((url) => new URL(url).pathname);
};

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
const waitForDocusaurusHydration = () => {
  return document.documentElement.dataset.hasHydrated === 'true';
};

const allErrors = [];

const screenshotPathname = (pathname: string) => {
  test(`${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);

    const noVisualRegressionTest = (await page.locator('meta[name="axe"][content="false"]').count()) > 0;

    test.skip(noVisualRegressionTest, 'Skipped because of <meta name="axe" content="false">');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .options({ resultTypes: ['violations'] })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    allErrors.push(accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });
};

test.afterAll(async () => {
  const resultJSON = './tmp/axe.json';
  console.log(`Write ${resultJSON}`);
  await writeFile(resultJSON, JSON.stringify(allErrors, null, 2));
});

test.describe('AxE: ', () => {
  const pathnames = extractSitemapPathnames(sitemapPath);
  pathnames.forEach(screenshotPathname);
});
