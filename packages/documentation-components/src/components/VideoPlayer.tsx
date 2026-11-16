import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { i18n } from '@nl-design-system-community/documentation-i18n/src/index.ts';
import './VideoPlayer.css';
import { Image } from '../image/image.tsx';

interface VideoPlayerProps {
  id: string;
  title: string;
  lang?: 'nl' | 'en';
  thumbnail?: string;
  playlist?: boolean;
}

type LiteYoutubeBaseProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- JSX augmentation requires a namespace
  namespace JSX {
    interface IntrinsicElements {
      'lite-youtube': LiteYoutubeBaseProps & {
        videoid?: string;
        videotitle?: string;
        videoplay?: string;
        posterquality?: string;
        nocookie?: boolean;
      };
    }
  }
}

export const VideoPlayer = ({ id, lang = 'nl', playlist, thumbnail, title }: VideoPlayerProps) => {
  const cover = thumbnail || `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`;
  const type = playlist ? { playlistid: id } : { videoid: id };
  return (
    <div className="ma-video">
      <lite-youtube nocookie {...type} videotitle={title} videoplay={i18n[lang].watch} posterquality="maxresdefault">
        <Image src={cover} loading="lazy" width="100%" slot="image" alt={`${title} - YouTube Thumbnail`} />
      </lite-youtube>
    </div>
  );
};
