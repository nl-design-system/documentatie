'use client';

import { CodeBlockSyntaxHighlighting } from '@site/src/components/CodeBlockSyntaxHighlighting';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import prettierBabel from 'prettier/plugins/babel.mjs';
import prettierESTree from 'prettier/plugins/estree.mjs';
import prettierHTML from 'prettier/plugins/html.mjs';
import prettierPostcss from 'prettier/plugins/postcss.mjs';
import prettier from 'prettier/standalone';
import type { CSSProperties, ReactNode } from 'react';
import { isValidElement, useEffect, useId, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import './Canvas.css';
import '@nl-design-system-community/editor/theme.css';
import {
  ClippyContent,
  ClippyContext,
  ClippyGutter,
  ClippyValidationsList,
} from '@nl-design-system-community/editor-react';

interface CanvasProps {
  defaultExpandedCode?: boolean;
  displayCode?: boolean;
  code?: string | ReactNode | (() => ReactNode);
  children: ReactNode | (() => ReactNode);
  language: string;
  copy?: boolean;
  designTokens?: CSSProperties;
}

export const CanvasClient = ({
  code,
  copy = true,
  defaultExpandedCode = false,
  displayCode = true,
  children,
  language,
  designTokens,
}: CanvasProps) => {
  // By default the `children` argument is converted to code.
  const jsxTree = typeof children === 'function' ? children() : children;
  const contentHtml = ReactDOMServer.renderToStaticMarkup(<>{jsxTree}</>);
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

  return (
    <ClippyContext id={codeBlockId} topHeadingLevel={2}>
      <div slot="value" hidden dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <div className={clsx('nlds-canvas')}>
        {jsxTree && (
          <div className={clsx('nlds-canvas__content')}>
            <ClippyContent className="voorbeeld-theme" style={designTokens}>
              <ClippyGutter mode="list" />
            </ClippyContent>
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
        <div className="nlds-canvas__validations-list">
          <ClippyValidationsList />
        </div>
      </div>
    </ClippyContext>
  );
};
