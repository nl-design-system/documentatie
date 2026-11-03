import { Paragraph } from '../../paragraph/paragraph';
import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link';

const Peter: TeamMember = {
  name: 'Peter Goes',
  role: 'Front-end Developer',
  slack: { mention: '@Peter Goes', id: 'U08NPCEF41Z' },
  Description: () => (
    <>
      <Paragraph>
        Peter is de kracht achter de schermen die de rebuild van{' '}
        <Link href="https://gebruikersonderzoeken.nl/">gebruikersonderzoeken.nl</Link> en{' '}
        <Link href="https://nldesignsystem.nl/">nldesignsystem.nl</Link> doorvoert met gebruik van NL Design System.
      </Paragraph>
    </>
  ),
};

export default Peter;
