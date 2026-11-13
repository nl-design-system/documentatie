import type { AstroUserConfig } from 'astro';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkCanvasCode } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-canvas-code/index.ts';
import { clientLoadPlugin } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-client-load/index.ts';
import { createSharedPlugins } from '@nl-design-system-community/documentation-markdown-plugins/src/shared-plugins.ts';
import { defineConfig } from 'astro/config';
import { globSync } from 'node:fs';
import { appendCSPToHTAccess } from './append-csp-to-htaccess.ts';
import { deadLinkChecker } from './dead-link-checker.ts';
import { siteBaseUrl } from './src/seo.config.ts';

const sharedPlugins = createSharedPlugins({ siteUrl: siteBaseUrl });

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
      scriptDirective: {
        resources: ["'self'", siteBaseUrl],
      },
      styleDirective: {
        resources: ["'self'", siteBaseUrl],
      },
    },
  },
};

const cspConfig = process.env['NODE_ENV'] === 'development' ? cspDevConfig : cspProdConfig;

// A global set of pages that are unlisted. This set is filled during the
// generation of the content collections.
globalThis.unlistedPages = new Set();

const mdxClientLoad = clientLoadPlugin(['Checklist', 'DesignTokens', 'NewsletterSignUp']);

const markdownProcessor = unified({
  rehypePlugins: sharedPlugins.rehypePlugins,
  remarkPlugins: sharedPlugins.remarkPlugins,
});

const mdxProcessor = unified({
  rehypePlugins: sharedPlugins.rehypePlugins,
  remarkPlugins: [...sharedPlugins.remarkPlugins, remarkCanvasCode, mdxClientLoad],
});

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never',
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [
    mdx({ processor: mdxProcessor }),
    react(),
    sitemap({
      changefreq: 'weekly',
      filter: (page) => {
        const url = new URL(page);
        return globalThis.unlistedPages.has(url.pathname) === false;
      },
      priority: 0.5,
    }),
    deadLinkChecker({
      assets: globSync('**/*', { cwd: '../../static' }),
      ignoreTarget: [/^\/blog/, /^\/miro$/],
    }),
    appendCSPToHTAccess(),
  ],

  markdown: {
    processor: markdownProcessor,
    syntaxHighlight: 'prism',
  },

  publicDir: '../../static',

  security: {
    csp: cspConfig.security?.csp,
  },

  site: siteBaseUrl,

  vite: {
    build: {
      // prevent vite from inlining assets as data:* attributes because it violates csp rules
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: [
        {
          // dev SSR resolves @babel/runtime/helpers/* to CJS (node condition) and
          // serves it raw, leaking `require` into ESM. Force the ESM helpers.
          find: /^@babel\/runtime\/helpers\/(?!esm\/)/,
          replacement: '@babel/runtime/helpers/esm/',
        },
      ],
      noExternal: [/@rijkshuisstijl-community\/.*/],
    },
    ssr: {
      // `@prettier/sync` (used by `Canvas`) uses a worker and should be external
      external: ['@prettier/sync'],
      noExternal: [/@rijkshuisstijl-community\/.*/],
    },
  },
});
