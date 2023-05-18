// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const navbar = require('./navConfig');
const footer = require('./footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NL Design System',
  tagline: 'Eén design system voor alle huisstijlen',
  url: 'https://nldesignsystem.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  projectName: 'documentatie', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebarConfig.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/',
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve('@nl-design-system-unstable/nlds-design-tokens/dist/theme.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar,
      footer,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
    },
};

module.exports = config;
