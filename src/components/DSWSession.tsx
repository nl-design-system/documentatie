import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import style from './DSWSession.module.css';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading2, Image, Paragraph } from '@utrecht/component-library-react';

interface DSWSessionProps {
  title: string;
  subtitle?: string;
  speakers: DSWSpeaker[];
  description: string;
  signupLink: string;
  lang?: 'en' | 'nl';
  organisation: string;
}

interface DSWSpeaker {
  name: string;
  image: { src: string; alt: string };
  description: {
    nl: string;
    en?: string;
  };
  language: string;
}

export const DSWSession = ({
  lang = 'nl',
  title,
  speakers,
  signupLink,
  organisation,
  children,
}: PropsWithChildren<DSWSessionProps>) => (
  <article className={clsx(style['dsw-session'])} id={title.toLowerCase().replace(/\s/gi, '-')}>
    <Heading2 className={clsx(style['dsw-session__title'])}>{title}</Heading2>
    <Paragraph className={clsx(style['dsw-session__subtitle'])} lead>
      {speakers.map((speaker) => speaker.name).join(' & ')} {lang === 'en' ? 'of' : 'van'} {organisation}
    </Paragraph>
    {children}
    {lang === 'nl' && speakers.find(({ language }) => language !== 'nl') && (
      <Paragraph>
        <b>Goed te weten:</b> Deze sessie is in het Engels.
      </Paragraph>
    )}
    <aside className={clsx(style['dsw-session__speakers'])}>
      {speakers.map((speaker) => (
        <div className={clsx(style['dsw-session__speaker'], style['dsw-speaker'])}>
          <img className={clsx(style['dsw-speaker__image'])} src={speaker.image.src} alt={speaker.image.alt} />
          <Paragraph className={clsx(style['dsw-speaker__description'])}>{speaker.description[lang]}</Paragraph>
        </div>
      ))}
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
