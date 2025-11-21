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
  videoIds?: string[];
  captioned?: boolean;
  captionId?: string;
}

export const DSWSession = ({
  lang = 'nl',
  headingLevel = 3,
  allSpeakers,
  videoId,
  children,
  allSessions,
  sessionId,
}: PropsWithChildren<DSWSessionProps>) => {
  const session = allSessions?.find(({ uuid }) => sessionId === uuid);
  const speakers = session && session.speakers.map((fullName) => allSpeakers[fullName]).filter(Boolean);
  const videoIds = [videoId, session?.videoId, ...(session?.videoIds ?? [])].filter(Boolean);

  return session ? (
    <article className={clsx('dsw-session')}>
      <Heading
        level={headingLevel}
        className="dsw-session__title"
        id={session.subject.toLowerCase().replace(/\s/gi, '-')}
      >
        {session.subject}
      </Heading>
      <Paragraph className="dsw-session__subtitle" lead>
        {speakers &&
          speakers
            .map((speaker) => (speaker?.organisation ? `${speaker.name} - ${speaker.organisation}` : speaker.name))
            .join(' & ')}
      </Paragraph>
      {videoIds.length > 0 &&
        videoIds.map((vidId) => (
          <VideoPlayer key={vidId} id={vidId} title={session.subject} style={{ marginBlock: '20px' }} />
        ))}
      {session && session.isoDateTime && session.isoDateTime > dateNow ? (
        <Paragraph>
          <time dateTime={session.isoDateTime}>
            {new Intl.DateTimeFormat(lang, {
              dateStyle: 'full',
              timeStyle: lang === 'nl' ? 'short' : 'full',
              timeZone: 'Europe/Amsterdam',
            }).format(new Date(session.isoDateTime))}
          </time>
        </Paragraph>
      ) : (
        <></>
      )}
      {children}
      {lang === 'nl' && speakers.find(({ language }) => language !== 'nl') && (
        <Paragraph>
          <b>Goed te weten:</b> Deze sessie is in het Engels.
        </Paragraph>
      )}
      {session.captioned ? (
        session.captionId ? (
          <>
            <Paragraph>
              {lang === 'nl' ? (
                <>
                  <b>Bij deze sessie is een schrijftolk aanwezig: </b>
                </>
              ) : (
                <>
                  <b>Live captioning is available for this session: </b>
                </>
              )}
              <a href={`https://text-on-tap.live/#e=${session.captionId}`}>
                <span className="sr-only">{session.subject} </span>
                {lang === 'nl' ? 'in de browser' : 'in the browser'}
              </a>
              {lang === 'nl' ? ' of ' : ' or '}
              <a href={`https://text-on-tap.live/openoverlay.html?e=${session.captionId}`}>
                <span className="sr-only">{session.subject} </span>
                {lang === 'nl' ? 'met de Overlay tool' : 'with the de Overlay tool'}
              </a>
            </Paragraph>
          </>
        ) : lang === 'nl' ? (
          <Paragraph>Voor deze sessie hebben we nog geen schrijftolk gevonden</Paragraph>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      <aside className={clsx('dsw-session__speakers')}>
        {speakers.map((speaker, index) => (
          <div key={index} className={clsx('dsw-session__speaker', 'dsw-speaker')}>
            <img className={clsx('dsw-speaker__image')} src={speaker.image.src} alt={speaker.image.alt} />
            <Paragraph className={clsx('dsw-speaker__description')}>{speaker.description[lang]}</Paragraph>
          </div>
        ))}
      </aside>
      {session && session.icalLink && !videoId ? (
        <Paragraph>
          <ButtonLink href={session.icalLink} download={session.icalLink} appearance="primary-action-button">
            <Icon>
              <IconCalendarEvent />
            </Icon>
            <span>
              {lang === 'nl' ? (
                <>
                  Zet<span className="sr-only">{session.subject}</span> in je agenda
                </>
              ) : (
                <>
                  Add<span className="sr-only">{session.subject}</span> to your calendar
                </>
              )}
            </span>
          </ButtonLink>
        </Paragraph>
      ) : null}
    </article>
  ) : (
    <></>
  );
};
