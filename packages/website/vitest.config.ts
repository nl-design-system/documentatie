/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// `getViteConfig` wires up Astro's Vite pipeline (integrations, aliases, MDX, …)
// so tests can import project modules and render Astro components through the
// container API. See https://docs.astro.build/en/guides/testing/#vitest
export default getViteConfig({
  test: {
    include: ['{scripts,src}/**/*.{test,spec}.{js,mjs,ts,tsx}'],
    environment: 'node',
  },
});
