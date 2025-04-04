module.exports = {
  dep: ['dev', 'prod'],
  install: 'always',
  packageManager: 'pnpm',
  reject: [
    ...Object.keys({
      // Defer upgrading to Docusaurus 3.1.1 because of _a lot_ of warnings,
      // due to improved broken link checking:
      // https://github.com/facebook/docusaurus/issues/9808
      '@docusaurus/core': '3.1.0',
      '@docusaurus/preset-classic': '3.1.0',
      '@docusaurus/theme-common': '3.1.0',
      '@docusaurus/theme-search-algolia': '3.1.0',
      '@docusaurus/module-type-aliases': '3.1.0',
      '@docusaurus/plugin-content-blog': '3.1.0',
      '@docusaurus/plugin-content-docs': '3.1.0',
      '@docusaurus/tsconfig': '3.1.0',
      '@docusaurus/theme-classic': '3.1.0',
      '@docusaurus/types': '3.1.0',
    }),
  ],
  root: true,
  target: 'patch',
  upgrade: true,
  workspaces: true,
};
