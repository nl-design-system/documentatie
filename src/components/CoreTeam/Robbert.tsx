import React from 'react';
import Avatar from './avatars/kernteam_robbert.svg';
import { Paragraph } from '@utrecht/component-library-react';
import { TeamMember } from './TeamMember';

const Robbert: TeamMember = {
  Avatar,
  name: 'Robbert Broersma',
  role: 'Tech lead',
  email: 'robbert.broersma@ictu.nl',
  slack: { mention: '@Robbert', id: 'U019X17U5HQ' },
  Description: () => (
    <>
      <Paragraph>
        Robbert is tech-lead van NL Design System. Met zijn ervaring bij andere Design Systems kent hij zowel de
        valkuilen van een team overstijgend Design System als de waarde van het hergebruik van stabiele, toegankelijke
        componenten.
      </Paragraph>
      <Paragraph>
        Hij werkt graag online samen met verschillene organisaties om dit community gedragen Design System neer te
        zetten. Zijn passie voor keukengerei is daarbij niet te missen! RVS met een haakje? Dan kun je het
        waarschijnlijk op zijn achtergrond vinden.
      </Paragraph>
    </>
  ),
};

export default Robbert;
