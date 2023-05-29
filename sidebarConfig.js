/**
// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  richtlijnen: [
    {
      type: 'category',
      label: 'Richtlijnen',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/richtlijnen/sidebar'),
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/componenten/sidebar'),
    },
  ],
  meedoen: [
    {
      type: 'category',
      label: 'Meedoen',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/meedoen/sidebar'),
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/voorbeelden/sidebar'),
    },
  ],
  onderzoek: [
    {
      type: 'category',
      label: 'Onderzoek',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/onderzoek/sidebar'),
    },
  ],
  videos: [
    {
      type: 'category',
      label: 'Videos',
      collapsible: false,
      className: 'sidebar__main-category',
      items: require('./docs/project/sidebar'),
    },
  ],
}

module.exports = sidebars
