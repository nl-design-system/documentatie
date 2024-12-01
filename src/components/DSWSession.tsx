import Link from '@docusaurus/Link';
import { IconCalendarEvent, IconChevronRight } from '@tabler/icons-react';
import { ButtonLink, Heading, Icon, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import type { Session } from './SessionTable';
import { VideoPlayer } from './VideoPlayer';
import './DSWSession.css';

const date = new Date();
const dateNow = date.toISOString();

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
  captionLink?: string;
  session?: Session;
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
  captionLink,
  session,
}: PropsWithChildren<DSWSessionProps>) => (
  <article className={clsx('dsw-session')} id={title.toLowerCase().replace(/\s/gi, '-')}>
    <Heading level={headingLevel} className="dsw-session__title">
      {title}
    </Heading>
    {videoId || session?.videoId ? (
      <VideoPlayer
        videoId={videoId ? videoId : session?.videoId}
        width="100%"
        height="100%"
        className="dsw-session__video"
      />
    ) : (
      <Paragraph className="dsw-session__subtitle" lead>
        {speakers.map((speaker) => speaker.name).join(' & ')}
        {organisation ? ', ' + organisation : ''}
      </Paragraph>
    )}
    {session && session.isoDateTime && session.isoDateTime > dateNow && session.icalLink && !videoId ? (
      <Paragraph>
        <ButtonLink
          href={session.icalLink}
          download={session.icalLink}
          style={{ paddingInlineStart: 0, paddingInlineEnd: 0 }}
        >
          <Icon>
            <IconCalendarEvent />
          </Icon>
          <time dateTime={session.isoDateTime}>
            {new Intl.DateTimeFormat(lang, {
              dateStyle: 'full',
              timeStyle: lang === 'nl' ? 'short' : 'full',
              timeZone: 'Europe/Amsterdam',
            }).format(new Date(session.isoDateTime))}
          </time>
        </ButtonLink>
      </Paragraph>
    ) : null}
    {children}
    {lang === 'nl' && speakers.find(({ language }) => language !== 'nl') && (
      <Paragraph>
        <b>Goed te weten:</b> Deze sessie is in het Engels.
      </Paragraph>
    )}
    {captioned && (
      <Paragraph>
        <b>Goed te weten:</b> Bij deze sessie is een schrijftolk aanwezig
        {captionLink && (
          <>
            {' '}
            (
            <a href={captionLink}>
              tolktekst<span className="sr-only"> bij {title}</span>
            </a>
            )
          </>
        )}
        .
      </Paragraph>
    )}
    <aside className={clsx('dsw-session__speakers')}>
      {speakers.map((speaker, index) => (
        <div key={index} className={clsx('dsw-session__speaker', 'dsw-speaker')}>
          <img className={clsx('dsw-speaker__image')} src={speaker.image.src} alt={speaker.image.alt} />
          <Paragraph className={clsx('dsw-speaker__description')}>{speaker.description[lang]}</Paragraph>
        </div>
      ))}
    </aside>
    {signupLink && (
      <Paragraph className={clsx('homepage-hero__call-to-action')}>
        <Link className={clsx('utrecht-link', 'homepage-hero__call-to-action-link')} to={signupLink}>
          {lang === 'en' ? 'Sign up for' : 'Aanmelden voor'} “{title}”
          <IconChevronRight
            className={clsx('utrecht-icon', 'homepage-hero__call-to-action-icon')}
            style={{ verticalAlign: 'middle' }}
          />
        </Link>
      </Paragraph>
    )}
  </article>
);
