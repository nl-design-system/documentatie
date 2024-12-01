import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Rian: TeamMember = {
  name: 'Rian Rietveld',
  role: 'Specialist webtoegankelijkheid',
  slack: { mention: '@Rian Rietveld', id: 'U05UTKUNF6Y' },
  Description: () => (
    <>
      <Paragraph>
        Samen met het team onderzoekt en documenteert Rian de toegankelijkheid van webcomponenten. Daarnaast schrijft en
        onderhoudt ze de richtlijnen voor het NL Design System. Hierdoor is het een stuk makkelijker een toegankelijke
        website op te zetten en te onderhouden. Rian geeft gevraagd en ongevraagd advies hoe het NL Design System zo
        toegankelijk mogelijk te maken.
      </Paragraph>
      <Paragraph>
        Ze vindt het belangrijk dat iedereen het web goed kan gebruiken. Daarom geeft ze ook les, presentaties, uitleg
        en voorlichting aan iedereen betrokken bij een website.
      </Paragraph>
      <Paragraph>
        Als ze niet aan het schrijven, reviewen of uitleggen is, werkt Rian graag in haar tuin en klust ze in huis.
      </Paragraph>
    </>
  ),
};

export default Rian;
