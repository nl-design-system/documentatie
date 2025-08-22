import clsx from 'clsx';
import ReactPlayer from 'react-player';
import type { ReactPlayerProps } from 'react-player/types';
import './VideoPlayer.css';

export const VideoPlaylistPlayer = ({
  playlistId,
  className,
}: ReactPlayerProps & { playlistId: string; className?: string }) => (
  <ReactPlayer
    src={`https://www.youtube.com/playlist?list=${playlistId}`}
    className={clsx('video-player', className)}
    width="100%"
    height="100%"
    controls
    config={{ youtube: { disablekb: 1 } }}
  />
);
