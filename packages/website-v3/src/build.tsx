import merge from 'lodash-es/merge';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import process from 'node:process';
import { renderToStaticMarkup } from 'react-dom/server';
import { DocumentationPage } from './DocumentationPage';
import type { DocumentationPageProps } from './DocumentationPage';
import { mdxComponents } from './mdx-components';
import { siteConfig } from './site-config';
import { resolveUrl } from './resolve-url';
import pLimit from 'p-limit';
import type { JSXElementConstructor } from 'react';

interface WebPageProps {
  config: Partial<DocumentationPageProps>;
  MdxContent: JSXElementConstructor<object>;
  json: object;
  frontmatter: object;
  errorPage: string;
  html?: string;
  contentHtml?: string;
}

const buildConfig = {
  verbose: true,
  logErrors: true,
  jsonState: false,
};

const outputDir = resolveUrl(import.meta.url, './dist/');

const addDoctype = (html) => `<!DOCTYPE html>\n${html}`;

// const rootPath = process.cwd() + '/../..';
const rootPath = '/Users/bobby/Sites/github.com/nl-design-system/documentatie';
/**
 * Convert an `import` path to a filename that docusaurus uses to cache the `.json`
 */
const escapePath = (importRef: string) => importRef.replace(/^[^\w+]|[^\w+]$/g, '').replace(/[^\w+]/g, '-');

/**
 * Run the `docusaurus build` first, so `.docusaurus/` is populated.
 */
const init = async () => {
  const i18n = JSON.parse(await readFile(`${rootPath}/.docusaurus/i18n.json`, 'utf-8'));

  // Add the following line to `registry.js` to make it ES Modules compatible
  const registryPrefix = 'let require = { resolveWeak: () => {} };\n';
  const registryFile = await readFile(`${rootPath}/.docusaurus/registry.js`, 'utf-8');
  writeFile(`${rootPath}/.docusaurus/registry.mjs`, `${registryPrefix}${registryFile}`);

  const { default: registry } = await import(`${rootPath}/.docusaurus/registry.mjs`);
  const { default: routes } = await import(`${rootPath}/.docusaurus/routes.js`);

  const { default: docusaurusConfig } = await import(`${rootPath}/.docusaurus/docusaurus.config.mjs`);

  /**
     * Convert:
     
     */
  const flattenRoutes = (a, b) => {
    if (Array.isArray(b.routes)) {
      return [...a, b, ...b.routes.reduce(flattenRoutes, [])];
    } else {
      return [...a, b];
    }
  };
  const flatRoutes = routes.reduce(flattenRoutes, []);
  // `registry.js` contains an index of all files, convert those
  const basePath = `${rootPath}/.docusaurus/docusaurus-plugin-content-docs/default/`;
  const files = Object.entries(registry).map(
    ([hash, [_, importRef]]: [string, [() => Promise<object>, string, () => void]]) => {
      const escapedPath = escapePath(importRef);
      const partialHash = hash.substring(0, 3);
      return `${basePath}${escapedPath}-${partialHash}.json`;
    },
  );

  // Load all files that exist as JSON
  const jsons = await Promise.all(
    files
      .filter((path) => existsSync(path))
      .map((path) => {
        return async () => JSON.parse(await readFile(path, 'utf-8'));
      })
      .map(async (fn) => fn()),
  );

  await mkdir(outputDir, { recursive: true });

  const jsonData = await Promise.all(jsons);

  const pagePathMap = new Map(jsonData.map((page) => [page.slug, page]));
  const docIdMap = new Map(jsonData.map((page) => [page.id, page]));

  const sidebars = flatRoutes.reduce((obj, route) => {
    if (route.sidebar) {
      const x = {
        route,
        page: pagePathMap.get(route.path),
      };

      if (!x.page) {
        if (buildConfig.logErrors) {
          console.error(`Cannot find page for route: ${route.path}`);
        }
        return obj;
      }

      obj[route.sidebar] = Array.isArray(obj[route.sidebar]) ? [...obj[route.sidebar], x] : [x];
    }
    return obj;
  }, {});

  const locale = i18n.localeConfigs[i18n.currentLocale];
  const pageConfig = {
    lang: locale.htmlLang,
    dir: locale.direction,
    author: docusaurusConfig.title,
  };
  const createSlugLink = (slug: string) =>
    resolveUrl(docusaurusConfig.baseUrl, slug.endsWith('/') ? slug : `${slug}.html`);

  const createJsonState = async (json): Promise<WebPageProps> => {
    let errorPage = '';
    let MdxContent;
    let frontmatter;
    if (buildConfig.verbose) {
      console.log(`Rendering: ${json.source}`);
    }
    try {
      const x = await import(json.source);
      frontmatter = x.frontmatter;
      MdxContent = x['default'];
    } catch (error) {
      // Ignore import error for now
      if (buildConfig.logErrors) {
        console.error(`Could not load MDX file for: ${json.source}`);
      }
      errorPage = `<h1>Could not load MDX file for: <code>${json.source}</code></h1><pre>${JSON.stringify(error)}</pre>`;
    }

    const config = {
      navBarLinks: docusaurusConfig.themeConfig.navbar.items.map((obj) => ({
        href: obj.href || (obj.docId && docIdMap.has(obj.docId) ? createSlugLink(docIdMap.get(obj.docId).slug) : null),
        children: obj.label || obj['aria-label'],
      })),
      footerNavLinks: docusaurusConfig.themeConfig.footer.links[0].items.map(({ href, to, label }) => ({
        href: href || to,
        children: label,
      })),
      sideNavLinks:
        json.sidebar && Array.isArray(sidebars[json.sidebar])
          ? sidebars[json.sidebar].map(({ page: { slug, title } }) => ({
              href: createSlugLink(slug),
              children: title,
            }))
          : null,
      pageConfig: {
        ...pageConfig,
        pageTitle: frontmatter?.title,
        description: frontmatter?.description,
        keywords: frontmatter?.keywords,
        canonicalUrl: createSlugLink(json.permalink),
      },
      locale: {
        titleSeparator: ' · ',
      },
      siteConfig: merge({}, siteConfig, {
        baseUrl: docusaurusConfig.baseUrl,
        noindex: process.env.NODE_ENV === 'development',
      }),
    };

    return {
      config,
      json,
      frontmatter,
      MdxContent,
      errorPage,
    };
  };

  const renderWebPage = (arg): [string, WebPageProps] => {
    const { MdxContent, config, errorPage, json } = arg;
    let html = errorPage;
    let contentHtml;
    const page = (
      <DocumentationPage
        navBarLinks={config.navBarLinks}
        footerNavLinks={config.footerNavLinks}
        sideNavLinks={config.sideNavLinks}
        pageConfig={config.pageConfig}
        locale={config.locale}
        siteConfig={config.siteConfig}
      >
        {<MdxContent components={mdxComponents} />}
      </DocumentationPage>
    );
    try {
      html = addDoctype(renderToStaticMarkup(page));
      contentHtml = renderToStaticMarkup(<MdxContent />);
    } catch (error) {
      if (buildConfig.logErrors) {
        console.error(`Could not render page file for: ${json.source}`);
      }
      html = `<h1>Could not render page file for: <code>${json.source}</code></h1><pre>${String(error.stack || error)}</pre>`;
    }

    // return {
    //   ...config,
    //   html,
    // };
    return [
      json.slug,
      {
        ...arg,
        html,
        contentHtml,
      },
    ];
  };

  const writeOutput = async (route) => {
    const outputPath = route.path.endsWith('/') ? `${route.path}/index` : route.path;

    await mkdir(join(outputDir, dirname(outputPath)), { recursive: true });

    const webPage = htmlMap.get(route.path);
    const html = webPage ? webPage.html : '';
    await writeFile(`${join(outputDir, outputPath)}.html`, html);

    if (buildConfig.jsonState) {
      await writeFile(
        `${join(outputDir, outputPath)}.json`,
        webPage
          ? JSON.stringify(
              {
                config: webPage.config,
                contentHtml: webPage.contentHtml,
              },
              null,
              2,
            )
          : '{}',
      );
      await writeFile(
        `${join(outputDir, outputPath)}.source.json`,
        webPage
          ? JSON.stringify(
              {
                frontmatter: webPage.frontmatter,
                json: webPage.json,
              },
              null,
              2,
            )
          : '{}',
      );
    }
  };

  const limit = pLimit(5);

  const jsonStates = await Promise.all(
    jsons
      // .slice(0, 3)
      .map((json) => () => createJsonState(json))
      .map(limit),
  );

  // Convert each JSON file to an HTML file.
  // Look at the `source` property and render the associated `.mdx` file.
  // Store each `.html` file in the `tmp/` directory.
  const webPages = await Promise.all(jsonStates.map((state) => () => renderWebPage(state)).map(limit));
  const htmlMap = new Map(webPages);

  await Promise.all(
    flatRoutes
      // .filter((route) => route.path === '/paragraph')
      .map((route) => () => writeOutput(route))
      .map(limit),
  );
};

init();
