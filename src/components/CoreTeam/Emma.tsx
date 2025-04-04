import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Emma: TeamMember = {
  name: 'Emma Koole',
  role: 'Visual Designer',
  slack: { mention: '@Emma Koole', id: 'U07E0E2BY82' },
  Description: () => (
    <>
      <Paragraph>
        In de rol van Visual Designer houdt Emma zich bezig met de huisstijl van NL Design System en het maken van
        infographics die NL Design System uitleggen. De afgelopen jaren heeft zij als designer meegewerkt om
        organisaties visueel sterk op de kaart te zetten, waaronder het opzetten en verbeteren van design systems. Deze
        kennis zet ze nu in nu voor NL Design System.
      </Paragraph>
      <Paragraph>
        Emma eindigt haar dag graag op de spinning fiets. In haar vrije tijd houdt ze ervan om te lezen, podcasts te
        luisteren en te reizen.
      </Paragraph>
    </>
  ),
};

export default Emma;
