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
          href: 'https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek',
        },
      ],
    },
  ],
};

export default footer;
