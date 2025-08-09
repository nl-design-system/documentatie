import HeartbeatJSON from '@site/docs/community/events/heartbeat/heartbeats.json';
import { VideoPlayer } from './VideoPlayer';
import MDXContent from '@theme/MDXContent';
import Markdown from 'react-markdown';

interface Heartbeat {
  id?: string;
  date: string;
  topic: string;
  description: string;
  youtubeId: string;
}

export const HeartbeatEpisode = ({ id }: { id?: string }) => {
  const episode: Heartbeat = id ? HeartbeatJSON.find((h) => h.id === id) : HeartbeatJSON[0];

  return episode ? (
    <>
      <VideoPlayer videoId={episode.youtubeId} />
      <MDXContent>
        <Markdown>{episode.description}</Markdown>
      </MDXContent>
    </>
  ) : (
    'Geen video gevonden'
  );
};
