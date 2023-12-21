import IframeResizer from 'iframe-resizer-react';
import React from 'react';
import style from './Story.module.css';

export interface StoryProps {
  href: string;
  label: string;
}

export const Story = ({ label, href }: StoryProps) => {
  const storySrc = href;
  const iframeSrc = href.replace('?path=/docs/', 'iframe.html?id=') + '&viewMode=story';

  return (
    <div className={style['story']}>
      <IframeResizer
        src={iframeSrc}
        style={{ width: '1px', minWidth: '100%' }}
        heightCalculationMethod="lowestElement"
      />
      <a className={style['story__link']} href={storySrc} target="_blank" rel="noreferrer">
        {label}
      </a>
    </div>
  );
};
