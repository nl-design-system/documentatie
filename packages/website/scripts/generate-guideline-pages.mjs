import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

/**
 * @typedef {{ label: string, id?: string }} Heading
 */

/**
 * Extract every `<h2>` heading inside `main` from a loaded cheerio document, in
 * document order. Skips the "Inhoudsopgave" heading and keeps each heading's
 * label and (optional) id.
 *
 * NOTE: keep this in sync with the heading extraction in
 * `src/middleware/table-of-contents.ts` — both must select and filter headings
 * the same way so the generated pages match the on-page table of contents.
 * @param {import('cheerio').CheerioAPI} $
 * @returns {Heading[]}
 */
function extractHeadings($) {
  /**
   * @type {Heading[]}
   */
  const headings = [];
  $('main h2').each((_index, element) => {
    const label = $(element).text();
    const id = $(element).attr('id');
    if (label.toLowerCase() !== 'inhoudsopgave') {
      headings.push({ label, id });
    }
  });
  return headings;
}

const SITE_URL = 'https://nldesignsystem.nl';
const distDir = fileURLToPath(new URL('../dist', import.meta.url));
// Output ships with the `@nl-design-system-unstable/documentation` package.
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * Recursively collect every `*.html` file below `dir`.
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        return findHtmlFiles(fullPath);
      }
      return entry.isFile() && entry.name.endsWith('.html') ? [fullPath] : [];
    }),
  );
  return files.flat();
}

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

const allHtmlFiles = await findHtmlFiles(distDir);
// Only generate routes and anchors for the `/richtlijnen` path.
const htmlFiles = allHtmlFiles.filter((htmlFile) => toRoute(htmlFile).startsWith('/richtlijnen'));

const pages = (
  await Promise.all(
    htmlFiles.map(async (htmlFile) => {
      const path = toRoute(htmlFile);
      const html = await readFile(htmlFile, 'utf8');
      return {
        path,
        url: new URL(path, SITE_URL).href,
        file: relative(distDir, htmlFile).split(sep).join('/'),
        headings: extractHeadings(cheerio.load(html)),
      };
    }),
  )
).sort((a, b) => a.path.localeCompare(b.path));

const output = {
  site: SITE_URL,
  count: pages.length,
  pages,
};

const outFile = join(docsDistDir, 'guideline-pages.json');
await mkdir(docsDistDir, { recursive: true });
await writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(`Wrote ${pages.length} pages to ${relative(process.cwd(), outFile)}`);
