import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Robbert: TeamMember = {
  name: 'Robbert Broersma',
  role: 'Design System lead & Developer Relations',
  slack: { mention: '@Robbert', id: 'U019X17U5HQ' },
  Description: () => (
    <>
      <Paragraph>
        Robbert is design system lead van NL Design System. Met zijn ervaring bij andere design systems kent hij zowel
        de valkuilen van een team overstijgend design system als de waarde van het hergebruik van stabiele,
        toegankelijke componenten.
      </Paragraph>
      <Paragraph>
        In de rol van developer relations werkt hij graag online samen met developers van verschillende organisaties om
        dit community gedragen design system neer te zetten. Zijn passie voor keukengerei is daarbij niet te missen! RVS
        met een haakje? Dan kun je het waarschijnlijk op zijn achtergrond vinden.
      </Paragraph>
    </>
  ),
};

export default Robbert;
