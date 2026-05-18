import { navigationItem, navigationGroup } from './navigation';

export const navigation = navigationGroup({
  index: navigationItem({ href: '/', label: 'Home' }),
  items: [
    navigationGroup({
      label: 'Handboek',
      index: navigationItem('docs/handboek/index.json'),
      items: [
        navigationItem('docs/handboek/introductie.md'),
        navigationItem('docs/handboek/estafettemodel.mdx'),
        navigationItem('docs/handboek/componenten-vinden.mdx'),
        navigationGroup({ filePath: 'docs/handboek/definition-of-done' }),
        navigationGroup({ filePath: 'docs/handboek/huisstijl-vastleggen' }),
        navigationGroup({ filePath: 'docs/handboek/designer', label: 'Voor designers' }),
        navigationGroup({ filePath: 'docs/handboek/developer', label: 'Voor developers' }),
        navigationGroup({ filePath: 'docs/handboek/organisatie', label: 'Voor organisaties' }),
        navigationItem('docs/handboek/leverancier/introductie.md'),
        navigationItem('docs/handboek/manager/introductie.md'),
        navigationGroup({ filePath: 'docs/baseline' }),
        navigationItem('docs/woordenlijst/index.mdx'),
      ],
    }),
    navigationGroup({
      index: navigationItem('docs/richtlijnen/index.mdx'),
      items: [
        navigationGroup({ filePath: 'docs/richtlijnen/stijl' }),
        navigationGroup({ filePath: 'docs/richtlijnen/content' }),
        navigationGroup({ filePath: 'docs/richtlijnen/formulieren' }),
        navigationGroup({ filePath: 'docs/wcag' }),
        navigationItem('docs/CHANGELOG.md'),
      ],
    }),
    navigationGroup({ filePath: 'docs/componenten' }),
    navigationGroup({ filePath: 'docs/voorbeelden' }),
    navigationGroup({
      label: 'Community',
      index: navigationItem('docs/community/index.json'),
      items: [
        navigationItem('docs/community/sluit-je-aan.mdx'),
        navigationItem('docs/community/wie-doet-mee.mdx'),
        navigationItem('docs/community/community-sprints/index.mdx'),
        navigationGroup({ filePath: 'docs/community/community-sprints/mijn-services-community' }),
        navigationGroup({ filePath: 'docs/community/community-sprints/rijkshuisstijl-community' }),
        navigationItem('docs/community/expertteam-digitale-toegankelijkheid/index.mdx'),
        navigationGroup({
          label: 'Bijeenkomsten',
          filePath: 'docs/community/events',
          ignoredFiles: ['design-systems-week'],
        }),
        navigationGroup({
          index: navigationItem('docs/community/events/design-systems-week/index.mdx'),
          items: [
            navigationGroup({
              label: 'English',
              filePath: 'docs/community/events/design-systems-week/en',
              ignoredFiles: ['call-for-speakers.mdx', 'sign-up.mdx'],
            }),
            navigationGroup({
              filePath: 'docs/community/events/design-systems-week/eerdere-edities',
            }),
          ],
        }),
        navigationItem('docs/community/design-systems.mdx'),
        navigationItem('docs/community/global-design-system.mdx'),
        navigationItem('docs/community/belangenorganisaties/aanmelden.mdx'),
        navigationItem('docs/community/slack.mdx'),
      ],
    }),
    navigationGroup({ filePath: 'docs/project' }),
  ],
});
