import type { PropsWithChildren } from 'react';
import { VideoPlayer } from '@nl-design-system-community/documentation-components/src/components/VideoPlayer';
import { Heading, HeadingProps } from '@nl-design-system-community/documentation-components/src/heading/heading.tsx';
import { Paragraph } from '@nl-design-system-community/documentation-components/src/paragraph/paragraph.tsx';
import '@nl-design-system-community/documentation-components/src/components/DSWSession.css';
import clsx from 'clsx';

interface OldSessionProps {
  title: string;
  speakers: DSWSpeaker[];
  organisation: string;
  videoId?: string;
  headingLevel: HeadingProps['level'];
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
  videoId,
  children,
  headingLevel = 3,
  speakers,
  title,
}: PropsWithChildren<OldSessionProps>) => (
  <article className={clsx('ma-dsw-session')} id={title.toLowerCase().replace(/\s/gi, '-')}>
    <Heading level={headingLevel} className="ma-dsw-session__title">
      {title}
    </Heading>
    <Paragraph className="ma-dsw-session__subtitle" lead>
      {speakers
        .map((speaker) => (speaker.organisation ? `${speaker.name} - ${speaker.organisation}` : speaker.name))
        .join(' & ')}
    </Paragraph>
    {videoId ? <VideoPlayer id={videoId} title={title} /> : <></>}
    {children}
    <aside className={clsx('ma-dsw-session__speakers')}>
      {speakers.map((speaker, index) => (
        <div key={index} className={clsx('ma-dsw-session__speaker', 'ma-dsw-speaker')}>
          <img className={clsx('ma-dsw-speaker__image')} src={speaker.image.src} alt={speaker.image.alt} />
          <Paragraph className={clsx('ma-dsw-speaker__description')}>{speaker.description['nl']}</Paragraph>
        </div>
      ))}
    </aside>
  </article>
);
