module.exports = {
  title: 'NL Design System',
  style: 'dark',
  logo: {
    alt: 'NLDS Logo',
    src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo.svg',
  },
  items: [
    {
      to: '/',
      position: 'left',
      label: 'Home',
      activeBaseRegex: '^/$',
    },
    {
      type: 'doc',
      docId: 'meedoen/introductie',
      position: 'left',
      label: 'Meedoen',
    },
    {
      type: 'doc',
      docId: 'richtlijnen/tekst-en-taalgebruik',
      position: 'left',
      label: 'Richtlijnen',
    },
    {
      type: 'doc',
      docId: 'componenten/README',
      position: 'left',
      label: 'Componenten',
    },
    {
      type: 'doc',
      docId: 'voorbeelden/README',
      position: 'left',
      label: 'Voorbeelden',
    },
    {
      type: 'doc',
      docId: 'onderzoek/README',
      position: 'left',
      label: 'Onderzoek',
    },
    {
      type: 'doc',
      docId: 'project/contact',
      position: 'left',
      label: 'Project',
    },
    {
      href: 'https://github.com/nl-design-system/backlog',
      label: 'GitHub',
      position: 'right',
    },
  ],
};
