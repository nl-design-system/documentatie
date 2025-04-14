import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Menno: TeamMember = {
  name: 'Menno van Slooten',
  role: 'Developer Relations Engineer',
  slack: { mention: '@Menno van Slooten', id: 'U08FUAASWUE' },
  Description: () => (
    <>
      <Paragraph>
        Als Developer Relations Engineer zorgt Menno ervoor dat nieuwe developers snel aan de slag kunnen met NL Design
        system en dat eventuele vragen snel beantwoord worden.
      </Paragraph>
      <Paragraph>
        In zijn vrije tijd speelt hij graag gitaar en perfectioneert hij zijn recept voor saucijzenbroodjes.
      </Paragraph>
    </>
  ),
};

export default Menno;
