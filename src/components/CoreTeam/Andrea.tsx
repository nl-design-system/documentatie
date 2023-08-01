import React from 'react';
import Avatar from './avatars/kernteam_andrea.svg';
import { Paragraph } from '@utrecht/component-library-react';
import { TeamMember } from './TeamMember';

const Andrea: TeamMember = {
  Avatar,
  name: 'Andrea Busse',
  role: 'Developer',
  email: 'andrea.busse@ictu.nl',
  slack: { mention: '@Andrea Busse', id: 'U04LLAFJQP7' },
  Description: () => (
    <>
      <Paragraph>
        Andrea is front-end developer bij het NL Design System. Ze is opgegroeid in Duitsland en na haar studie verhuisd
        naar Nederland.
      </Paragraph>
      <Paragraph>
        Buiten werk houd ze zich graag bezig met fotografie, haar planten, aikido, en het zetten van heel goede koffie.
      </Paragraph>
    </>
  ),
};

export default Andrea;
