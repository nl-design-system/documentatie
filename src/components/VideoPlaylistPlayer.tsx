import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import ReactPlayer, { type ReactPlayerProps } from 'react-player';
import './VideoPlayer.css';

export const VideoPlaylistPlayer = ({
  playlistId,
  className,
  ...restProps
}: PropsWithChildren<ReactPlayerProps & { playlistId: string; className?: string }>) => (
  <ReactPlayer
    url={`https://www.youtube.com/playlist?list=${playlistId}`}
    className={clsx('video-player', className)}
    width="100%"
    height="100%"
    controls
    {...restProps}
    config={{ youtube: { playerVars: { disablekb: 1 } } }}
  />
);
