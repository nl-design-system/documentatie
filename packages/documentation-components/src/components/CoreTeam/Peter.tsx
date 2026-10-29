import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';
import { Link } from '../Link';

const Peter: TeamMember = {
  name: 'Peter Goes',
  role: 'Front-end Developer',
  slack: { mention: '@Peter Goes', id: 'U08NPCEF41Z' },
  Description: () => (
    <>
      <Paragraph>
        Peter is de kracht achter de schermen die de rebuild van{' '}
        <Link href="gebruikersonderzoeken.nl">gebruikersonderzoeken.nl</Link> en{' '}
        <Link href="nldesignsystem.nl">nldesignsystem.nl</Link> doorvoert met gebruik van NL Design System.
      </Paragraph>
    </>
  ),
};

export default Peter;
