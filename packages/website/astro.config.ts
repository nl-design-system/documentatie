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
import { removeH1FromMarkdown } from './markdown-plugins/remark-remove-h1/index.ts';
import syntaxHighlightTheme from './src/syntax-highlight-theme.json';
const siteUrl = 'https://nldesignsystem.nl';

const cspDevConfig: AstroUserConfig = {
  security: {
    csp: false,
  },
};

const cspConnectSrcSources = ['https://*.algolia.net', 'https://*.algolianet.com', 'https://*.algolia.io'].join(' ');

const cspImgSrcSources = [
  'https://raw.githubusercontent.com',
  'https://i.ytimg.com',
  'https://www.toegankelijkheidsverklaring.nl',
  'https://github.com',
  'https://www.gebruikercentraal.nl',
  'https://designsystem.gebruikercentraal.nl',
  'https://media.licdn.com',
].join(' ');

const cspProdConfig: AstroUserConfig = {
  security: {
    csp: {
      directives: [
        "base-uri 'self'",
        `connect-src 'self' ${cspConnectSrcSources} blob: data:`,
        "default-src 'self'",
        "font-src 'self'",
        "form-action 'self'",
        `img-src 'self' ${cspImgSrcSources} blob: data:`,
        "object-src 'none'",
        'worker-src blob:',
      ],
    },
  },
};

const cspConfig = process.env['NODE_ENV'] === 'development' ? cspDevConfig : cspProdConfig;

// A global set of pages that are unlisted. This set is filled during the
// generation of the content collections.
globalThis.unlistedPages = new Set();

globalThis.isAstro = true;

// https://astro.build/config
export default defineConfig({
  publicDir: '../../static',

  build: {
    inlineStylesheets: 'never',
  },

  devToolbar: {
    enabled: false,
  },

  security: {
    csp: cspConfig.security?.csp,
  },

  site: siteUrl,

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
    },
  },

  markdown: {
    remarkPlugins: [remarkCustomHeaderId, remarkDirective, remarkAdmonitions, removeH1FromMarkdown()],
    rehypePlugins: [nldsComponentsPlugin, addTrailingSlashPlugin({ siteUrl, stripOrigin: true })],
    shikiConfig: {
      theme: syntaxHighlightTheme,
    },
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkCustomHeaderId, remarkDirective, remarkAdmonitions, removeH1FromMarkdown()],
      rehypePlugins: [nldsComponentsPlugin, addTrailingSlashPlugin({ siteUrl, stripOrigin: true })],
      shikiConfig: {
        theme: syntaxHighlightTheme,
      },
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
