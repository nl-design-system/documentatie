import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handboek: [
    {
      type: 'category',
      label: 'Handboek',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Handboek',
        slug: 'handboek',
        keywords: ['Handboek', 'Meedoen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'handboek/introductie' },
        { type: 'doc', id: 'handboek/estafettemodel' },
        { type: 'autogenerated', dirName: 'handboek/design-tokens' },
        {
          type: 'category',
          label: 'Voor designers',
          link: {
            type: 'generated-index',
            title: 'Voor designers',
            slug: '/handboek/designer/overzicht',
            keywords: ['designers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/designer' }],
        },
        {
          type: 'category',
          label: 'Voor developers',
          link: {
            type: 'generated-index',
            title: 'Voor developers',
            slug: '/handboek/developer/overzicht',
            keywords: ['developer', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/developer' }],
        },
        // {
        //   type: 'category',
        //   label: 'Voor organisaties',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Voor organisaties',
        //     slug: '/handboek/organisatie/overzicht',
        //     keywords: ['organisaties', 'overzicht'],
        //   },
        //   items: [{ type: 'autogenerated', dirName: 'handboek/organisatie' }],
        // },
        {
          type: 'category',
          label: 'Voor leveranciers',
          link: {
            type: 'generated-index',
            title: 'Introductie',
            slug: '/handboek/leverancier/introductie',
            keywords: ['leveranciers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/leverancier' }],
        },
        {
          type: 'category',
          label: 'Voor managers',
          link: {
            type: 'generated-index',
            title: 'Introductie',
            slug: '/handboek/manager/introductie',
            keywords: ['managers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/manager' }],
        },
      ],
    },
  ],
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
      items: [
        {
          type: 'doc',
          id: 'richtlijnen/introductie',
        },
        {
          type: 'category',
          label: 'Stijl',
          link: {
            type: 'generated-index',
            title: 'Richtlijnen voor Stijl',
            slug: '/richtlijnen/stijl/overzicht',
            keywords: ['Stijl', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/stijl' }],
        },
        {
          type: 'category',
          label: 'Formulieren',
          link: {
            type: 'generated-index',
            title: 'Richtlijnen voor formulieren',
            slug: '/richtlijnen/formulieren/overzicht',
            keywords: ['Formulieren', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/formulieren' }],
        },
        {
          type: 'category',
          label: 'WCAG',
          link: {
            type: 'generated-index',
            title: 'WCAG-succescriteria uitgelegd',
            description:
              'Een overzicht van de Web Content Accessibility Guidelines (WCAG). ' +
              'Met per succescriterium W3C-referenties, een korte samenvatting, hoe hiervoor te testen en links naar gerelateerde NLDS-richtlijnen, bronnen en gebruikersonderzoek.',

            slug: '/wcag',
            keywords: ['WCAG', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'wcag' }],
        },
      ],
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      collapsible: false,
      className: 'sidebar__main-category',
      items: [
        'componenten/README',
        'componenten/definition-of-done',
        {
          type: 'category',
          label: 'Componenten',
          collapsible: false,
          items: [{ type: 'autogenerated', dirName: 'componenten/build' }],
        },
      ],
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
      items: [
        { type: 'autogenerated', dirName: 'voorbeelden/onderzoek' },
        {
          type: 'category',
          label: 'Patronen',
          link: {
            type: 'generated-index',
            title: 'Patronen',
            slug: 'voorbeelden/patronen',
            keywords: ['Patronen', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/patronen' }],
        },
        // {
        //   type: 'category',
        //   label: 'Templates',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Templates',
        //     slug: 'voorbeelden/templates',
        //     keywords: ['Templates', 'overzicht'],
        //   },
        //   items: [{ type: 'autogenerated', dirName: 'voorbeelden/templates' }],
        // },
      ],
    },
  ],
  community: [
    {
      type: 'category',
      label: 'Community',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Community',
        slug: 'community',
        keywords: ['Community', 'overzicht'],
      },
      items: [
        {
          type: 'category',
          label: 'Events',
          description:
            'NL Design System organiseert regelmatig events, online en offline, met als doel om samen te werken en kennis te delen.',
          collapsible: true,
          link: {
            type: 'generated-index',
            title: 'Events',
            slug: '/community/events/overzicht',
          },
          items: [
            {
              type: 'doc',
              id: 'community/events/design-systems-week-2024',
            },
            {
              type: 'category',
              label: 'Heartbeat',
              link: {
                type: 'generated-index',
                title: 'Heartbeat',
                slug: '/events/heartbeat/overzicht',
              },
              description:
                "In onze tweewekelijkse Heartbeat vertellen kernteam en community wat er gaande is. Meld je aan of kijk video's terug.",
              items: [
                { type: 'doc', id: 'community/events/heartbeat/heartbeat' },
                { type: 'doc', id: 'community/events/heartbeat/videos' },
                { type: 'doc', id: 'community/events/heartbeat/aanmelden' },
              ],
            },
            {
              type: 'category',
              label: 'Design Open Hour',
              description:
                'Tijdens het (online) Design Open Hour delen designers van verschillende organisaties kennis.',
              link: {
                type: 'generated-index',
                title: 'Design Open Hour',
                slug: '/events/design-open-hour/overzicht',
              },
              items: [
                { type: 'doc', id: 'community/events/design-open-hour/design-open-hour' },
                { type: 'doc', id: 'community/events/design-open-hour/aanmelden' },
              ],
            },
            { type: 'doc', id: 'community/events/design-open-dag' },
            { type: 'doc', id: 'community/events/estafettemodeldag' },
          ],
        },
        { type: 'doc', id: 'community/sluit-je-aan' },
        { type: 'doc', id: 'community/wie-doet-mee' },
      ],
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
      items: [
        { type: 'doc', id: 'project/over-nlds' },
        { type: 'doc', id: 'project/faq' },
        { type: 'doc', id: 'project/kernteam' },
        { type: 'doc', id: 'project/blijf-op-de-hoogte' },
        { type: 'doc', id: 'project/links' },
      ],
    },
  ],
};

export default sidebars;