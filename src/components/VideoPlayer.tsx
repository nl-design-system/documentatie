import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const VideoPlayer = ({ id, title, ...restProps }: LiteYouTubeProps) => {
  return (
    <LiteYouTubeEmbed
      lazyLoad={true}
      adNetwork={false}
      announce="Bekijk"
      cookie={false}
      containerElement="div"
      id={id}
      title={title}
      poster="maxresdefault"
      {...restProps}
    />
  );
};
