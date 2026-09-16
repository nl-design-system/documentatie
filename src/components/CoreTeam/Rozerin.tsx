import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { Link } from '../Link';
import type { TeamMember } from './TeamMember';

const Rozerin: TeamMember = {
  name: 'Rozerin Ayerdem',
  role: 'Designer Relations & Design System Designer',
  slack: { mention: '@Rozerin', id: 'D038ABXNAG3' },
  Description: () => (
    <>
      <Paragraph>
        Rozerin verbindt designers uit verschillende organisaties, stimuleert samenwerking en kennisdeling binnen de
        community en heeft altijd wel een handig linkje paraat.
      </Paragraph>
      <Paragraph>
        Je kunt bij haar terecht voor designvragen rondom: huisstijl, design tokens, componenten, patronen, templates en
        richtlijnen. Je vindt haar in het Slack kanaal <Link href="/slack/">#nl-design-system-designers</Link>, tijdens{' '}
        <Link href="/events/design-open-hour/">Design Open Hours</Link> en bij{' '}
        <Link href="/events/design-open-dag/">Design Open Dagen</Link>.
      </Paragraph>
    </>
  ),
};

export default Rozerin;
