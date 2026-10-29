import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.jsdom-test.{js,mjs,ts,tsx}'],
    css: true,
    environment: 'jsdom',
  },
});
