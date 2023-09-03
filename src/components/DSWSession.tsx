import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import style from './DSWSession.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading2, Paragraph } from '@utrecht/component-library-react';

interface DSWSessionProps {
  title: string;
  subtitle?: string;
  speaker: DSWSpeaker;
  description: string;
  signupLink: string;
  lang?: 'en' | 'nl';
  id: string;
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
  description2?: {
    nl: string;
    en?: string;
  };
  language: string;
}

export const DSWSession = ({
  id,
  lang = 'nl',
  title,
  speaker,
  signupLink,
  children,
}: PropsWithChildren<DSWSessionProps>) => (
  <article className={clsx(style['dsw-session'])} id={id}>
    <Heading2 className={clsx(style['dsw-session__title'])}>{title}</Heading2>
    <Paragraph className={clsx(style['dsw-session__subtitle'])} lead>
      {speaker.name} {lang === 'en' ? 'of' : 'van'} {speaker.organisation}
    </Paragraph>
    {children}
    {lang === 'nl' && speaker.language !== 'nl' && (
      <Paragraph>
        <b>Goed te weten:</b> Deze sessie is in het Engels.
      </Paragraph>
    )}
    <aside className={clsx(style['dsw-session__speakers'])}>
      <div className={clsx(style['dsw-session__speaker'], style['dsw-speaker'])}>
        <img className={clsx(style['dsw-speaker__image'])} src={speaker.image} alt="" />
        <Paragraph className={clsx(style['dsw-speaker__description'])}>{speaker.description[lang]}</Paragraph>
      </div>
      {speaker.description2 && (
        <div className={clsx(style['dsw-session__speaker'], style['dsw-speaker'])}>
          {speaker.image2 && <img className={clsx(style['dsw-speaker__image'])} src={speaker.image2} alt="" />}
          <Paragraph className={clsx(style['dsw-speaker__description'])}>{speaker.description2[lang]}</Paragraph>
        </div>
      )}
    </aside>
    <Paragraph className={clsx(style['homepage-hero__call-to-action'])}>
      <Link className={clsx('utrecht-link', style['homepage-hero__call-to-action-link'])} to={signupLink}>
        {lang === 'en' ? 'Sign up for' : 'Aanmelden voor'} “{title}”
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
