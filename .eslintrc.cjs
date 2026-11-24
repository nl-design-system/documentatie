module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      extends: ['plugin:json/recommended'],
      files: ['*.json'],
    },
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
        './.eslintrc.react.json',
        'plugin:mdx/overrides',
      ],
      files: ['*.mdx'],
      plugins: ['import'],
      rules: {
        'no-useless-escape': 'off',
      },
      settings: {
        'mdx/code-blocks': true,
      },
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['*.js', '*.jsx'],
      plugins: ['import'],
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
