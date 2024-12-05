import { CodeBlockSyntaxHighlighting } from '@site/src/components/CodeBlockSyntaxHighlighting';
import { Button, Document, Paragraph, Surface } from '@utrecht/component-library-react/dist/css-module';
import { HTMLContent } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import prettierBabel from 'prettier/plugins/babel.mjs';
import prettierESTree from 'prettier/plugins/estree.mjs';
import prettierHTML from 'prettier/plugins/html.mjs';
import prettierPostcss from 'prettier/plugins/postcss.mjs';
import prettier from 'prettier/standalone';
import type { CSSProperties, ElementType, PropsWithChildren, ReactNode } from 'react';
import { isValidElement, useEffect, useId, useState } from 'react';
import { Fragment } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import './Canvas.css';

export type CanvasContainerType = 'document' | 'paragraph' | 'surface';

const ParagraphContainer = ({ children }: PropsWithChildren<object>) => (
  <Surface className="nlds-canvas__example-surface">
    <Document className={clsx('utrecht-document--surface', 'nlds-canvas__example-document')}>
      <Paragraph className="nlds-canvas__example-paragraph">{children}</Paragraph>
    </Document>
  </Surface>
);

ParagraphContainer.displayName = 'ParagraphContainer';

const DocumentContainer = ({ children }: PropsWithChildren<object>) => (
  <Surface className="nlds-canvas__example-surface">
    <Document className={clsx('utrecht-document--surface', 'nlds-canvas__example-document')}>{children}</Document>
  </Surface>
);
DocumentContainer.displayName = 'DocumentContainer';

const SurfaceContainer = ({ children }: PropsWithChildren<object>) => (
  <Surface className="nlds-canvas__example-surface">{children}</Surface>
);

SurfaceContainer.displayName = 'SurfaceContainer';

interface CanvasProps {
  defaultExpandedCode?: boolean;
  displayCode?: boolean;
  code?: string | ReactNode | (() => ReactNode);
  children: ReactNode | (() => ReactNode);
  language: string;
  copy?: boolean;
  container?: string | CanvasContainerType;
  designTokens?: CSSProperties;
}

export const Canvas = ({
  code,
  copy = true,
  defaultExpandedCode = false,
  displayCode = true,
  children,
  container = 'document',
  language,
  designTokens,
}: CanvasProps) => {
  // By default the `children` argument is converted to code.
  const jsxTree = typeof children === 'function' ? children() : children;
  // You can override the code from `children` with the `code` argument.
  // The code argument can be a string, or JSX, or a function that generates JSX.
  const codeJsxTree = typeof code === 'function' ? code() : isValidElement(code) ? code : undefined;
  const unformattedCode = typeof code === 'string' ? code : ReactDOMServer.renderToStaticMarkup(codeJsxTree || jsxTree);
  const [exampleSourceCode, setExampleSourceCode] = useState(unformattedCode);
  const [expandedSourceCode, setExpandedSourceCode] = useState(defaultExpandedCode);

  const toggleExpanded = () => {
    setExpandedSourceCode(!expandedSourceCode);
  };

  useEffect(() => {
    const formatWithPrettier = async () => {
      const exampleSourceCode = await prettier.format(unformattedCode, {
        parser: language,
        plugins: [prettierBabel, prettierESTree, prettierHTML, prettierPostcss],
        semi: false,
        singleAttributePerLine: true,
        embeddedLanguageFormatting: 'off',
        htmlWhitespaceSensitivity: 'ignore',
      });
      setExampleSourceCode(exampleSourceCode);
    };
    formatWithPrettier();
  }, [unformattedCode]);

  const codeBlockId = useId();

  const copyCode = () => {
    navigator.clipboard.writeText(exampleSourceCode).catch((err) => console.error('Copy code failed', err));
  };

  let Container: ElementType = Fragment;

  if (container === 'paragraph') {
    Container = ParagraphContainer;
  } else if (container === 'document') {
    Container = DocumentContainer;
  } else if (container === 'surface') {
    Container = SurfaceContainer;
  }

  return (
    <div className={clsx('nlds-canvas')}>
      {jsxTree && (
        <div className={clsx('nlds-canvas__example')}>
          <div className="voorbeeld-theme" style={designTokens}>
            <Container>
              <HTMLContent>{jsxTree}</HTMLContent>
            </Container>
          </div>
        </div>
      )}
      {displayCode && (
        <div className={clsx('nlds-canvas__toolbar')}>
          <Button
            className={clsx('nlds-canvas__button', 'nlds-canvas__toggle-code-button')}
            appearance="subtle-button"
            onClick={toggleExpanded}
            aria-expanded={expandedSourceCode}
            aria-controls={codeBlockId}
          >
            {!expandedSourceCode ? 'Bekijk code' : 'Verberg code'}
          </Button>
        </div>
      )}
      {displayCode && (
        <div
          className={clsx('nlds-canvas__code-block', !copy && 'nlds-canvas__code-block--user-select-none')}
          id={codeBlockId}
          hidden={!expandedSourceCode}
        >
          <CodeBlockSyntaxHighlighting
            codeBlockLabel={'Codevoorbeeld'}
            syntax={language}
            textContent={exampleSourceCode}
            trim
          />
          {copy && (
            <div className={clsx('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy')}>
              <Button
                className={clsx('nlds-canvas__button', 'nlds-canvas__copy-button')}
                appearance="subtle-button"
                onClick={copyCode}
              >
                Kopieer
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
