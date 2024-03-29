import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import ReactPlayer from 'react-player';
import style from './VideoPlayer.module.css';

export const VideoPlayer = ({
  videoId,
  className,
  ...restProps
}: PropsWithChildren<{ videoId: string; className?: string }>) => (
  <ReactPlayer
    url={`https://youtube.com/watch?v=${videoId}`}
    className={`${clsx(style[`video-player`])} ${className}`}
    width="100%"
    height="100%"
    controls
    {...restProps}
    config={{ youtube: { playerVars: { disablekb: 1 } } }}
  />
);
