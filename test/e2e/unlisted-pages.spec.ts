import { expect, test } from '@playwright/test';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import * as cheerio from 'cheerio';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { globSync } from 'glob';

const sourcefiles = globSync('docs/**/*.{md,mdx}')
  .filter((sourcefile) => sourcefile.includes('_') === false)
  .map((path) => `../../${path}`);

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './packages/website/dist',
  sitemap: '/sitemap-index.xml',
};

const toPathname = (slug, pathname) => {
  const result =
    slug ||
    pathname
      .replace('../../docs', '')
      .replace('README')
      .replace(/.md?(x)/, '');

  return `${result}/`.replace('undefined', '').replace('//', '/');
};

test.describe('Unlisted pages', () => {
  const sitemapPathnames = getPathnamesFromSitemap(`${CONFIG.sitemapDir}${CONFIG.sitemap}`);

  sourcefiles.forEach((sourcefile) => {
    test.describe(sourcefile, async () => {
      let frontmatter;
      let pathname;

      test.beforeAll(async () => {
        const source = await readFile(resolve(__dirname, sourcefile), { encoding: 'utf8' });
        const { frontmatter: _frontmatter } = parseFrontmatter(source);
        pathname = toPathname(_frontmatter?.slug, sourcefile);
        frontmatter = _frontmatter;
      });

      test('is removed from the sitemap when unlisted', () => {
        if (frontmatter.unlisted) {
          expect(sitemapPathnames.includes(pathname)).toBe(false);
        }
      });

      test('prevents search engines from indexing', async ({ page }) => {
        if (frontmatter.unlisted) {
          await page.goto(`${CONFIG.baseUrl}${pathname}`);
          const robots = await page.locator('meta[name="robots" i]').getAttribute('content');

          expect(robots).toContain('noindex');
          expect(robots).toContain('nofollow');
        }
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
      .forEach(async (sitemapPath) => {
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
