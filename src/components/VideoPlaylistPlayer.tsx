import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import type { ReactPlayerProps } from 'react-player/types';

export const VideoPlaylistPlayer = ({
  playlistId,
  className,
  ...restProps
}: PropsWithChildren<ReactPlayerProps & { playlistId: string; className?: string }>) => (
  <ReactPlayer
    src={`https://www.youtube.com/playlist?list=${playlistId}`}
    className={clsx('video-player', className)}
    width="100%"
    height="100%"
    controls
    {...restProps}
    config={{ youtube: { disablekb: 1 } }}
  />
);
