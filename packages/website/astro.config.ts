import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkCustomHeaderId from 'remark-custom-header-id';
const siteUrl = 'https://nldesignsystem.nl';

// https://astro.build/config
export default defineConfig({
  publicDir: '../../static',

  build: {
    inlineStylesheets: 'never',
  },

  devToolbar: {
    enabled: false,
  },

  site: siteUrl,

  vite: {
    build: {
      // prevent vite from inlining assets as data:* attributes because it violates csp rules
      assetsInlineLimit: 0,
    },
  },

  integrations: [
    mdx({
      remarkPlugins: [remarkCustomHeaderId],
    }),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.5,
    }),
  ],
});
