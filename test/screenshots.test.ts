import { argosScreenshot } from '@argos-ci/playwright';
import { test } from '@playwright/test';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

// Constants
const siteUrl = 'http://localhost:3000/';
// Screenshot path is relative to `/screenshots/` in the root
const screenshotPath = '../tmp/screenshot-pages/';

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
    const useForcedColor = (await page.locator('meta[name="emulate-forced-colors"][content="active"]').count()) > 0;
    const useColorSchemeDark = (await page.locator('meta[name="emulate-color-scheme"][content="dark"]').count()) > 0;
    await page.emulateMedia({
      colorScheme: useColorSchemeDark ? 'dark' : undefined,
      forcedColors: useForcedColor ? 'active' : undefined,
    });
    await argosScreenshot(page, `${screenshotPath}${pathnameToArgosName(pathname)}`);
  });
};

test.describe('Docusaurus site screenshots', () => {
  const pathnames = [
    'forced-colors-palette.html',
    'forced-colors-button.html',
    'forced-colors-button-disabled.html',
    'forced-colors-input.html',
  ];

  pathnames.slice(0, 10).forEach(screenshotPathname);
});
