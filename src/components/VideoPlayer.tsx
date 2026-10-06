import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { i18n } from '@site/packages/website/src/i18n';

interface VideoPlayerProps extends LiteYouTubeProps {
  lang?: 'nl' | 'en';
}

export const VideoPlayer = ({ id, title, lang = 'nl', ...restProps }: VideoPlayerProps) => {
  return (
    <LiteYouTubeEmbed
      lazyLoad={true}
      adNetwork={false}
      announce={i18n[lang].watch}
      cookie={false}
      containerElement="div"
      id={id}
      title={title}
      poster="maxresdefault"
      {...restProps}
    />
  );
};
