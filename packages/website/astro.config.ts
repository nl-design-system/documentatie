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
const siteUrl = 'https://nldesignsystem.nl';

const cspDevConfig: AstroUserConfig = {
  security: {
    csp: false,
  },
};

const isAbsoluteURL = (arg: unknown): arg is string => {
  try {
    return typeof arg === 'string' && new URL(arg) && true;
  } catch {
    return false;
  }
};

const getCspSource = (arg: string) => {
  const url = new URL(arg);

  // Exclude username, password and portname, pathname, query and fragment
  return `${url.protocol}//${url.hostname}`;
};

// https://vercel.com/docs/environment-variables/system-environment-variables#VERCEL_URL
const selfHostname =
  typeof process.env['VERCEL_URL'] === 'string'
    ? `https://${process.env['VERCEL_URL']}`
    : isAbsoluteURL(process.env['ASTRO_BASE_URL'])
      ? getCspSource(process.env['ASTRO_BASE_URL'])
      : '';

const deploymentPath = isAbsoluteURL(process.env['ASTRO_BASE_URL'])
  ? new URL(process.env['ASTRO_BASE_URL']).pathname
  : typeof process.env['ASTRO_BASE_URL'] === 'string'
    ? process.env['ASTRO_BASE_URL']
    : '';

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
  selfHostname,
]
  .filter(Boolean)
  .join(' ');

const cspProdConfig: AstroUserConfig = {
  security: {
    csp: {
      styleDirective: {
        resources: ["'self'", selfHostname].filter(Boolean),
      },
      scriptDirective: {
        resources: ["'self'", selfHostname].filter(Boolean),
      },
      directives: [
        `base-uri 'self' ${selfHostname}`,
        `connect-src 'self' ${selfHostname} ${cspConnectSrcSources} blob: data:`,
        `default-src 'self' ${selfHostname}`,
        `font-src 'self' ${selfHostname}`,
        `form-action 'self' ${selfHostname} https://nl-design-system.email-provider.eu`,
        `frame-src 'self' ${selfHostname} https://www.youtube-nocookie.com`,
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
  base: deploymentPath,

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
      addTrailingSlashPlugin({ siteUrl, stripOrigin: true, stripExtensions: ['.md', '.mdx'] }),
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
        addTrailingSlashPlugin({ siteUrl, stripOrigin: true, stripExtensions: ['.md', '.mdx'] }),
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
