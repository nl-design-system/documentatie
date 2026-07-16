import { Heading, HeadingGroup, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
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
  return coreteam.map(({ name, role, Description, slack }) => {
    const headingId = name.replace(' ', '-').toLowerCase();
    return (
      <section key="name" className={clsx('ma-core-team__item')} id="name">
        <HeadingGroup className={clsx('ma-core-team__heading')}>
          <Heading id={headingId} level={headingLevel} className={clsx('ma-core-team__heading-title')}>
            {name}
          </Heading>
          <Paragraph className={clsx('ma-core-team__heading-subtitle')}>{role}</Paragraph>
        </HeadingGroup>
        <div className={clsx('ma-core-team__description')}>
          <Description />
        </div>
        <Paragraph>
          Slack: <Link href={`https://codefornl.slack.com/team/${slack.id}`}>{slack.mention}</Link>
        </Paragraph>
      </section>
    );
  });
};

export default CoreTeam;
