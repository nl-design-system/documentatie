import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Renate: TeamMember = {
  name: 'Renate Bruinenberg',
  role: 'Communicatieadviseur',
  slack: { mention: '@Renate Bruinenberg', id: 'U039TN2VAC8' },
  Description: () => (
    <>
      <Paragraph>
        Als communicatieadviseur is Renate degene die zich samen met Hidde bezighoudt met de communicatie vanuit en
        rondom het NL Design System. De kans is dus groot dat je haar naam regelmatig voorbij ziet komen onder artikelen
        en blogs. Ook maakt ze de maandelijkse nieuwsbrief waarin alle updates gedeeld worden.
      </Paragraph>
      <Paragraph>
        In haar vrije tijd is ze druk met haar grote gezin, waarvoor ze graag in de keuken staat om lekkere gerechten te
        bereiden. Die passie voor gezelligheid en lekker eten komt voort uit haar Italiaanse roots.
      </Paragraph>
      <Paragraph>
        Volgens Renate wordt communiceren over het NL Design System alleen maar leuker met input vanuit de community.
        Dus heb je iets leuks te vertellen of wil je een keer meewerken aan een blogartikel? Laat het haar dan vooral
        weten!{' '}
      </Paragraph>
    </>
  ),
};

export default Renate;
