import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const VideoPlaylistPlayer = ({ id, playlistCoverId, title }: LiteYouTubeProps) => (
  <LiteYouTubeEmbed
    adNetwork={false} // Default false, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
    announce="Bekijk" // Default: Watch. This will added to the button announce to the final user as in Clickable "Watch ${title}"
    cookie={false} // Default false, don't connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
    id={id}
    title={title}
    poster="maxresdefault"
    playlist={true} // Use true when your ID be from a playlist
    playlistCoverId={playlistCoverId} // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
  />
);
