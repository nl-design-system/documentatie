import { Paragraph } from '@nl-design-system-community/documentation-components/src/paragraph/paragraph.tsx';
import type { TeamMember } from './TeamMember';

const Sandra: TeamMember = {
  name: 'Sandra de Jong',
  role: 'Coördinator communicatie en evenementen',
  slack: { mention: '@Sandra de Jong', id: 'U093GT9PY6A' },
  Description: () => (
    <>
      <Paragraph>Sandra is communicatieadviseur en eventmanager voor NL Design System.</Paragraph>
      <Paragraph>
        Je kunt bij haar terecht voor ideeën en vragen rondom Design Systems week, bijeenkomsten en communicatie.
      </Paragraph>
    </>
  ),
};

export default Sandra;
