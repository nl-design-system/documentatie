import React from 'react';
import Avatar from './avatars/kernteam_peter.svg';
import { Paragraph } from '@utrecht/component-library-react';
import { TeamMember } from './TeamMember';

const Peter: TeamMember = {
  Avatar,
  name: 'Peter Berrevoets',
  role: 'Projectleider',
  email: 'peter.berrevoets@ictu.nl',
  slack: { mention: '@Peter Berrevoets', id: 'U04J217KA67' },
  Description: () => (
    <>
      <Paragraph>
        Peter is projectleider bij NL Design System. Hij heeft de overheid al van diverse kanten kunnen zien en werkt al
        sinds 2001 bij ICTU in diverse rollen, projecten en programma's.
      </Paragraph>
      <Paragraph>
        Oorspronkelijk komt hij uit Den Haag, maar hij woont inmiddels in het mooie Brabant. Als Peter op vrijdag niet
        aan het werk is kun je hem daar als barman achter de tap vinden.
      </Paragraph>
    </>
  ),
};

export default Peter;
