import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Peter: TeamMember = {
  name: 'Peter Goes',
  role: 'Front-end Developer',
  slack: { mention: '@Peter Goes', id: 'U08NPCEF41Z' },
  Description: () => (
    <>
      <Paragraph>
        Peter is Front-end Developer bij NL Design System. In deze rol bouwt hij aan nldesignsystem.nl en
        gebruikersonderzoeken.nl met het NL Design System in de hand. Door zelf gebruik te maken van NL Design System
        zien we eerder waar er ruimte voor verbetering is.
      </Paragraph>
      <Paragraph>
        In zijn vrije tijd kun je Peter rollend op skates, hangend aan een boulder muur of vogelend in de natuur vinden.
      </Paragraph>
    </>
  ),
};

export default Peter;
