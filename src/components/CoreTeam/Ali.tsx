import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Ali: TeamMember = {
  name: 'Ali Kadhim',
  role: 'Front-end Developer',
  slack: { mention: '@Ali Kadhim', id: 'U02196SHCF6' },
  Description: () => (
    <>
      <Paragraph>
        Ali is de kracht achter de schermen voor de ontwikkel en testfase van de Candidate en Hall of Fame componenten.
        Dat doet hij op basis van alle inzichten uit het gebruik van Community componenten.
      </Paragraph>
    </>
  ),
};

export default Ali;
