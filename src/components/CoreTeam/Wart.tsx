import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Wart: TeamMember = {
  name: 'Wart Burggraaf',
  role: 'Designer',
  slack: { mention: '@Wart Burggraaf', id: 'U01BNELN6KF' },
  Description: () => (
    <>
      <Paragraph>
        Als ontwerper is Wart bezig met de optimalisatie van het Estafettemodel. Hij helpt ook met de inhoud van
        documentatie, governance en contributiezaken.
      </Paragraph>
      <Paragraph>
        Zijn dag begint met hardlopen en goede koffie. Hij vindt het leuk om nieuwe dingen te leren en te proberen om
        zijn creativiteit te voeden. Dit uit zich voornamelijk in fotografie, tekenen en reizen.
      </Paragraph>
    </>
  ),
};

export default Wart;
