import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkCustomHeaderId from 'remark-custom-header-id';
import remarkDirective from 'remark-directive';
import { remarkAdmonitions } from './markdown-plugins/admonitions';
import { nldsComponentsPlugin } from './markdown-plugins/rehype-nlds-components';
import { addTrailingSlashPlugin } from './markdown-plugins/rehype-trailing-slash';
import { removeH1FromMarkdown } from './markdown-plugins/remark-remove-h1';
import { remarkUnwrapDiv } from './markdown-plugins/remark-unwrap-div';
import { remarkCanvasFix } from './markdown-plugins/remark-canvas-fix';
import { remarkUndoInlineDirectives } from './markdown-plugins/remark-undo-inline-directives';
import { remarkUnwrapParagraph } from './markdown-plugins/remark-unwrap-paragraph';
import { clientLoadPlugin } from './markdown-plugins/remark-client-load';
import { siteBaseUrl } from './src/seo.config';

const cspDevConfig: AstroUserConfig = {
  security: {
    csp: false,
  },
};

const cspConnectSrcSources = ['https://*.algolia.net', 'https://*.algolianet.com', 'https://*.algolia.io'].join(' ');

const cspImgSrcSources = [
  'https://raw.githubusercontent.com',
  'https://i.ytimg.com',
  'https://img.youtube.com',
  'https://www.toegankelijkheidsverklaring.nl',
  'https://github.com',
  'https://www.gebruikercentraal.nl',
  'https://designsystem.gebruikercentraal.nl',
  'https://media.licdn.com',
].join(' ');

const cspProdConfig: AstroUserConfig = {
  security: {
    csp: {
      styleDirective: {
        resources: ["'self'", siteBaseUrl],
      },
      scriptDirective: {
        resources: ["'self'", siteBaseUrl],
      },
      directives: [
        `base-uri 'self' ${siteBaseUrl}`,
        `connect-src 'self' ${siteBaseUrl} ${cspConnectSrcSources} blob: data:`,
        `default-src 'self' ${siteBaseUrl}`,
        `font-src 'self' ${siteBaseUrl}`,
        `form-action 'self' ${siteBaseUrl} https://nl-design-system.email-provider.eu`,
        `frame-src 'self' ${siteBaseUrl} https://www.youtube-nocookie.com`,
        `img-src 'self' ${siteBaseUrl} ${cspImgSrcSources} blob: data:`,
        "object-src 'none'",
        'worker-src blob:',
      ],
    },
  },
};

const cspConfig = process.env['NODE_ENV'] === 'development' ? cspDevConfig : cspProdConfig;

const isPreview = process.env['ASTRO_PREVIEW'] === 'true';
const basePath = isPreview ? '/private/next' : undefined;
const outDir = isPreview ? './tmp/preview-dist' : './dist';

// A global set of pages that are unlisted. This set is filled during the
// generation of the content collections.
globalThis.unlistedPages = new Set();

globalThis.isAstro = true;

// https://astro.build/config
export default defineConfig({
  publicDir: '../../static',
  base: basePath,
  outDir: outDir,

  build: {
    inlineStylesheets: 'never',
  },

  devToolbar: {
    enabled: false,
  },

  security: {
    csp: cspConfig.security?.csp,
  },

  site: siteBaseUrl,

  vite: {
    build: {
      // prevent vite from inlining assets as data:* attributes because it violates csp rules
      assetsInlineLimit: 0,
    },
    ssr: {
      noExternal: [/@rijkshuisstijl-community\/.*/],
    },
    resolve: {
      noExternal: [/@rijkshuisstijl-community\/.*/],
      alias: [
        {
          // dev SSR resolves @babel/runtime/helpers/* to CJS (node condition) and
          // serves it raw, leaking `require` into ESM. Force the ESM helpers.
          find: /^@babel\/runtime\/helpers\/(?!esm\/)/,
          replacement: '@babel/runtime/helpers/esm/',
        },
        {
          find: '@utrecht/component-library-react/dist/css-module',
          replacement: '@utrecht/component-library-react',
        },
        {
          find: '@utrecht/component-library-react/css-module',
          replacement: '@utrecht/component-library-react',
        },
        {
          find: /^@nl-design-system-candidate\/(.+)-react\/css$/,
          replacement: '@nl-design-system-candidate/$1-react',
        },
      ],
    },
  },

  markdown: {
    remarkPlugins: [
      remarkUnwrapDiv,
      remarkCustomHeaderId,
      remarkDirective,
      remarkUndoInlineDirectives,
      remarkAdmonitions,
      remarkUnwrapParagraph,
      removeH1FromMarkdown(),
    ],
    rehypePlugins: [
      nldsComponentsPlugin,
      addTrailingSlashPlugin({ siteUrl: siteBaseUrl, stripOrigin: true, stripExtensions: ['.md', '.mdx'] }),
    ],
    syntaxHighlight: 'prism',
  },

  integrations: [
    mdx({
      remarkPlugins: [
        remarkCanvasFix,
        remarkUnwrapDiv,
        remarkCustomHeaderId,
        remarkDirective,
        remarkUndoInlineDirectives,
        remarkAdmonitions,
        remarkUnwrapParagraph,
        clientLoadPlugin(['Videoplayer', 'VideoPlayer', 'Checklist', 'DesignTokens']),
        removeH1FromMarkdown(),
      ],
      rehypePlugins: [
        nldsComponentsPlugin,
        addTrailingSlashPlugin({ siteUrl: siteBaseUrl, stripOrigin: true, stripExtensions: ['.md', '.mdx'] }),
      ],
      syntaxHighlight: 'prism',
    }),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.5,
      filter: (page) => {
        const url = new URL(page);
        return globalThis.unlistedPages.has(url.pathname) === false;
      },
    }),
  ],
});
