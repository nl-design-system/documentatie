import type { TeamMember } from './TeamMember';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Ali: TeamMember = {
  name: 'Ali Kadhim',
  Description: () => (
    <>
      <Paragraph>
        Ali is de kracht achter de schermen voor de ontwikkel en testfase van de Candidate en Hall of Fame componenten.
        Dat doet hij op basis van alle inzichten uit het gebruik van Community componenten.
      </Paragraph>
    </>
  ),
  role: 'Front-end Developer',
  slack: { id: 'U02196SHCF6', mention: '@Ali Kadhim' },
};

export default Ali;
