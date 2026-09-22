import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

/**
 * @typedef {{ label: string, id?: string, type: 'heading' }} Fragment
 */

/**
 * Extract every `<h2>` heading inside `main` from a loaded cheerio document, in
 * document order, as page fragments. Skips the "Inhoudsopgave" heading and keeps
 * each fragment's label, (optional) id and type.
 *
 * The `type` field keeps the format open for growth: other kinds of in-page
 * fragments can be added later, and consumers (e.g. a dead-link checker) can
 * filter on it.
 *
 * NOTE: keep this in sync with the heading extraction in
 * `src/middleware/table-of-contents.ts` — both must select and filter headings
 * the same way so the generated pages match the on-page table of contents.
 * @param {import('cheerio').CheerioAPI} $
 * @returns {Fragment[]}
 */
function extractFragments($) {
  /**
   * @type {Fragment[]}
   */
  const fragments = [];
  $('main h2').each((_index, element) => {
    const label = $(element).text();
    const id = $(element).attr('id');
    if (label.toLowerCase() !== 'inhoudsopgave') {
      fragments.push({ label, id, type: 'heading' });
    }
  });
  return fragments;
}

const SITE_URL = 'https://nldesignsystem.nl';
const distDir = fileURLToPath(new URL('../dist', import.meta.url));
// Output ships with the `@nl-design-system-unstable/documentation` package.
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * Turn a dist-relative html file path into a clean site route.
 * `dist/foo/index.html` -> `/foo/`, `dist/bar.html` -> `/bar`, `dist/index.html` -> `/`.
 * @param {string} htmlFile absolute path to the html file
 * @returns {string}
 */
function toRoute(htmlFile) {
  const rel = relative(distDir, htmlFile).split(sep).join('/');
  // `foo/index.html` -> `foo/` (trailing slash kept), `bar.html` -> `bar`
  const route = rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  return '/' + route;
}

const htmlFiles = [];
for await (const relPath of glob('**/*.html', { cwd: distDir })) {
  const htmlFile = join(distDir, relPath);
  // Only generate routes and anchors for the `/richtlijnen` path.
  if (toRoute(htmlFile).startsWith('/richtlijnen')) {
    htmlFiles.push(htmlFile);
  }
}

const pages = (
  await Promise.all(
    htmlFiles.map(async (htmlFile) => {
      const path = toRoute(htmlFile);
      const html = await readFile(htmlFile, 'utf8');
      return {
        path,
        url: new URL(path, SITE_URL).href,
        file: relative(distDir, htmlFile).split(sep).join('/'),
        fragments: extractFragments(cheerio.load(html)),
      };
    }),
  )
).sort((a, b) => a.path.localeCompare(b.path));

const output = {
  $comment: 'This file is currently incomplete, it only contains some pages, not all pages.',
  site: SITE_URL,
  pages,
};

const outFile = join(docsDistDir, 'guideline-pages.json');
await mkdir(docsDistDir, { recursive: true });
await writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(`Wrote ${pages.length} pages to ${relative(process.cwd(), outFile)}`);
