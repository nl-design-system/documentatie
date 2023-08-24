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
      link: {
        type: 'generated-index',
        title: 'Richtlijnen',
        slug: 'richtlijnen',
        keywords: ['Richtlijnen', 'overzicht'],
      },
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
      link: {
        type: 'generated-index',
        title: 'Meedoen',
        slug: 'meedoen',
        keywords: ['Meedoen', 'overzicht'],
      },
      items: require('./docs/meedoen/sidebar'),
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Voorbeelden',
        slug: 'voorbeelden',
        keywords: ['Voorbeelden', 'overzicht'],
      },
      items: require('./docs/voorbeelden/sidebar'),
    },
  ],
  onderzoek: [
    {
      type: 'category',
      label: 'Onderzoek',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Onderzoek',
        slug: 'onderzoek',
        keywords: ['Onderzoek', 'overzicht'],
      },
      items: require('./docs/onderzoek/sidebar'),
    },
  ],
  events: [
    {
      type: 'category',
      label: 'Events',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Events',
        slug: 'events',
        keywords: ['Videos', 'Events', 'overzicht'],
      },
      items: require('./docs/project/events/sidebar'),
    },
  ],
  project: [
    {
      type: 'category',
      label: 'Project',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Project',
        slug: 'project',
        keywords: ['Project', 'overzicht'],
      },
      items: require('./docs/project/sidebar'),
    },
  ],
};

module.exports = sidebars;
