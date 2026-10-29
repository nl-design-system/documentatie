import { i18n } from '@nl-design-system-community/documentation-i18n/src/index';
import { Image } from '../image/image';
import './VideoPlayer.css';

interface VideoPlayerProps {
  id: string;
  title: string;
  lang?: 'nl' | 'en';
  thumbnail?: string;
  playlist?: boolean;
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- JSX augmentation requires a namespace
  namespace JSX {
    interface IntrinsicElements {
      'lite-youtube': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        videoid?: string;
        videotitle?: string;
        videoplay?: string;
        posterquality?: string;
        nocookie?: boolean;
      };
    }
  }
}

export const VideoPlayer = ({ id, title, lang = 'nl', thumbnail, playlist }: VideoPlayerProps) => {
  const cover = thumbnail || `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`;
  const type = playlist ? { playlistid: id } : { videoid: id };
  return (
    <div className="ma-video-player">
      <lite-youtube nocookie {...type} videotitle={title} videoplay={i18n[lang].watch} posterquality="maxresdefault">
        <Image src={cover} loading="lazy" width="100%" slot="image" alt={`${title} - YouTube Thumbnail`} />
      </lite-youtube>
    </div>
  );
};
