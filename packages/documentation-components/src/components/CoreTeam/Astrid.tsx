import type { TeamMember } from './TeamMember';
import { Paragraph } from '../../paragraph/paragraph.tsx';

const Astrid: TeamMember = {
  name: 'Astrid Brantjes',
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
        Risico&apos;s, escalaties, feedback en zaken rondom de Code of Conduct kunnen bij haar worden gemeld.
      </Paragraph>
    </>
  ),
  role: 'Project Manager',
  slack: { id: 'U06S00GPXC7', mention: '@Astrid Brantjes' },
};

export default Astrid;
