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
          <Editor>
            <div slot="content" hidden>
              <h1>Kopniveau 1</h1>
              <p>Dit is een voorbeeld van de Clippy Editor met een Lit's React wrapper.</p>
              <h3>Kopniveau 3</h3>
              <h3>Lijst zonder HTML-lijstopmaak</h3>
              <p>
                - Lijstitem
                <br />- Lijstitem
              </p>
            </div>
          </Editor>
        </Suspense>
      )}
    </BrowserOnly>
  );
};
