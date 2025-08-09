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
      className: 'ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'richtlijnen/README',
      position: 'left',
      label: 'Richtlijnen',
      className: 'ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'componenten/README',
      position: 'left',
      label: 'Componenten',
      className: 'ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'voorbeelden/introductie',
      position: 'left',
      label: 'Voorbeelden',
      className: 'ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'community',
      position: 'left',
      label: 'Community',
      className: 'ma-navigation-bar-item',
    },
    {
      type: 'doc',
      docId: 'project',
      position: 'left',
      label: 'Project',
      className: 'ma-navigation-bar-item',
    },
  ],
};

export default navbar;
