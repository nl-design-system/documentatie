import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Julia: TeamMember = {
  name: 'Julia Tol',
  Description: () => (
    <>
      <Paragraph>
        Julia onderzoekt en schrijft richtlijnen voor het toegankelijk inzetten van NL Design System componenten.
      </Paragraph>
      <Paragraph>
        Je kunt via <Link href="/slack/">#nl-design-system-designers en #nl-design-system-developers</Link> bij haar
        terecht met vragen rondom toegankelijkheid. Bijvoorbeeld over semantische HTML, ARIA, en focusmanagement.
      </Paragraph>
    </>
  ),
  role: 'Specialist webtoegankelijkheid',
  slack: { id: 'U07H8798ZV5', mention: '@Julia Tol' },
};

export default Julia;
