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
import Roy from './Roy';
import Sandra from './Sandra';
import './CoreTeam.css';

const coreteam = [Astrid, Yolijn, Robbert, Jeffrey, Rozerin, Erik, Renate, Peter, Roy, Sandra];

export const CoreTeam = ({ headingLevel }: { headingLevel: number }) => {
  return (
    <>
      {coreteam.map(({ name, role, Description, slack }) => {
        return (
          <>
            <HeadingGroup className={clsx('core-team__heading')}>
              <Heading
                level={headingLevel}
                className={clsx('core-team__heading-title')}
                id={name.toLowerCase().replace(/\s/g, '-')}
              >
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
          </>
        );
      })}
    </>
  );
};

export default CoreTeam;
