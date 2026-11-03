import { Paragraph } from '../../paragraph/paragraph';
import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link';

const Renate: TeamMember = {
  name: 'Renate Roke',
  role: 'Specialist webtoegankelijkheid',
  slack: { mention: '@Renate Roke', id: 'U08BJAEAEUU' },
  Description: () => (
    <>
      <Paragraph>
        Renate onderzoekt en schrijft richtlijnen voor het toegankelijk inzetten van NL Design System componenten.
      </Paragraph>
      <Paragraph>
        Je kunt via <Link href="/slack/">#nl-design-system-designers en #nl-design-system-developers</Link> bij haar
        terecht met vragen rondom toegankelijkheid. Bijvoorbeeld over semantische HTML, ARIA, en focusmanagement.
      </Paragraph>
    </>
  ),
};

export default Renate;
