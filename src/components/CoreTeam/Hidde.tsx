import React from 'react';
import Avatar from './avatars/kernteam_hidde.svg';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { TeamMember } from './TeamMember';

const Hidde: TeamMember = {
  Avatar,
  name: 'Hidde de Vries',
  role: 'Public Relations Lead & Toegankelijkheidsspecialist',
  email: 'hidde.devries@ictu.nl',
  slack: { mention: '@Hidde', id: 'UA17NJHTR' },
  Description: () => (
    <>
      <Paragraph>
        Hidde is als PR lead bij NL Design System verantwoordelijk voor de communicatiestrategie, bijeenkomsten als de
        Heartbeat en Design Systems Week en de promotie van NL Design System bij organisaties en hun design system
        teams.
      </Paragraph>
      <Paragraph>
        Hij heeft zich de afgelopen jaren intensief beziggehouden met design systems en digitale toegankelijkheid, dat
        laatste onder meer bij het W3C. In zijn rol van toegankelijkheidsspecialist helpt hij om NL Design System
        componenten, documentatie en voorbeelden zo toegankelijk mogelijk te maken.
      </Paragraph>
      <Paragraph>
        Hij wordt blij van espresso tonics en van heldere, to-the-point uitleg die mensen duidelijkheid geeft. Maar wel
        met voldoende nuance.
      </Paragraph>
    </>
  ),
};

export default Hidde;
