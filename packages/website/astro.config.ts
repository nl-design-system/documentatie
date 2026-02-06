import { defineConfig } from 'astro/config';

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
});
