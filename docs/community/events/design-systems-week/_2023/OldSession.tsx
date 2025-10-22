import { Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { VideoPlayer } from '@site/src/components/VideoPlayer';
import '@site/src/components/DSWSession.css';
import type { PropsWithChildren } from 'react';

interface OldSessionProps {
  title: string;
  speakers: DSWSpeaker[];
  organisation: string;
  videoId?: string;
  headingLevel: number;
}

interface DSWSpeaker {
  name: string;
  organisation: string;
  image: {
    src: string;
    alt: string;
  };
  description: {
    nl: string;
    en?: string;
  };
  language: 'nl' | 'en';
}

export const OldSession = ({
  children,
  title,
  headingLevel,
  speakers,
  videoId,
}: PropsWithChildren<OldSessionProps>) => (
  <article className={clsx('dsw-session')} id={title.toLowerCase().replace(/\s/gi, '-')}>
    <Heading level={headingLevel} className="dsw-session__title">
      {title}
    </Heading>
    <Paragraph className="dsw-session__subtitle" lead>
      {speakers
        .map((speaker) => (speaker.organisation ? `${speaker.name} - ${speaker.organisation}` : speaker.name))
        .join(' & ')}
    </Paragraph>
    {videoId ? <VideoPlayer id={videoId} title={title} style={{ marginBlock: '20px' }} /> : <></>}
    {children}
    <aside className={clsx('dsw-session__speakers')}>
      {speakers.map((speaker, index) => (
        <div key={index} className={clsx('dsw-session__speaker', 'dsw-speaker')}>
          <img className={clsx('dsw-speaker__image')} src={speaker.image.src} alt={speaker.image.alt} />
          <Paragraph className={clsx('dsw-speaker__description')}>{speaker.description['nl']}</Paragraph>
        </div>
      ))}
    </aside>
  </article>
);
