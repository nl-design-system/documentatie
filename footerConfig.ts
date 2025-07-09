import type { Footer } from '@docusaurus/theme-common';

const footer: Footer = {
  style: 'dark',
  links: [
    {
      items: [
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
          href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek',
        },
      ],
    },
  ],
};

export default footer;
