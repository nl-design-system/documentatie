import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json' with { type: 'json' };

// These dependencies import CSS from their JavaScript (directly or through their own dependencies).
// Node.js cannot import CSS, so leaving them external breaks server-side rendering (e.g. Astro SSR).
// Bundling them lets Vite extract their CSS into `dist/index.css`.
//
// The `documentation-*` workspace packages are imported from their TypeScript sources and are not published
// in a usable form, so they are bundled as well.
const bundledPackages = [
  /^@rijkshuisstijl-community\//,
  /^@nl-design-system-candidate\/code-block-react/,
  /^@nl-design-system-community\/documentation-(i18n|index|markdown-plugins)/,
];

const externalPackages = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];

const isExternal = (id: string) => {
  // Bundle all CSS into `dist/index.css`, so `dist/index.js` contains no CSS imports
  if (id.endsWith('.css') || bundledPackages.some((pattern) => pattern.test(id))) {
    return false;
  }
  return externalPackages.some((name) => id === name || id.startsWith(`${name}/`));
};

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rolldownOptions: {
      external: isExternal,
      // Only used by `vite build --watch`. (Setting `build.watch` instead would turn every build into a watch build.)
      watch: {
        // `vite-plugin-dts` adds directories to the watcher. Because we import from the other `documentation-*`
        // workspace packages, that ends up being the repository root, so changes in `dist/` (our own output) and
        // `.git/` (e.g. the editor fetching) trigger endless rebuilds. Only react to changes in source files.
        include: ['src/**', '../documentation-*/src/**'],
      },
    },
  },
  plugins: [react(), dts()],
});
