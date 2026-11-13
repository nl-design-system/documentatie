import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Peter: TeamMember = {
  name: 'Peter Goes',
  Description: () => (
    <>
      <Paragraph>
        Peter is de kracht achter de schermen die de rebuild van{' '}
        <Link href="https://gebruikersonderzoeken.nl/">gebruikersonderzoeken.nl</Link> en{' '}
        <Link href="https://nldesignsystem.nl/">nldesignsystem.nl</Link> doorvoert met gebruik van NL Design System.
      </Paragraph>
    </>
  ),
  role: 'Front-end Developer',
  slack: { id: 'U08NPCEF41Z', mention: '@Peter Goes' },
};

export default Peter;
