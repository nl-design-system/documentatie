import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import style from './DSWSession.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading2, Paragraph } from '@utrecht/component-library-react';

interface DSWSessionProps {
  title: string;
  speaker: DSWSpeaker;
  description: string;
  signupLink: string;
  lang?: 'en' | 'nl';
}

interface DSWSpeaker {
  name: string;
  organisation: string;
  image: string;
  image2?: string;
  description: {
    nl: string;
    en?: string;
  };
}

export const DSWSession = ({
  lang = 'nl',
  title,
  speaker,
  signupLink,
  children,
}: PropsWithChildren<DSWSessionProps>) => (
  <article className={clsx(style['dsw-session'])} id={speaker.name.replace(' ', '-').toLowerCase()}>
    <Heading2 className={clsx(style['dsw-session__title'])}>{title}</Heading2>
    <div className={clsx(style['dsw-session__speakerline'])}>
      {speaker.name} {lang === 'nl' ? 'van' : 'of'} {speaker.organisation}
    </div>
    {children}
    <aside className={clsx(style['dsw-session__speaker-description'])}>
      <img className={clsx(style['dsw-session__image'])} src={speaker.image} alt="" />
      {speaker.image2 && <img className={clsx(style['dsw-session__image'])} src={speaker.image2} alt="" />}
      <Paragraph>{speaker.description[lang]}</Paragraph>
    </aside>
    <Paragraph className={clsx(style['homepage-hero__call-to-action'])}>
      <Link className={clsx('utrecht-link', style['homepage-hero__call-to-action-link'])} to={signupLink}>
        Aanmelden voor “{title}”
        <IconChevronRight
          className={clsx('utrecht-icon', style['homepage-hero__call-to-action-icon'])}
          style={{ verticalAlign: 'middle' }}
        />
      </Link>
    </Paragraph>
    <div className={clsx(style['homepage-hero__linear-gradient'])} />
  </article>
);

export default DSWSession;
