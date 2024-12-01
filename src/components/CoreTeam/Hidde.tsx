import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Hidde: TeamMember = {
  name: 'Hidde de Vries',
  role: 'Developer Relations Developer',
  slack: { mention: '@Hidde', id: 'UA17NJHTR' },
  Description: () => (
    <>
      <Paragraph>
        Hidde maakt als Developer Relations Developer het gebruik van NL Design System makkelijker via het verbeteren
        van documentatie, voorbeelden en de website. Voorheen was hij als PR lead verantwoordelijk voor de
        communicatiestrategie, bijeenkomsten en de promotie van NL Design System.
      </Paragraph>
      <Paragraph>
        Hij wordt blij van espresso tonics en van heldere, to-the-point uitleg die mensen duidelijkheid geeft. Maar wel
        met voldoende nuance.
      </Paragraph>
    </>
  ),
};

export default Hidde;
