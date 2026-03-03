import { useId, type HTMLAttributes, type PropsWithChildren } from 'react';

// import '@nl-design-system-community/theme-wizard-app/dist/components/wizard-reset-theme.js';
// import '@nl-design-system-community/theme-wizard-app/dist/components/wizard-story-preview.js';
import './ComponentStory.css';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'wizard-story-preview': HTMLAttributes<HTMLElement>;
      'wizard-reset-theme': HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ComponentStoryProps {
  lang?: string;
  dir?: string;
  label?: string;
}

export const ComponentStory = ({ dir, label, lang, children }: PropsWithChildren<ComponentStoryProps>) => {
  const labelId = useId();
  return (
    <figure className="reset-figure" aria-labelledby={labelId}>
      <wizard-story-preview>
        <wizard-reset-theme>
          <div className="voorbeeld-theme" aria-hidden="true" lang={lang} dir={dir}>
            {children}
          </div>
        </wizard-reset-theme>
      </wizard-story-preview>
      {label ? <figcaption id={labelId}>{label}</figcaption> : null}
    </figure>
  );
};
