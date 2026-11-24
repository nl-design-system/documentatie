import nlDesignSystemConfig from '@nl-design-system/eslint-config';
import astro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...nlDesignSystemConfig,
  {
    name: 'nl-design-system/global-ignores',
    ignores: ['**/dist/', '**/coverage/', '**/.astro'],
  },
  ...astro.configs['flat/recommended'],
]);
