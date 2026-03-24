import { lazy, Suspense } from 'react';
import { BrowserOnly } from './BrowserOnly';

const ClippyEditor = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyEditor,
  })),
);

const ClippyContext = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyContext,
  })),
);

const ClippyContent = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyContent,
  })),
);

const ClippyToolbar = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyToolbar,
  })),
);

const ClippyGutter = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyGutter,
  })),
);

const ClippyValidationsList = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyValidationsList,
  })),
);

export const RichTextEditor = () => {
  return (
    <BrowserOnly>
      {() => (
        <Suspense fallback="Rich text editor laden...">
          <ClippyEditor id="react-editor-1">
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
          </ClippyEditor>
          <hr />
          <h2>Configuratie</h2>
          <ClippyEditor toolbarConfig={[['bold', 'italic', 'underline', 'code']]} id="react-editor-2">
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
          </ClippyEditor>
          <h2>Context, content en gutter</h2>
          <p>
            Voorbeeld<code>ClippyGutter</code>, <code>ClippyGutter</code> en <code>ClippyGutter</code>
          </p>
          <ClippyContext id="react-editor-3">
            <div slot="content">
              <h1>Kopniveau 1 in React editor</h1>
              <p>
                Dit is een voorbeeld van de Clippy Editor{' '}
                <a href="https://www.example.org/">met een Lit React wrapper</a>
              </p>
            </div>
            <ClippyContent>
              <ClippyToolbar config={[['format-select'], ['bold', 'italic', 'underline']]} />
              <ClippyGutter mode="list"></ClippyGutter>
            </ClippyContent>
            <ClippyValidationsList />
          </ClippyContext>
        </Suspense>
      )}
    </BrowserOnly>
  );
};
