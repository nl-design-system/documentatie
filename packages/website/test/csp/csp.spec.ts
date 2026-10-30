import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { getPathnamesFromSitemap } from '../helpers/sitemap';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './dist',
  sitemap: '/sitemap-index.xml',
};

declare global {
  interface Window {
    __cspViolations: string[];
  }
}

/**
 * Setup an event listener to listen for CSP violations before page script runs.
 */
async function setupCspViolationCollector(page: Page): Promise<() => Promise<string[]>> {
  await page.addInitScript(() => {
    window.__cspViolations = [];
    document.addEventListener('securitypolicyviolation', (e) => {
      window.__cspViolations.push(e.violatedDirective);
    });
  });
  return () => page.evaluate(() => window.__cspViolations as string[]);
}

/**
 * Read CSP rules from the route's .htaccess file. These CSP rules are then
 * injected as response headers for the page request
 */
async function injectCspHeaders(page: Page, pathname: string) {
  let csp = '';
  const url = CONFIG.baseUrl + pathname;

  try {
    const htaccess = readFileSync(`${CONFIG.sitemapDir}${pathname}.htaccess`, { encoding: 'utf-8' });
    csp = JSON.parse(htaccess.split('Content-Security-Policy')[1]?.trim());
  } catch {
    // JSON.parse fails are caught below this with a better error message
  }

  expect(csp).not.toBeFalsy();

  await page.route(url, async (route) => {
    const response = await route.fetch();
    const headers = response.headers();
    headers['content-security-policy'] = csp;
    await route.fulfill({ response, headers });
  });
}

test.describe('CSP issues', () => {
  // Validate that the test setup works. The test page contains two CSP violations
  test('are thrown on test page', async ({ page }) => {
    const pathname = '/private/content-test/csp-error/';
    const url = CONFIG.baseUrl + pathname;
    const collectViolatedDirectives = await setupCspViolationCollector(page);

    await injectCspHeaders(page, pathname);
    await page.goto(url, { waitUntil: 'networkidle' });
    const violatedDirectives = await collectViolatedDirectives();

    expect(violatedDirectives).toContainEqual('script-src-elem');
    expect(violatedDirectives).toContainEqual('style-src-attr');
    expect(violatedDirectives.length).toBe(2);
  });

  // Now that we know that the test set works, test each route in the sitemap
  const pathnames = getPathnamesFromSitemap(CONFIG.sitemapDir, CONFIG.sitemap);
  pathnames.forEach((pathname) => {
    test(pathname, async ({ page }) => {
      const url = CONFIG.baseUrl + pathname;
      const collectViolatedDirectives = await setupCspViolationCollector(page);

      await injectCspHeaders(page, pathname);
      await page.goto(url, { waitUntil: 'networkidle' });
      const violatedDirectives = await collectViolatedDirectives();

      expect(violatedDirectives.length).toBe(0);
    });
  });
});
