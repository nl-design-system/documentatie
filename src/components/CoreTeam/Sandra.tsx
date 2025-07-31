import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Sandra: TeamMember = {
  name: 'Sandra de Jong',
  role: 'Coördinator Communicatie & Events',
  slack: { mention: '@Sandra de Jong', id: 'U093GT9PY6A' },
  Description: () => (
    <>
      <Paragraph>
        Sandra is communicatieadviseur en eventmanager. Binnen NL Design System ondersteunt ze de communicatieaanpak en
        helpt ze inhoud en processen begrijpelijk te maken voor verschillende doelgroepen. Met haar ervaring in het
        organiseren van bijeenkomsten en (online) events zorgt ze dat samenwerking en kennisdeling soepel verlopen. Zo
        helpt zij het team om inhoud toegankelijk te maken én mensen met elkaar te verbinden.
      </Paragraph>
      <Paragraph>
        In haar vrije tijd leest ze graag een goede thriller, gaat naar het theater en doet vrijwilligerswerk bij
        Stichting SIntvoorieder1. En mocht er nog tijd over zijn dan gaat ze graag op pad met haar camera om mooie
        plaatjes te schieten.
      </Paragraph>
    </>
  ),
};

export default Sandra;
