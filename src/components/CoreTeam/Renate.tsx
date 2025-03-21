import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Renate: TeamMember = {
  name: 'Renate Roke',
  role: 'Specialist webtoegankelijkheid',
  slack: { mention: '@Renate Roke', id: 'U08BJAEAEUU' },
  Description: () => (
    <>
      <Paragraph>
        Als Specialist Webtoegankelijkheid beschrijft Renate onder andere acceptatiecriteria voor componenten in het NL
        Design System en helpt ze de community op weg met tips over toegankelijkheid. Hiervoor gebruikt ze haar
        jarenlange kennis in toegankelijkheidsonderzoeken en haar passie om kennis over te dragen. Ze denkt vooral graag
        met je mee over wat er wél kan.
      </Paragraph>
      <Paragraph>
        In haar vrije tijd is Renate graag buiten: aan het wandelen, aan het kamperen of op het terras. Daarnaast leest
        ze heel veel boeken en heeft ze veel creatieve hobbies.
      </Paragraph>
    </>
  ),
};

export default Renate;
