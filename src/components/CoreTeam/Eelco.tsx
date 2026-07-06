import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';
import { Link } from '../Link';

const Eelco: TeamMember = {
  name: 'Eelco Bosklopper',
  role: 'Developer Relations',
  slack: { mention: '@Eelco Bosklopper', id: 'U0B9642SC3F' },
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
};

export default Eelco;
