import { expect, test } from '@playwright/test';
import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';
import { siteBaseUrl, siteTitle, siteName, twitterCard } from '../../packages/website/src/seo.config';

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
};

const canonicalBaseUrl = 'https://nldesignsystem.nl';

test.describe('SEO values', () => {
  const pathnames = getPathnamesFromSitemap(`${CONFIG.sitemapDir}${CONFIG.sitemap}`);

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
            .locator('meta[name="description"]')
            .getAttribute('content')
            .then((description) => ({ description })),
          page
            .locator('link[rel="canonical"]')
            .getAttribute('href')
            .then((canonical) => ({ canonical })),
          page
            .locator('meta[name="viewport"]')
            .getAttribute('content')
            .then((viewport) => ({ viewport })),
          page
            .locator('html')
            .getAttribute('lang')
            .then((lang) => ({ lang })),
          page
            .locator('meta[name="robots"]')
            .getAttribute('content')
            .then((robots) => ({ robots })),
          page
            .locator('meta[name="keywords"]')
            .getAttribute('content')
            .then((keywords) => ({ keywords })),
          page
            .locator('meta[property="og:type"]')
            .getAttribute('content')
            .then((ogType) => ({ ogType })),
          page
            .locator('meta[property="og:site_name"]')
            .getAttribute('content')
            .then((ogSiteName) => ({ ogSiteName })),
          page
            .locator('meta[property="og:image"]')
            .getAttribute('content')
            .then((ogImage) => ({ ogImage })),
          page
            .locator('meta[property="og:image:alt"]')
            .getAttribute('content')
            .then((ogImageAlt) => ({ ogImageAlt })),
          page
            .locator('meta[property="og:description"]')
            .getAttribute('content')
            .then((ogDescription) => ({ ogDescription })),
          page
            .locator('meta[property="og:title"]')
            .getAttribute('content')
            .then((ogTitle) => ({ ogTitle })),
          page
            .locator('meta[property="og:url"]')
            .getAttribute('content')
            .then((ogUrl) => ({ ogUrl })),
          page
            .locator('meta[property="og:locale"]')
            .getAttribute('content')
            .then((ogLocale) => ({ ogLocale })),
          page
            .locator('meta[property="twitter:card"]')
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

      test('The page title is set', async () => {
        await expect(values.title).toBeTruthy();
      });

      test('The page title ends in NL Design System', async () => {
        await expect(values.title.endsWith(siteTitle)).toBeTruthy();
      });

      test.skip('The page title is less then 60 chars', async () => {
        await expect(values.title.length).toBeLessThanOrEqual(60);
      });

      test.skip('Page description is set', async () => {
        await expect(values.description).toBeTruthy();
      });

      test.skip('Page description is more than 50 chars', async () => {
        await expect(values.description.length).toBeGreaterThan(50);
      });

      test.skip('Page description is less than 160 chars', async () => {
        await expect(values.description.length).toBeLessThanOrEqual(160);
      });

      test('Canonical url is present', async () => {
        await expect(values.canonical).toBe(`${canonicalBaseUrl}${pathname}`);
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
          await expect(values.ogSiteName).toBe('nldesignsystem.nl');
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
          await expect(values.twitterCard).toBe('summary_large_image');
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
