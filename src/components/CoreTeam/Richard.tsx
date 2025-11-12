import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Richard: TeamMember = {
  name: 'Richard van Heuven van Staereling',
  role: 'DevOps Engineer',
  slack: { mention: '@Richard', id: 'U094W1UDJ6A' },
  Description: () => (
    <>
      <Paragraph>
        Richard programmeert sinds jongs af aan voor het web en houdt zich naast code ook bezig met de automatisering
        erom heen. Hij heeft talloze design systems ontwikkeld voor de websites en apps van kleine en grote
        organisaties, en praat graag mee over hoe je de gebruikerservaring kan verbeteren.
      </Paragraph>
      <Paragraph>
        Vanuit het kernteam beheert en onderhoudt Richard de technische infrastructuur van NL Design System. Hij
        adviseert de community op het gebied van security, betrouwbare build- en releasetrajecten, en het toepassen van
        best practices.
      </Paragraph>
      <Paragraph>
        Dit alles het liefst na een goede kop koffie. En in zijn vrije tijd geeft Richard taekwondoles en pingelt hij op
        de piano.
      </Paragraph>
    </>
  ),
};

export default Richard;
