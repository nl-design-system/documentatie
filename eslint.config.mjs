import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    name: 'nl-design-system/global-ignores',
    ignores: ['**/dist/', '**/build/', '**/coverage/', '**/.docusaurus/', '**/src/theme/SearchBar/'],
  },
  {
    name: 'nl-design-system/plugins-settings',
    plugins: { react },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: '@eslint/js/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ...js.configs.recommended,
  },
  {
    name: 'typescript-eslint/configs/strict',
    extends: [...tseslint.configs.strict],
    files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    name: 'eslint-plugin-react/recommended',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat.recommended,
  },
  {
    name: 'eslint-plugin-react/jsx-runtime',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat['jsx-runtime'],
  },
  {
    // Source code that ends up in a browser
    name: 'nl-design-system/browser',
    files: ['**/src/*.ts', '**/src/*.tsx'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    // Node.js based scripts and tooling configuration
    name: 'nl-design-system/node',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    // JSON
    name: '@eslint/json/recommended',
    files: ['**/*.json'],
    ignores: ['**/package.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  //{
  //files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  //rules: {
  //...nlDesignSystemJS.rules,
  //},
  //},
  {
    // This section applies to all files
    name: 'nl-design-system/all',
    rules: {
      'array-callback-return': ['error', { checkForEach: false }],
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-eval': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-this': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-void': 'error',
      'prefer-regex-literals': 'error',
      radix: 'error',
      yoda: 'error',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },

  {
    rules: {},
  },
);
