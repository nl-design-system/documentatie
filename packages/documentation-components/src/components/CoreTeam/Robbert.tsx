import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Robbert: TeamMember = {
  name: 'Robbert Broersma',
  Description: () => (
    <>
      <Paragraph>
        Robbert helpt organisaties bij het oplossen van complexe vraagstukken waarbij NL Design System gebruikt wordt.
        Hij verbindt verschillende organisaties en initiatieven aan elkaar en stimuleert samenwerking en kennisdeling
        binnen de community.
      </Paragraph>
      <Paragraph>
        Je kunt via <Link href="/slack/">#nl-design-system-designers en #nl-design-system-developers</Link> en tijdens{' '}
        <Link href="/events/developer-open-hour/">Developer Open Hour</Link> bij hem terecht voor vragen over de
        architectuur, de werkwijze en het Estafettemodel van NL Design System.
      </Paragraph>
    </>
  ),
  role: 'Design System lead',
  slack: { id: 'U019X17U5HQ', mention: '@Robbert' },
};

export default Robbert;
