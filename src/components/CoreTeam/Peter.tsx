import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import { TeamMember } from './TeamMember';

const Peter: TeamMember = {
  name: 'Peter Berrevoets',
  role: 'Projectleider',
  slack: { mention: '@Peter Berrevoets', id: 'U04J217KA67' },
  Description: () => (
    <>
      <Paragraph>
        Peter is projectleider bij NL Design System. Hij heeft de overheid al van diverse kanten kunnen zien en werkt al
        sinds 2001 bij ICTU in diverse rollen, projecten en programma's.
      </Paragraph>
      <Paragraph>Oorspronkelijk komt hij uit Den Haag, maar hij woont inmiddels in het mooie Brabant.</Paragraph>
    </>
  ),
};

export default Peter;
