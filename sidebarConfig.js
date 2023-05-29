/**
// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  richtlijnen: [
    {
      type: 'category',
      label: 'Richtlijnen',
      className: 'sidebar__main-category',
      items: require('./docs/richtlijnen/sidebar'),
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      className: 'sidebar__main-category',
      items: require('./docs/componenten/sidebar'),
    },
  ],
  meedoen: [
    {
      type: 'category',
      label: 'Meedoen',
      className: 'sidebar__main-category',
      items: require('./docs/meedoen/sidebar'),
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      className: 'sidebar__main-category',
      items: require('./docs/voorbeelden/sidebar'),
    },
  ],
  onderzoek: [
    {
      type: 'category',
      label: 'Onderzoek',
      className: 'sidebar__main-category',
      items: require('./docs/onderzoek/sidebar'),
    },
  ],
  videos: [
    {
      type: 'category',
      label: 'Videos',
      className: 'sidebar__main-category',
      items: require('./docs/project/sidebar'),
    },
  ],
};

module.exports = sidebars;
