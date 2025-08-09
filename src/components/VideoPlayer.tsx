import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import type { ReactPlayerProps } from 'react-player/types';

export const VideoPlayer = ({
  videoId,
  className,
  ...restProps
}: PropsWithChildren<ReactPlayerProps & { videoId: string; className?: string }>) => (
  <ReactPlayer
    src={`https://youtube.com/watch?v=${videoId}`}
    className={clsx('video-player', className)}
    width="100%"
    height="100%"
    controls
    {...restProps}
    config={{ youtube: { disablekb: 1 } }}
  />
);
