import React from 'react';
import Avatar from './avatars/kernteam_yolijn.svg';
import { Paragraph } from '@utrecht/component-library-react';
import { TeamMember } from './TeamMember';

const Yolijn: TeamMember = {
  Avatar,
  name: 'Yolijn van der Kolk',
  role: 'Developer Relations',
  email: 'yolijn.vanderkolk@ictu.nl',
  slack: { mention: '@Yolijn', id: 'U01B7T1F24S' },
  Description: () => (
    <>
      <Paragraph>
        Yolijn doet developer relations voor NL Design System. Bij eerdere projecten bleek al dat ze graag de schakel is
        tussen de component ontwikkelaars en de verscheidenheid aan organisaties die het white-label design system
        afnemen en aanpassen naar hun eigen Design Tokens.
      </Paragraph>
      <Paragraph>
        Ontdekken wat de gemene deler is tussen componenten en stijlen bij verschillende applicaties? Dat is precies de
        puzzel waar je haar met een goede koffie voor wakker mag maken.
      </Paragraph>
    </>
  ),
};

export default Yolijn;
