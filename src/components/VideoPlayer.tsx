import React from 'react';
import ReactPlayer from 'react-player';
import clsx from 'clsx';
import style from './VideoPlayer.module.css';

export const VideoPlayer = ({ videoId, className, ...restProps }) => (
  <ReactPlayer url={`https://youtube.com/watch?v=${videoId}&disablekb=1`} className={`${clsx(style[`video-player`])} ${className}`} width="100%" height="100%" controls {...restProps} />
);
