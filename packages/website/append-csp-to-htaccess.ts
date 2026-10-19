import type { AstroIntegration } from 'astro';
import type { Root } from 'hast';
import { glob, readFile, writeFile } from 'node:fs/promises';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { remove } from 'unist-util-remove';
import { visit } from 'unist-util-visit';

/**
 * Astro integration to move the CSP values from the generated <meta> elements
 * into the .htaccess file.
 *
 * Astro places the CSP values into the generated document, however that
 * prevents services like Google Translate to inject translation scripts.
 * By extracting the values and placing them in the .htaccess file we can
 * choose to not include CSP rules when we need to
 */
export const appendCSPToHTAccess: () => AstroIntegration = () => {
  const integration: AstroIntegration = {
    name: 'csp-to-htaccess',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        logger.info('Moving CSP rules from `<meta>` element to .htaccess file');

        for await (const entry of glob('**/index.html', { cwd: dir })) {
          const fileDir = dir.pathname;
          const indexFilepath = `${fileDir}${entry}`;
          const htaccessFilepath = `${fileDir}${entry.replace('index.html', '.htaccess')}`;
          const contents = await readFile(indexFilepath, { encoding: 'utf-8' });
          let cspValue: string = '';
          const setCspValue = (value: string) => (cspValue = value);
          const file = await unified()
            .use(rehypeParse)
            .use(extractCSP(setCspValue))
            .use(rehypeStringify)
            .process(contents);

          if (!cspValue) return;
          const htAccessContent = await createHtAccessString(htaccessFilepath, cspValue);

          await writeFile(indexFilepath, String(file));
          await writeFile(htaccessFilepath, String(htAccessContent));
        }
      },
    },
  };

  async function createHtAccessString(filename: string, cspValue: string) {
    let existingContents = '';
    try {
      existingContents = await readFile(filename, { encoding: 'utf-8' });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }

    if (existingContents.includes('Header set Content-Security-Policy'))
      throw new Error(`${filename} already contains mod_headers.c`);

    return `${existingContents}\n\nHeader set Content-Security-Policy ${JSON.stringify(cspValue)}\n`;
  }

  /** Remove the CSP rule from the html document and return the value via a callback */
  function extractCSP(setCspValue: (_value: string) => void) {
    return function plugin() {
      return function execute(tree: Root) {
        visit(tree, 'element', function (node) {
          if (node.tagName === 'meta' && node.properties['httpEquiv']) {
            const content = node.properties['content'];
            if (typeof content !== 'string') return;
            if (node.properties['httpEquiv'].toString().toLowerCase() !== 'content-security-policy') return;

            if (content) {
              setCspValue(content);
            }

            remove(tree, node);
          }
        });
      };
    };
  }

  return integration;
};
