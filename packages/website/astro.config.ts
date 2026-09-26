import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkCanvasFix } from './markdown-plugins/remark-canvas-fix';
import { sharedPlugins } from './markdown-plugins/shared-plugins';
import { clientLoadPlugin } from './markdown-plugins/remark-client-load';
import { fileURLToPath } from 'node:url';
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
      directives: [
        "base-uri 'self'",
        `connect-src 'self' ${cspConnectSrcSources} blob: data:`,
        "default-src 'self'",
        "font-src 'self'",
        "form-action 'self' https://nl-design-system.email-provider.eu",
        "frame-src 'self' https://www.youtube-nocookie.com",
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
        {
          find: '@site/src/components/Markdown',
          replacement: fileURLToPath(new URL('./src/components/markdown/markdown.ts', import.meta.url)),
        },
      ],
    },
  },

  markdown: {
    remarkPlugins: sharedPlugins.remarkPlugins,
    rehypePlugins: sharedPlugins.rehypePlugins,
    syntaxHighlight: 'prism',
  },

  integrations: [
    mdx({
      remarkPlugins: [
        ...sharedPlugins.remarkPlugins,
        remarkCanvasFix,
        clientLoadPlugin(['Videoplayer', 'VideoPlayer', 'Checklist', 'DesignTokens']),
      ],
      rehypePlugins: sharedPlugins.rehypePlugins,
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
