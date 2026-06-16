import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import * as cheerio from 'cheerio';
import { siteBaseUrl, siteTitle, siteName, twitterCard } from '../../packages/website/src/seo.config';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
};

test.describe('SEO values', async () => {
  const pathnames = await getPathnamesFromSitemap(`${CONFIG.sitemapDir}${CONFIG.sitemap}`);

  pathnames.forEach(async (pathname) => {
    test.describe(pathname, async () => {
      let page;
      let values;

      test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto(`${CONFIG.baseUrl}${pathname}`);
        values = await Promise.all([
          page
            .locator('head title')
            .innerText()
            .then((title) => ({ title })),
          page
            .locator('meta[name="description" i]')
            .getAttribute('content')
            .then((description) => ({ description })),
          page
            .locator('link[rel="canonical" i]')
            .getAttribute('href')
            .then((canonical) => ({ canonical })),
          page
            .locator('meta[name="viewport" i]')
            .getAttribute('content')
            .then((viewport) => ({ viewport })),
          page
            .locator('meta[charset]')
            .getAttribute('charset')
            .then((charset) => ({ charset })),
          page
            .locator('html')
            .getAttribute('dir')
            .then((dir) => ({ dir })),
          page
            .locator('html')
            .getAttribute('lang')
            .then((lang) => ({ lang })),
          page
            .locator('meta[name="robots" i]')
            .getAttribute('content')
            .then((robots) => ({ robots })),
          page
            .locator('meta[name="keywords" i]')
            .getAttribute('content')
            .then((keywords) => ({ keywords })),
          page
            .locator('meta[property="og:type" i]')
            .getAttribute('content')
            .then((ogType) => ({ ogType })),
          page
            .locator('meta[property="og:site_name" i]')
            .getAttribute('content')
            .then((ogSiteName) => ({ ogSiteName })),
          page
            .locator('meta[property="og:image" i]')
            .getAttribute('content')
            .then((ogImage) => ({ ogImage })),
          page
            .locator('meta[property="og:image:alt" i]')
            .getAttribute('content')
            .then((ogImageAlt) => ({ ogImageAlt })),
          page
            .locator('meta[property="og:description" i]')
            .getAttribute('content')
            .then((ogDescription) => ({ ogDescription })),
          page
            .locator('meta[property="og:title" i]')
            .getAttribute('content')
            .then((ogTitle) => ({ ogTitle })),
          page
            .locator('meta[property="og:url" i]')
            .getAttribute('content')
            .then((ogUrl) => ({ ogUrl })),
          page
            .locator('meta[property="og:locale" i]')
            .getAttribute('content')
            .then((ogLocale) => ({ ogLocale })),
          page
            .locator('meta[property="twitter:card" i]')
            .getAttribute('content')
            .then((twitterCard) => ({ twitterCard })),
        ]).then((values) => Object.assign({}, ...values));
      });

      test('lang is set', async () => {
        if (pathname.includes('/en/')) {
          await expect(values.lang).toBe('en');
        } else {
          await expect(values.lang).toBe('nl');
        }
      });

      test('dir is set', async () => {
        await expect(['rtl', 'ltr'].includes(values.dir.toLowerCase())).toBeTruthy();
      });

      test('charset is utf-8', async () => {
        await expect(['utf8', 'utf-8'].includes(values.charset.toLowerCase())).toBeTruthy();
      });

      test('The page title is set', async () => {
        await expect(values.title).toBeTruthy();
      });

      test('The page title ends in NL Design System', async () => {
        await expect(values.title.endsWith(siteTitle)).toBeTruthy();
      });

      test.skip('The page title is less then 60 chars', async () => {
        const [title] = values.title.split(' ·');
        await expect(title.length).toBeLessThanOrEqual(60);
      });

      test('Page description is set', async () => {
        await expect(values.description).toBeTruthy();
      });

      test.skip('Page description is more than 50 chars', async () => {
        await expect(values.description.length).toBeGreaterThan(50);
      });

      test.skip('Page description is less than 160 chars', async () => {
        await expect(values.description.length).toBeLessThanOrEqual(160);
      });

      test('Canonical url is present', async () => {
        await expect(values.canonical).toBe(`${siteBaseUrl}${pathname}`);
      });

      test('User can scale page', async () => {
        await expect(values.viewport?.includes('user-scalable=no')).toBeFalsy();
      });

      test('The page is tells robots to index itself', async () => {
        await expect(values.robots.includes('index')).toBeTruthy();
      });

      test('The page two or more keywords', async () => {
        await expect(values.keywords.split(',').length).toBeGreaterThan(1);
      });

      test.describe('Open Graph Tags', async () => {
        test('type is set', async () => {
          await expect(['website', 'article'].includes(values.ogType)).toBeTruthy();
        });
        test('site name is set', async () => {
          await expect(values.ogSiteName).toBe(siteName);
        });
        test('image is set', async () => {
          await expect(values.ogImage?.startsWith('http')).toBe(true);
        });
        test('image alt is set', async () => {
          await expect(values.ogImageAlt).toBeTruthy();
        });
        test('url is set', async () => {
          await expect(values.ogUrl).toBe(values.canonical);
        });
        test('title is set', async () => {
          await expect(values.ogTitle).toBe(values.title);
        });
        test('description is set', async () => {
          await expect(values.ogDescription).toBe(values.description);
        });
        test('locale is set', async () => {
          await expect(values.ogLocale).toBe(values.lang);
        });
        test('twitter card is set', async () => {
          await expect(values.twitterCard).toBe(twitterCard);
        });
      });
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
