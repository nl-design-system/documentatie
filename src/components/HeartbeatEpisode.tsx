import HeartbeatJSON from '../../docs/community/events/heartbeat/heartbeat.json';
import { VideoPlayer } from '@site/src/components/VideoPlayer';
import MDXContent from '@theme/MDXContent';
import { Heading, HeadingGroup, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import Markdown from 'react-markdown';

interface Heartbeat {
  id: number;
  date: string;
  description: string[];
  youtubeId: string;
}

interface HeartbeatEpisodeProps {
  id?: number;
  headingLevel?: number;
}

export const HeartbeatEpisode = ({ id, headingLevel }: HeartbeatEpisodeProps) => {
  const episode: Heartbeat = id ? HeartbeatJSON.find((h) => h.id === id) : HeartbeatJSON[0];

  return episode ? (
    <>
      {!!headingLevel && (
        <HeadingGroup>
          <Heading level={headingLevel}>
            Heartbeat van{' '}
            {new Date(episode.date).toLocaleDateString('NL-nl', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Heading>
        </HeadingGroup>
      )}
      <MDXContent>
        {episode.description.map((description) => (
          <Markdown key={description}>{description}</Markdown>
        ))}
      </MDXContent>
      {episode.youtubeId ? (
        <VideoPlayer videoId={episode.youtubeId} />
      ) : (
        <Paragraph>
          Deze video is op aanvraag beschikbaar. Stuur ons een mailtje{' '}
          <Link href="mailto:info@nldesignsystem.nl">info@nldesignsystem.nl</Link>
        </Paragraph>
      )}
    </>
  ) : (
    <></>
  );
};
