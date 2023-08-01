import React from 'react';
import clsx from 'clsx';
import style from './CoreTeam.module.css';
import { Card, CardContent, CardGroup, CardIllustration } from '../CardGroup';
import { Heading, HeadingGroup, Link, Paragraph } from '@utrecht/component-library-react';
import Peter from './Peter';
import Robbert from './Robbert';
import Yolijn from './Yolijn';
import Jeffrey from './Jeffrey';
import Andrea from './Andrea';
import Hidde from './Hidde';

const coreteam = [Peter, Yolijn, Robbert, Jeffrey, Hidde, Andrea];

export const CoreTeam = ({ headingLevel }: { headingLevel: number }) => {
  return (
    <CardGroup appearance="large">
      {coreteam.map(({ Avatar, name, role, Description, email, slack }) => {
        return (
          <Card appearance="large" className={clsx(style['core-team__card'])} component="section" key={name}>
            <CardIllustration className={clsx(style['core-team__illustration'])}>
              <Avatar className={clsx(style['core-team__avatar'], style['core-team__avatar--peter'])} />
            </CardIllustration>
            <CardContent className={clsx(style['core-team__content'])}>
              <HeadingGroup className={clsx(style['core-team__heading'])}>
                <Heading level={headingLevel} className={clsx(style['core-team__heading-title'])}>
                  {name}
                </Heading>
                <Paragraph className={clsx(style['core-team__heading-subtitle'])}>{role}</Paragraph>
              </HeadingGroup>
              <div className={clsx(style['core-team__description'])}>
                <Description />
              </div>

              <Paragraph>
                Email adres: <Link href={`mailto:${email}`}>{email}</Link>
                <br />
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
