import { Card } from '../../../packages/website/src/components/card/card';
import { Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import Ali from './Ali';
import Astrid from './Astrid';
import Charlotte from './Charlotte';
import Eelco from './Eelco';
import Jeffrey from './Jeffrey';
import Julia from './Julia';
import Peter from './Peter';
import Renate from './Renate';
import Richard from './Richard';
import Robbert from './Robbert';
import Rozerin from './Rozerin';
import Sandra from './Sandra';
import Yolijn from './Yolijn';
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
