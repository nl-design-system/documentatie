// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const navbar = require('./navConfig');
const footer = require('./footerConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NL Design System',
  tagline: 'Eén design system voor alle huisstijlen',
  url: 'https://nldesignsystem.nl',
  baseUrl: '/documentatie/',
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
        docs: {
          sidebarPath: require.resolve('./sidebarConfig.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/fonts.css')],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar,
      footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
