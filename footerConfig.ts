import type { Footer } from '@docusaurus/theme-common';

const footer: Footer = {
  style: 'light',
  links: [
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      to: '/project/kernteam',
    },
    {
      label: 'Toegankelijkheid',
      to: '/toegankelijkheidsverklaring',
    },
    {
      label: 'Privacyverklaring',
      to: '/privacyverklaring',
    },
    {
      label: 'Colofon',
      to: '/colofon',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/nl-design-system/backlog',
    },
    {
      label: 'Storybook',
      href: 'https://nl-design-system.github.io/themes',
    },
    {
      label: 'Figma',
      href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=197-664&t=t25LHoMjEkUZyEi1-1',
    },
  ],
};

export default footer;
