import type { TeamMember } from './TeamMember';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Charlotte: TeamMember = {
  name: 'Charlotte Gieltjes',
  Description: () => (
    <>
      <Paragraph>
        Charlotte verbindt developers uit verschillende organisaties en stimuleert samenwerking en kennisdeling binnen
        de community.
      </Paragraph>
      <Paragraph>
        Je kunt tijdens <Link href="/events/developer-open-hour/">Developer Open Hour</Link> en in het{' '}
        <Link href="/slack/">#nl-design-system/developers Slack kanaal</Link> bij haar terecht voor developer vragen
        rondom het gebruik van NL Design System zoals over de componenten, het handboek, het estafettemodel,
        bijeenkomsten en community sprints.
      </Paragraph>
    </>
  ),
  role: 'Developer Relations',
  slack: { id: 'U08BBDLLFGE', mention: '@Charlotte Gieltjes' },
};

export default Charlotte;
