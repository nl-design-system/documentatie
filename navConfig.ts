import type { Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  title: '',
  hideOnScroll: true,
  logo: {
    alt: 'NL Design System Logo: Link naar Homepagina',
    src: '/svg/logo-wit.svg',
  },
  items: [
    {
      type: 'doc',
      docId: 'handboek',
      position: 'left',
      label: 'Handboek',
      className: 'utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'richtlijnen/index',
      position: 'left',
      label: 'Richtlijnen',
      className: 'utrecht-link utrecht-link--html-a utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'componenten/index',
      position: 'left',
      label: 'Componenten',
      className: 'utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'voorbeelden/introductie',
      position: 'left',
      label: 'Patronen en templates',
      className: 'utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'community',
      position: 'left',
      label: 'Community',
      className: 'utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'project/index',
      position: 'left',
      label: 'Project',
      className: 'utrecht-link utrecht-link--html-a ma-navigation-bar-item',
    },
  ],
};

export default navbar;
