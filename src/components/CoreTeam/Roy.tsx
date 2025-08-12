import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Roy: TeamMember = {
  name: 'Roy Honders',
  role: 'Developer relations engineer',
  slack: { mention: '@Roy Honders', id: 'U07ELQC7295' },
  Description: () => (
    <>
      <Paragraph>
        Als Developer Relations Engineer ondersteunt Roy het NL Design System bij het onboarden van nieuwe projecten en ontwikkelaars. De website van NL Design System staat boordevol informatie, voorbeelden en linkjes – Roy helpt om dit uit te breiden met veelgevraagde onderwerpen uit de community en om de vindbaarheid van de juiste informatie te verbeteren.
      </Paragraph>
      <Paragraph>
        Met zijn achtergrond als front-end developer en passie voor design en toegankelijkheid weet Roy technische details helder uit te leggen aan uiteenlopende doelgroepen. Hij deelt graag zijn kennis, presenteert met enthousiasme en zet zich in om ontwikkelaars snel wegwijs te maken.
      </Paragraph>
      <Paragraph>
        In zijn vrije tijd leest hij graag boeken en gaat hij er vaak op uit – altijd op zoek naar nieuwe inspiratie en een goed verhaal.
      </Paragraph>
    </>
  ),
};

export default Roy;
