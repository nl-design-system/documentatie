import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    css: true,
    environment: 'jsdom',
    include: ['src/**/*.jsdom-test.{js,mjs,ts,tsx}'],
  },
});
