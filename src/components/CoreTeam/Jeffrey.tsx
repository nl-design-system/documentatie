import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { Link } from '../Link';
import type { TeamMember } from './TeamMember';

const Jeffrey: TeamMember = {
  name: 'Jeffrey Lauwers',
  role: 'Designer Relations & Design System Designer',
  slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' },
  Description: () => (
    <>
      <Paragraph>
        Rozerin verbindt designers uit verschillende organisaties, stimuleert samenwerking en kennisdeling binnen de
        community en heeft altijd wel een handig linkje paraat.
      </Paragraph>
      <Paragraph>
        Je kunt bij hem terecht voor designvragen rondom: huisstijl, design tokens, componenten, patronen, templates en
        richtlijnen. Je vindt hem in het Slack kanaal <Link href="/slack/">#nl-design-system-designers</Link>, tijdens{' '}
        <Link href="/events/design-open-hour/">Design Open Hours</Link> en bij{' '}
        <Link href="/events/design-open-dag/">Design Open Dagen</Link>.
      </Paragraph>
    </>
  ),
};

export default Jeffrey;
