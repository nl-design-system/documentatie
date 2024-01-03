import { argosScreenshot } from '@argos-ci/playwright';
import { test } from '@playwright/test';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

// Constants
const siteUrl = 'http://localhost:3000';
const sitemapPath = './build/sitemap.xml';
// Screenshot path is relative to `/screenshots/` in the root
const screenshotPath = '../tmp/screenshots/';

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

// Converts a pathname to a decent screenshot name
const pathnameToArgosName = (pathname: string): string => {
  return pathname.replace(/^\/|\/$/g, '') || 'index';
};

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
const waitForDocusaurusHydration = () => {
  return document.documentElement.dataset.hasHydrated === 'true';
};

const screenshotPathname = (pathname: string) => {
  test(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);
    await argosScreenshot(page, `${screenshotPath}${pathnameToArgosName(pathname)}`);
  });
};

test.describe('Docusaurus site screenshots', () => {
  const pathnames = extractSitemapPathnames(sitemapPath);
  pathnames.forEach(screenshotPathname);
});
