import { useCallback } from 'react';
import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const VideoPlayer = ({ id, title, ...restProps }: LiteYouTubeProps) => {
  const patchRole = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const target = node.querySelector('[role="img"]');
    if (target) {
      target.setAttribute('role', 'group');
    }

    const observer = new MutationObserver(() => {
      const el = node.querySelector('[role="img"]');
      if (el) {
        el.setAttribute('role', 'group');
        observer.disconnect();
      }
    });
    observer.observe(node, { attributes: true, subtree: true, attributeFilter: ['role'] });
  }, []);

  return (
    <div ref={patchRole}>
      <LiteYouTubeEmbed
        adNetwork={false}
        announce="Bekijk"
        cookie={false}
        containerElement="div"
        id={id}
        title={title}
        poster="maxresdefault"
        {...restProps}
      />
    </div>
  );
};
