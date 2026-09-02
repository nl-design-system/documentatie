import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';
import { Link } from '../Link';

const Robbert: TeamMember = {
  name: 'Robbert Broersma',
  role: 'Design System lead',
  slack: { mention: '@Robbert', id: 'U019X17U5HQ' },
  Description: () => (
    <>
      <Paragraph>
        Robbert helpt organisaties bij het complexe vraagstukken waarbij NL Design System gebruikt wordt. Hij verbindt
        verschillende organisaties en initiatieven aan elkaar en stimuleert samenwerking en kennisdeling binnen de
        community.
      </Paragraph>
      <Paragraph>
        Je kunt via <Link href="/slack/">#nl-design-system-designers en #nl-design-system-developers</Link> en tijdens{' '}
        <Link href="/events/developer-open-hour/">Developer Open Hour</Link> bij hem terecht voor vragen over de
        architectuur, de werkwijze en het Estafettemodel van NL Design System.
      </Paragraph>
    </>
  ),
};

export default Robbert;
