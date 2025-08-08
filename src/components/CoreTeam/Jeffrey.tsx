import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { TeamMember } from './TeamMember';

const Jeffrey: TeamMember = {
  name: 'Jeffrey Lauwers',
  role: 'Designer',
  slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' },
  Description: () => (
    <>
      <Paragraph>
        Jeffrey vervult binnen NL Design System de designrol. Eerder realiseerde hij design systems voor het Ministerie
        van VWS, Nederlandse Spoorwegen, Nationale Nederlanden en Randstad.
      </Paragraph>
      <Paragraph>
        Naast een passie voor Design Systems en Ajax heeft Jeffrey een passie voor toegankelijkheid.
      </Paragraph>
    </>
  ),
};

export default Jeffrey;
