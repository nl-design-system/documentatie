import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Erik: TeamMember = {
  name: 'Erik Kroes',
  role: 'Specialist webtoegankelijkheid',
  slack: { mention: '@Erik Kroes', id: 'U07A578KX8D' },
  Description: () => (
    <>
      <Paragraph>
        Als (ervarings)deskundige ondersteunt Erik het NL Design System en al haar gebruikers op het gebied van digitale
        toegankelijkheid. Samen zorgen we ervoor de we de beste bouwblokken hebben, en die kunnen gebruiken om digitale
        ervaringen te bouwen voor iedereen.
      </Paragraph>
      <Paragraph>
        Digitale toegankelijkheid en design systems zijn ware passies voor Erik, vooral binnen grote organisaties. Hij
        deelt zowel binnen NL Design System als via blogs, meetups en andere kanalen.
      </Paragraph>
      <Paragraph>
        Nog belangrijker dan dat alles vind ik mijn gezin. Ik doe graag dingen samen! Als het kan in de tuin of in het
        bos. En als er dan nog tijd en energie over is? Een beetje Lego bouwen is altijd fijn!
      </Paragraph>
    </>
  ),
};

export default Erik;
