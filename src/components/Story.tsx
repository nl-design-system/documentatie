import IframeResizer from '@iframe-resizer/react';
import './Story.css';

export interface StoryProps {
  href: string;
  label: string;
}

export const Story = ({ label, href }: StoryProps) => {
  const storySrc = href;
  const iframeSrc = href.replace('?path=/docs/', 'iframe.html?id=') + '&viewMode=story';

  return (
    <div className="story">
      <IframeResizer
        src={iframeSrc}
        style={{ width: '1px', minWidth: '100%' }}
        // heightCalculationMethod is missing in the `index.d.ts` file
        // https://github.com/davidjbradshaw/iframe-resizer/blob/372cc8a0ce2f42544049a12fd4265fa6b330d689/packages/react/index.d.ts
        // but is in fact implemented
        // https://github.com/davidjbradshaw/iframe-resizer/blob/372cc8a0ce2f42544049a12fd4265fa6b330d689/packages/core/index.js#L848
        // @ts-expect-error heightCalculationMethod is missing in the `index.d.ts` file
        heightCalculationMethod="lowestElement"
      />
      <a className="story__link" href={storySrc} target="_blank" rel="noreferrer">
        {label}
      </a>
    </div>
  );
};
