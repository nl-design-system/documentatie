import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import { TeamMember } from './TeamMember';
import Avatar from './avatars/kernteam_jeffrey.svg';

const Jeffrey: TeamMember = {
  Avatar,
  name: 'Jeffrey Lauwers',
  role: 'Designer',
  email: 'jeffrey.lauwers@ictu.nl',
  slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' },
  Description: () => (
    <>
      <Paragraph>
        Jeffrey vervult binnen het NL Design System de designrol. Eerder realiseerde hij design systems voor het
        Ministerie van VWS, Nederlandse Spoorwegen, Nationale Nederlanden en Randstad.
      </Paragraph>
      <Paragraph>
        Naast een passie voor Design Systems en Ajax heeft Jeffrey een passie voor toegankelijkheid.
      </Paragraph>
    </>
  ),
};

export default Jeffrey;
