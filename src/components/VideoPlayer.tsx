import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import './VideoPlayer.css';

export const VideoPlayer = ({ id, title }: LiteYouTubeProps) => (
  <LiteYouTubeEmbed
    adNetwork={false} // Default false, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
    announce="Bekijk" // Default: Watch. This will added to the button announce to the final user as in Clickable "Watch ${title}"
    cookie={false} // Default false, don't connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
    id={id}
    title={title}
    poster="maxresdefault"
  />
);
