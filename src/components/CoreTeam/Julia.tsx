import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';
import { Link } from '../Link';

const Julia: TeamMember = {
  name: 'Julia Tol',
  role: 'Specialist webtoegankelijkheid',
  slack: { mention: '@Julia Tol', id: 'U07H8798ZV5' },
  Description: () => (
    <>
      <Paragraph>
        Onderzoekt en schrijft richtlijnen voor het toegankelijk inzetten van NL Design System componenten.
      </Paragraph>
      <Paragraph>
        Je kunt via <Link href="/slack/">#nl-design-system-designers en #nl-design-system-developers</Link> bij haar
        terecht met vragen rondom toegankelijkheid. Bijvoorbeeld over semantische HTML, ARIA, en focusmanagement.
      </Paragraph>
    </>
  ),
};

export default Julia;
