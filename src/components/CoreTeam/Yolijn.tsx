import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import { TeamMember } from './TeamMember';
import Avatar from './avatars/kernteam_yolijn.svg';

const Yolijn: TeamMember = {
  Avatar,
  name: 'Yolijn van der Kolk',
  role: 'Productmanager & Developer Relations',
  email: 'yolijn.vanderkolk@ictu.nl',
  slack: { mention: '@Yolijn', id: 'U01B7T1F24S' },
  Description: () => (
    <>
      <Paragraph>
        Als productmanager is Yolijn graag de schakel tussen de verschillende stakeholders en het kernteam van NL Design
        System. Ze combineert graag het uitwerken van een lange termijn visie met het opknippen van grote mijlpalen naar
        kleine, toetsbare onderdelen.
      </Paragraph>
      <Paragraph>
        Bij eerdere projecten bleek al dat ze graag de schakel is tussen de makers van een component en de
        verscheidenheid aan organisaties die het white-label design system afnemen en aanpassen naar hun eigen Design
        Tokens. In de rol van Developer Relations ontdekt ze graag na een lekker kopje koffie wat de gemene deler is
        tussen componenten en stijlen bij verschillende applicaties.
      </Paragraph>
    </>
  ),
};

export default Yolijn;
