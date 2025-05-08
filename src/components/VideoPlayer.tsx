import type { PropsWithChildren } from 'react';
import { YouTubeVideo, type YouTubeVideoProps } from '@utrecht/youtube-video-react/css';
import './VideoPlayer.css';

export interface VideoPlayerProps extends YouTubeVideoProps {
  videoId?: string;
}

export const VideoPlayer = ({ videoId, ...restProps }: PropsWithChildren<VideoPlayerProps>) => (
  <YouTubeVideo
    src={`https://youtube.com/embed/${videoId}?enablejsapi=1&origin=http://localhost:3000/`}
    {...restProps}
  />
);
