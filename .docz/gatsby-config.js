const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/documentatie',

  siteMetadata: {
    title: 'NL Design System',
    description: 'NL Design System website',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz',
        base: '/documentatie',
        source: './',
        'gatsby-root': null,
        files: ['**/*.{md, mdx}'],
        public: '/public',
        dest: '/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'NL Design System',
        description: 'NL Design System website',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/bobby/Sites/github.com/nl-design-system/documentatie',
          templates:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/node_modules/docz-core/dist/templates',
          docz:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz',
          cache:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/.cache',
          app:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app',
          appPackageJson:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/package.json',
          appTsConfig:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/tsconfig.json',
          gatsbyConfig:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/gatsby-config.js',
          gatsbyBrowser:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/gatsby-browser.js',
          gatsbyNode:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/gatsby-node.js',
          gatsbySSR:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/gatsby-ssr.js',
          importsJs:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app/imports.js',
          rootJs:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app/root.jsx',
          indexJs:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app/index.jsx',
          indexHtml:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app/index.html',
          db:
            '/Users/bobby/Sites/github.com/nl-design-system/documentatie/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
