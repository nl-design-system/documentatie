import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Rozerin: TeamMember = {
  name: 'Rozerin Ayerdem',
  role: 'Designer',
  slack: { mention: '@Rozerin', id: 'D038ABXNAG3' },
  Description: () => (
    <>
      <Paragraph>
        Als ontwerper is Rozerin bezig met het verzamelen, toevoegen en documenteren van interactiepatronen, componenten
        en richtlijnen. Ze werkte vanuit haar eerdere rol bij de gemeente Den Haag al samen met het kernteam van NL
        Design System.
      </Paragraph>
      <Paragraph>Naast haar werk is Rozerin gepassioneerd door reizen, natuur, fotografie en architectuur.</Paragraph>
    </>
  ),
};

export default Rozerin;
