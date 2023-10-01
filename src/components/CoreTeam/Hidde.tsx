import React from 'react';
import Avatar from './avatars/kernteam_hidde.svg';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { TeamMember } from './TeamMember';

const Hidde: TeamMember = {
  Avatar,
  name: 'Hidde de Vries',
  role: 'Developer Relations & Toegankelijkheidsspecialist',
  email: 'hidde.devries@ictu.nl',
  slack: { mention: '@Hidde', id: 'UA17NJHTR' },
  Description: () => (
    <>
      <Paragraph>
        Hidde draagt vanuit zijn Developer Relations-rol bij aan heldere technische uitleg, workshops met ontwikkelaars
        en het doorgronden van de wensen van teams die met NL Design System werken. Hij richt zich daarbij specifiek op
        leveranciers van overheden.
      </Paragraph>
      <Paragraph>
        Hij heeft zich de afgelopen jaren intensief beziggehouden met design systems en digitale toegankelijkheid, dat
        laatste onder meer bij het W3C. In zijn rol van toegankelijkheidsspecialist helpt hij om NL Design System
        componenten, documentatie en voorbeelden zo toegankelijk mogelijk te maken.
      </Paragraph>
      <Paragraph>
        Hij wordt blij van espresso tonics en van heldere, to-the-point uitleg waar developers verder mee kunnen.
      </Paragraph>
    </>
  ),
};

export default Hidde;
