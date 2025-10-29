import BrowserOnly from '@docusaurus/BrowserOnly';
import { lazy, Suspense } from 'react';

const Editor = lazy(() =>
  import('@nl-design-system-community/editor-react').then(({ ClippyEditor }) => ({
    default: ClippyEditor,
  })),
);

export const RichTextEditor = () => {
  return (
    <BrowserOnly>
      {() => (
        <Suspense fallback="Rich text editor laden...">
          <Editor />
        </Suspense>
      )}
    </BrowserOnly>
  );
};
