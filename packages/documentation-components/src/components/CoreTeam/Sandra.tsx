import type { TeamMember } from './TeamMember';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Sandra: TeamMember = {
  name: 'Sandra de Jong',
  Description: () => (
    <>
      <Paragraph>Sandra is communicatieadviseur en eventmanager voor NL Design System.</Paragraph>
      <Paragraph>
        Je kunt bij haar terecht voor ideeën en vragen rondom Design Systems week, bijeenkomsten en communicatie.
      </Paragraph>
    </>
  ),
  role: 'Coördinator communicatie en evenementen',
  slack: { id: 'U093GT9PY6A', mention: '@Sandra de Jong' },
};

export default Sandra;
