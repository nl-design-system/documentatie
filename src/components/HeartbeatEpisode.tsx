import HeartbeatJSON from '../../docs/community/events/heartbeat/heartbeat.json';
import { VideoPlayer } from '@site/src/components/VideoPlayer';
import MDXContent from '@theme/MDXContent';
import { Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import Markdown from 'react-markdown';

interface Heartbeat {
  id: number;
  date: string;
  topic: string;
  description: string[];
  youtubeId: string;
}

type HeartbeatEpisodeProps = Pick<Heartbeat, 'id'>;

export const HeartbeatEpisode = ({ id }: HeartbeatEpisodeProps) => {
  const episode: Heartbeat = id ? HeartbeatJSON.find((h) => h.id === id) : HeartbeatJSON[0];

  return episode ? (
    <>
      {episode.youtubeId && <VideoPlayer videoId={episode.youtubeId} />}
      <MDXContent>
        {episode.description.map((description) => (
          <Markdown key={description}>{description}</Markdown>
        ))}
      </MDXContent>
      {!episode.youtubeId && (
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
