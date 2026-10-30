import { AstroIntegration, AstroIntegrationLogger } from 'astro';
import { Root } from 'hast';
import { glob, readFile } from 'node:fs/promises';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to find all links in the document and verify if they are dead
 * When they are, report them
 */
function reportDeadLinks(
  filepath: string,
  availablePaths: string[],
  ignore: RegExp[],
  logger: AstroIntegrationLogger,
  flag: () => void,
) {
  return function plugin() {
    const normaliseTrailingSlash = (string: string) => `/${string}/`.replaceAll('//', '/');
    const allPaths = [...availablePaths, ...globalThis.unlistedPages].map(normaliseTrailingSlash);

    return function execute(tree: Root) {
      const deadLinks: string[] = [];

      visit(tree, 'element', function (node) {
        if (node.tagName !== 'a' || !node.properties['href']) return;

        const url = new URL(node.properties['href'], 'https://nldesignsystem.nl');
        if (url.origin !== 'https://nldesignsystem.nl') return;

        let isIgnored = false;
        ignore?.forEach((regex) => {
          if (regex.exec(url.pathname)) {
            isIgnored = true;
          }
        });

        if (isIgnored) return;

        const pathname = normaliseTrailingSlash(url.pathname);
        if (allPaths.includes(pathname) === false) {
          deadLinks.push(url.pathname);
        }
      });

      if (deadLinks.length) {
        flag();
        logger.error(`/${filepath.replace('index.html', '')}:\n - ${deadLinks.join('\n - ')}`);
      }
    };
  };
}

export interface DeadLinkCheckerOptions {
  /** Target routes that are known dead links */
  ignoreTarget?: RegExp[];

  /** Source files that are known to contain dead links */
  ignoreSource?: RegExp[];
}

/**
 * This integration checks internal links against the available links in
 * the sitemap. When internal links are found, it reports them.
 */
export const deadLinkChecker = (options: DeadLinkCheckerOptions) => {
  const integration: AstroIntegration = {
    name: 'dead-link-checker',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let foundDeadLinks: boolean;

        logger.info('Reading Sitemap data for available paths');
        const availableRoutes: string[] = [];
        for await (const entry of glob('**/sitemap*.xml', { cwd: dir })) {
          const sitemapFile = await readFile(`${dir.pathname}${entry}`, { encoding: 'utf-8' });
          [...sitemapFile.matchAll(/<loc>(.*?)<\/loc>/gi)]
            .map((match) => match[1].trim())
            .filter(Boolean)
            .forEach((url) => {
              const route = new URL(url);
              availableRoutes.push(route.pathname);
            });
        }

        if (availableRoutes.length === 0) {
          throw new Error('Sitemap could not be parsed or did not contain any links');
        }

        // unified pipeline to find and report dead links in a html document
        const findDeadLinks = async (filepath: string, contents: string) => {
          const processor = unified()
            .use(rehypeParse)
            .use(
              reportDeadLinks(
                filepath,
                availableRoutes,
                options.ignoreTarget || [],
                logger,
                () => (foundDeadLinks = true),
              ),
            );
          const tree = processor.parse(contents);
          await processor.run(tree);
        };

        logger.info('Checking for dead internal links in build output');
        for await (const entry of glob('**/*.html', { cwd: dir })) {
          const isIgnoredFile = options?.ignoreSource?.some((regex) => Boolean(`/${entry}`.match(regex)));

          if (isIgnoredFile === false) {
            const filepath = `${dir.pathname}${entry}`;
            const contents = await readFile(filepath, { encoding: 'utf-8' });

            await findDeadLinks(entry, contents);
          }
        }

        if (foundDeadLinks === true) {
          throw new Error('Dead links found');
        }
      },
    },
  };

  return integration;
};
