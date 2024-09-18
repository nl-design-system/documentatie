import Link from '@docusaurus/Link';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import style from './DSWSession.module.css';
import { VideoPlayer } from './VideoPlayer';

interface DSWSessionProps {
  headingLevel: 2 | 3 | 4 | 5 | 6;
  title: string;
  subtitle?: string;
  speakers: DSWSpeaker[];
  description: string;
  signupLink: string;
  lang?: 'en' | 'nl';
  organisation: string;
  videoId?: string;
  captioned?: boolean;
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
  headingLevel = 3,
  title,
  speakers,
  signupLink,
  organisation,
  videoId,
  children,
  captioned,
}: PropsWithChildren<DSWSessionProps>) => (
  <article className={clsx(style['dsw-session'])} id={title.toLowerCase().replace(/\s/gi, '-')}>
    <Heading level={headingLevel} className={clsx(style['dsw-session__title'])}>
      {title}
    </Heading>
    {videoId ? (
      <VideoPlayer videoId={videoId} width="100%" height="100%" className={clsx(style['dsw-session__video'])} />
    ) : (
      <Paragraph className={clsx(style['dsw-session__subtitle'])} lead>
        {speakers.map((speaker) => speaker.name).join(' & ')}
        {', '} {organisation}
      </Paragraph>
    )}
    {children}
    {lang === 'nl' && speakers.find(({ language }) => language !== 'nl') && (
      <Paragraph>
        <b>Goed te weten:</b> Deze sessie is in het Engels.
      </Paragraph>
    )}
    {captioned && (
      <Paragraph>
        <b>Goed te weten:</b> Bij deze sessie is een schrijftolk aanwezig.
      </Paragraph>
    )}
    <aside className={clsx(style['dsw-session__speakers'])}>
      {speakers.map((speaker, index) => (
        <div key={index} className={clsx(style['dsw-session__speaker'], style['dsw-speaker'])}>
          <img className={clsx(style['dsw-speaker__image'])} src={speaker.image.src} alt={speaker.image.alt} />
          <Paragraph className={clsx(style['dsw-speaker__description'])}>{speaker.description[lang]}</Paragraph>
        </div>
      ))}
    </aside>
    {signupLink && (
      <Paragraph className={clsx(style['homepage-hero__call-to-action'])}>
        <Link className={clsx('utrecht-link', style['homepage-hero__call-to-action-link'])} to={signupLink}>
          {lang === 'en' ? 'Sign up for' : 'Aanmelden voor'} “{title}”
          <IconChevronRight
            className={clsx('utrecht-icon', style['homepage-hero__call-to-action-icon'])}
            style={{ verticalAlign: 'middle' }}
          />
        </Link>
      </Paragraph>
    )}
  </article>
);

export default DSWSession;
