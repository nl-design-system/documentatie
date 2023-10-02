// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const navbar = require('./navConfig');
const footer = require('./footerConfig');
const Parser = require('rss-parser');
const slug = require('limax');

const getBlog = () => new Parser().parseURL('https://www.gebruikercentraal.nl/category/nl-design-system/feed/');

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
  plugins: [
    async function rssBlog() {
      return {
        name: 'rss-blog',
        async loadContent() {
          return await getBlog().then((blog) =>
            blog.items.map((item) => {
              const [_, uuid] = item.guid.match(/p=(.*)/);
              const path = `/project/blog/${slug(item.title)}`;
              return { ...item, uuid, path };
            }),
          );
        },
        async contentLoaded({ content, actions }) {
          const { setGlobalData, addRoute } = actions;

          setGlobalData({ blogItems: content });

          addRoute({
            path: '/project/blog/',
            component: '@site/src/components/Blog.tsx',
            exact: true,
          });

          // @ts-ignore
          content.map(({ path }) => {
            addRoute({
              path,
              component: '@site/src/components/BlogPost.tsx',
              exact: true,
            });
          });
        },
      };
    },
  ],
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
        '✨ Het is Design Systems Week 2023! ✨<br/>15 gratis online sessies van 30 minuten! <a class="utrecht-link" href="/events/design-systems-week-2023/tijdschema">Bekijk het schema</a> en zet ze in je agenda.',
      backgroundColor: '#148839',
      textColor: '#fff',
      isCloseable: false,
    },
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    localeConfigs: {
      nl: {
        htmlLang: 'nl-NL',
      },
      en: {
        htmlLang: 'en-EN',
      },
    },
  },
};

module.exports = config;
