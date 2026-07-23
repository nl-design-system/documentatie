import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Astrid: TeamMember = {
  name: 'Astrid Brantjes',
  role: 'Project Manager',
  slack: { mention: '@Astrid Brantjes', id: 'U06S00GPXC7' },
  Description: () => (
    <>
      <Paragraph>
        Astrid is het aanspreekpunt voor vragen over de opdracht van het NL Design System en voor het verkennen van
        nieuwe samenwerkingen vanuit beleid.
      </Paragraph>
      <Paragraph>
        Ze stemt af met betrokken organisaties om te werken aan gemeenschappelijke doelen en bewaakt daarbij de
        opdracht.
      </Paragraph>
      <Paragraph>
        Risico's, escalaties, feedback en zaken rondom de Code of Conduct bij haar of Yolijn worden gemeld.
      </Paragraph>
    </>
  ),
};

export default Astrid;
