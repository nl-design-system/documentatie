import { expect, test as base } from '@playwright/test';
import * as cheerio from 'cheerio';
import { readFileSync } from 'node:fs';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
};

export const test = base.extend({
  page: async ({ page }, use) => {
    const messages: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error' && msg.text().includes('violates the following Content Security Policy directive')) {
        messages.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    await use(page);
    expect(messages).toStrictEqual([]);
  },
});

test.describe('CSP issues', () => {
  const pathnames = getPathnamesFromSitemap(`${CONFIG.sitemapDir}${CONFIG.sitemap}`);

  pathnames.forEach((pathname) => {
    test(pathname, async ({ page }) => {
      const url = CONFIG.baseUrl + pathname;
      await page.goto(url, { waitUntil: 'domcontentloaded' });
    });
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

    return Array.from(new Set(paths));
  } catch (error) {
    console.warn(`Could not read sitemap at ${sitemapPath}, skipping accessibility tests generation.`, error);
    return [];
  }
}
