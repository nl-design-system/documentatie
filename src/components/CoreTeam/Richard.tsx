import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';
import { Link } from '../Link';

const Richard: TeamMember = {
  name: 'Richard van Heuven van Staereling',
  role: 'DevOps & Front-end Developer',
  slack: { mention: '@Richard', id: 'U094W1UDJ6A' },
  Description: () => (
    <>
      <Paragraph>
        Richard adviseert de community op het gebied van security, betrouwbare build- en releasetrajecten, en het
        toepassen van best practices.
      </Paragraph>
      <Paragraph>
        Je kunt bij hem op <Link href="/slack/">#nl-design-system-developers</Link> en tijdens{' '}
        <Link href="/events/developer-open-hour/">Developer Open Hour</Link> terecht met vragen over het inrichten van
        repositories, over automatisering en pipelines, en over het waarborgen van de veiligheid van NL Design System.
      </Paragraph>
    </>
  ),
};

export default Richard;
