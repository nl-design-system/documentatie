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
      href: '/github/',
    },
    {
      label: 'Slack',
      href: '/slack/',
    },
    {
      label: 'Figma',
      href: '/figma/',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/nl-design-system/',
    },
  ],
};

export default footer;
