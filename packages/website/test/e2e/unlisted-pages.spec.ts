import { expect, test } from '@playwright/test';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { parseFrontmatter, ParseFrontmatterResult } from '@astrojs/markdown-remark';
import { globSync } from 'glob';
import { getPathnamesFromSitemap } from '../helpers/sitemap';

const sourcefiles = globSync('docs/**/*.{md,mdx}')
  .filter((sourcefile) => sourcefile.includes('_') === false)
  .map((path) => `../../${path}`);

const CONFIG = {
  baseUrl: 'http://localhost:4321',
  sitemapDir: './dist',
  sitemap: '/sitemap-index.xml',
};

const toPathname = (slug: string, pathname: string) => {
  const result =
    slug ||
    pathname
      .replace('../../docs', '')
      .replace('README', '')
      .replace(/.md?(x)/, '');

  return `${result}/`.replace('undefined', '').replace('//', '/');
};

test.describe('Unlisted pages', () => {
  const sitemapPathnames = getPathnamesFromSitemap(CONFIG.sitemapDir, CONFIG.sitemap);

  sourcefiles.forEach((sourcefile) => {
    test.describe(sourcefile, async () => {
      let frontmatter: ParseFrontmatterResult['frontmatter'];
      let pathname: string;

      test.beforeAll(async () => {
        const source = await readFile(resolve(__dirname, sourcefile), { encoding: 'utf8' });
        const { frontmatter: _frontmatter } = parseFrontmatter(source);
        pathname = toPathname(_frontmatter && _frontmatter['slug'], sourcefile);
        frontmatter = _frontmatter;
      });

      test('is removed from the sitemap when unlisted', () => {
        if (frontmatter['unlisted']) {
          expect(sitemapPathnames.includes(pathname)).toBe(false);
        }
      });

      test('prevents search engines from indexing', async ({ page }) => {
        if (frontmatter['unlisted']) {
          await page.goto(`${CONFIG.baseUrl}${pathname}`);
          const robots = await page.locator('meta[name="robots" i]').getAttribute('content');

          expect(robots).toContain('noindex');
          expect(robots).toContain('nofollow');
        }
      });
    });
  });
});
