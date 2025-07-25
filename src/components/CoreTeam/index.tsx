import { Heading, HeadingGroup, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import Astrid from './Astrid';
import Jeffrey from './Jeffrey';
import Robbert from './Robbert';
import Rozerin from './Rozerin';
import Yolijn from './Yolijn';
import Erik from './Erik';
import Renate from './Renate';
import Peter from './Peter';
import { Card, CardContent, CardGroup } from '../CardGroup';
import './CoreTeam.css';

const coreteam = [Astrid, Yolijn, Robbert, Jeffrey, Rozerin, Erik, Renate, Peter];

export const CoreTeam = ({ headingLevel }: { headingLevel: number }) => {
  return (
    <CardGroup appearance="large">
      {coreteam.map(({ name, role, Description, slack }) => {
        return (
          <Card appearance="large" className={clsx('core-team__card')} component="section" key={name}>
            <CardContent className={clsx('core-team__content')}>
              <HeadingGroup className={clsx('core-team__heading')}>
                <Heading level={headingLevel} className={clsx('core-team__heading-title')}>
                  {name}
                </Heading>
                <Paragraph className={clsx('core-team__heading-subtitle')}>{role}</Paragraph>
              </HeadingGroup>
              <div className={clsx('core-team__description')}>
                <Description />
              </div>

              <Paragraph>
                Slack: <Link href={`https://codefornl.slack.com/team/${slack.id}`}>{slack.mention}</Link>
              </Paragraph>
            </CardContent>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default CoreTeam;
