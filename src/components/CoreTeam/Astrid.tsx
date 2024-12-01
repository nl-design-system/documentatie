import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Astrid: TeamMember = {
  name: 'Astrid Brantjes',
  role: 'Projectmanager',
  slack: { mention: '@Astrid Brantjes', id: 'U06S00GPXC7' },
  Description: () => (
    <>
      <Paragraph>
        Voor veel mensen is Astrid geen onbekende, want vanuit haar vorige baan bij de gemeente Utrecht hield ze zich al
        bezig met verschillende landelijke innovaties. Hierdoor heeft ze kennis van het ontwikkelen van open source
        systemen.
      </Paragraph>
      <Paragraph>
        In haar vrije tijd vind je Astrid in haar atelier, op de squashbaan en bij mooi weer op de racefiets.
      </Paragraph>
    </>
  ),
};

export default Astrid;
