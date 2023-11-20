import React from 'react';
import ReactPlayer from 'react-player';

export const VideoPlayer = ({ videoId, ...restProps }) => (
  <ReactPlayer url={`https://youtube.com/watch?v=${videoId}&disablekb=1`} controls {...restProps} />
);
