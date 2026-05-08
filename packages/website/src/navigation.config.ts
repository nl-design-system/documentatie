import { navigationItem, navigationGroup } from './navigation';

export const navigation = navigationGroup({
  index: navigationItem({ href: '/', label: 'Home' }),
  items: [
    navigationGroup({
      label: 'Handboek',
      items: [
        navigationItem('docs/handboek/introductie.md'),
        navigationItem('docs/handboek/estafettemodel.mdx'),
        navigationItem('docs/handboek/componenten-vinden.mdx'),
        navigationGroup({ filePath: 'docs/handboek/definition-of-done' }),
        navigationGroup({ filePath: 'docs/handboek/huisstijl-vastleggen' }),
        navigationGroup({ filePath: 'docs/handboek/designer', label: 'Voor designers' }),
        navigationGroup({ filePath: 'docs/handboek/developer', label: 'Voor developers' }),
        navigationGroup({ filePath: 'docs/handboek/organisatie', label: 'Voor organisaties' }),
        navigationGroup({ filePath: 'docs/handboek/organisatie', label: 'Voor organisaties' }),
        navigationItem('docs/handboek/leverancier/introductie.md'),
        navigationItem('docs/handboek/manager/introductie.md'),
        navigationGroup({ filePath: 'docs/baseline' }),
        navigationItem('docs/woordenlijst/index.mdx'),
      ],
    }),
    navigationGroup({
      filePath: 'docs/richtlijnen',
    }),
  ],
});
