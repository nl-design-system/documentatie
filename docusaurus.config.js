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
        },
        theme: {
          customCss: [
            require.resolve('@nl-design-system-unstable/nlds-design-tokens/dist/root.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    navbar,
    footer,
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    colorMode: {
      disableSwitch: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'HS7BGF6EOX',
      // Public API key: it is safe to commit it
      apiKey: 'ce625c137581b1c1f4bdd3912398834b',
      indexName: 'nldesignsystem',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      //... other Algolia params
    },
    announcementBar: {
      id: 'dsw_announcement',
      content:
        'Design Systems Week 2023 komt eraan! <a class="utrecht-link" target="_blank" rel="noopener noreferrer" href="https://www.gebruikercentraal.nl/agenda/design-systems-week-2023/#event-booking">Meld je aan</a> of <a class="utrecht-link" href="https://gebruikercentraal.nl/design-systems-week">bekijk de sessies tot nu toe</a>',
      backgroundColor: '#148839',
      textColor: '#fff',
      isCloseable: false,
    },
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
    localeConfigs: {
      nl: {
        htmlLang: 'nl-NL',
      },
    },
  },
};

module.exports = config;
