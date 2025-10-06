import { IconCalendarEvent } from '@tabler/icons-react';
import { ButtonLink, Heading, Icon, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { VideoPlayer } from './VideoPlayer';
import './DSWSession.css';

const date = new Date();
const dateNow = date.toISOString();

interface DSWSessionProps {
  headingLevel: 2 | 3 | 4 | 5 | 6;
  lang?: 'en' | 'nl';
  videoId?: string;
  captioned?: boolean;
  captionLink?: string;
  allSessions: Session[];
  allSpeakers: { [key: string]: Speaker };
  sessionId: string;
}

interface Speaker {
  name: string;
  organisation?: string;
  image: { src: string; alt: string };
  description: {
    nl: string;
    en?: string;
  };
  language: string;
}

interface Session {
  uuid: string;
  isoDateTime: string;
  speakers: string[];
  subject: string;
  icalLink?: string;
  language: { abbr: string; description: string };
  videoId?: string;
}

export const DSWSession = ({
  lang = 'nl',
  headingLevel = 3,
  allSpeakers,
  videoId,
  children,
  captioned,
  captionLink,
  allSessions,
  sessionId,
}: PropsWithChildren<DSWSessionProps>) => {
  const session = allSessions?.find(({ uuid }) => sessionId === uuid);
  const speakers = session && session.speakers.map((fullName) => allSpeakers[fullName]).filter(Boolean);

  return session ? (
    <article className={clsx('dsw-session')} id={session.subject.toLowerCase().replace(/\s/gi, '-')}>
      <Heading level={headingLevel} className="dsw-session__title">
        {session.subject}
      </Heading>
      <Paragraph className="dsw-session__subtitle" lead>
        {speakers &&
          speakers
            .map((speaker) => (speaker?.organisation ? `${speaker.name} - ${speaker.organisation}` : speaker.name))
            .join(' & ')}
      </Paragraph>
      {videoId ||
        (session?.videoId && (
          <VideoPlayer
            id={videoId ? videoId : session?.videoId}
            title={session.subject}
            style={{ marginBlock: '20px' }}
          />
        ))}
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
            <a href={captionLink}>
              tolktekst<span className="sr-only"> bij {session.subject}</span>
            </a>
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
    </article>
  ) : (
    <></>
  );
};
