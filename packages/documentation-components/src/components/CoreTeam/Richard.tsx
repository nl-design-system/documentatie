import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Richard: TeamMember = {
  name: 'Richard van Heuven van Staereling',
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
  role: 'DevOps & Front-end Developer',
  slack: { id: 'U094W1UDJ6A', mention: '@Richard' },
};

export default Richard;
