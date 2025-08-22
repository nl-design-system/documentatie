import clsx from 'clsx';
import ReactPlayer from 'react-player';
import type { ComponentProps } from 'react';
import './VideoPlayer.css';

type ReactPlayerProps = ComponentProps<typeof ReactPlayer>;

export const VideoPlayer = ({ videoId, className }: ReactPlayerProps & { videoId: string; className?: string }) => (
  <ReactPlayer
    src={`https://youtube.com/watch?v=${videoId}`}
    className={clsx('video-player', className)}
    width="100%"
    height="100%"
    controls
    config={{ youtube: { disablekb: 1 } }}
  />
);
