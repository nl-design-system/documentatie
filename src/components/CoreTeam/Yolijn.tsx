import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Yolijn: TeamMember = {
  name: 'Yolijn van der Kolk',
  role: 'Productmanager',
  slack: { mention: '@Yolijn', id: 'U01B7T1F24S' },
  Description: () => (
    <>
      <Paragraph>
        Yolijn is het aanspreekpunt voor vragen over de product backlog en prioritering binnen NL Design System en voor
        het verkennen van nieuwe samenwerkingen.
      </Paragraph>
      <Paragraph>
        Hierbij helpt ze nieuwe organisaties aansluiting te vinden bij NL Design System, helpt bij complexe vraagstukken
        en geeft uitleg over de werkwijze, zoals het Estafettemodel met bijbehorende Definition of Done.
      </Paragraph>
      <Paragraph>
        Ze verbindt verschillende organisaties en initiatieven aan elkaar en stimuleert samenwerking en kennisdeling
        binnen de community. Risico's, escalaties, feedback en zaken rondom de Code of Conduct kunnen bij haar worden
        gemeld.
      </Paragraph>
    </>
  ),
};

export default Yolijn;
