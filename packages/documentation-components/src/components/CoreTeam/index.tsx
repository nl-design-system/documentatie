import { Card } from '../../card/card.tsx';
import { Link } from '../../link/link.tsx';
import { Paragraph } from '../../paragraph/paragraph.tsx';
import Ali from './Ali.tsx';
import Astrid from './Astrid.tsx';
import Charlotte from './Charlotte.tsx';
import Eelco from './Eelco.tsx';
import Jeffrey from './Jeffrey.tsx';
import Julia from './Julia.tsx';
import Peter from './Peter.tsx';
import Renate from './Renate.tsx';
import Richard from './Richard.tsx';
import Robbert from './Robbert.tsx';
import Rozerin from './Rozerin.tsx';
import Sandra from './Sandra.tsx';
import Yolijn from './Yolijn.tsx';
import './CoreTeam.css';

const coreteam = [
  Astrid,
  Yolijn,
  Robbert,
  Jeffrey,
  Rozerin,
  Charlotte,
  Eelco,
  Renate,
  Julia,
  Richard,
  Peter,
  Ali,
  Sandra,
];

export const CoreTeam = ({ headingLevel }: { headingLevel: number }) => {
  return (
    <div className="ma-core-team">
      {coreteam.map(({ name, role, Description, slack }) => {
        return (
          <Card key={name} heading={name} headingLevel={headingLevel as 1 | 2 | 3 | 4 | 5 | 6} subheading={role}>
            <Description />{' '}
            <Paragraph>
              Slack: <Link href={`https://codefornl.slack.com/team/${slack.id}`}>{slack.mention}</Link>
            </Paragraph>
          </Card>
        );
      })}
    </div>
  );
};

export default CoreTeam;
