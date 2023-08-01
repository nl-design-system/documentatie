import React from 'react';
import Avatar from './avatars/kernteam_hidde.svg';
import { Paragraph } from '@utrecht/component-library-react';
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
        Hidde werkt als toegankelijkheidsspecialist voor NL Design System. Hij heeft zich de afgelopen jaren intensief
        beziggehouden met design systems en digitale toegankelijkheid, dat laatste onder meer bij het W3C. Daar was hij
        betrokken bij de ontwikkeling en promotie van toegankelijkheidsstandaarden als WCAG en ATAG.
      </Paragraph>
      <Paragraph>
        Hij wordt blij van espresso tonics en van heldere, to-the-point uitleg waar developers verder mee kunnen.
      </Paragraph>
    </>
  ),
};

export default Hidde;
