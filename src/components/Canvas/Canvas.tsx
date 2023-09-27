import React, { ReactNode } from 'react';
import style from './Canvas.module.css';
import clsx from 'clsx';
import prettierBabel from 'prettier/parser-babel';
import prettierHTML from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PrismStyle } from './PrismStyle';
import { Button } from '@utrecht/component-library-react';
import { v4 as uuid } from 'uuid';

interface CanvasProps {
  defaultCollapsed?: boolean;
  code?: ReactNode;
  children: ReactNode;
  language: any;
  copy?: boolean;
}

const toggleExpanded = ({ target }) => {
  const regionId = target.getAttribute('aria-controls');
  const region = target.ownerDocument.getElementById(regionId);
  region.hidden = !region.hidden;
  target.setAttribute('aria-expanded', !region.hidden);
  target.innerText = region.hidden ? 'Bekijk code' : 'Verberg code';
};

export const Canvas = ({ code, copy = false, defaultCollapsed = false, children, language }: CanvasProps) => {
  const formatted = prettier.format(ReactDOMServer.renderToStaticMarkup(code || children), {
    parser: 'html',
    plugins: [prettierBabel, prettierHTML],
    semi: false,
    singleAttributePerLine: true,
    embeddedLanguageFormatting: 'off',
    htmlWhitespaceSensitivity: 'ignore',
  });

  const codeBlockId = uuid();

  const copyCode = () => {
    navigator.clipboard.writeText(formatted).catch((err) => console.error('Copy code failed', err));
  };

  return (
    <div className={clsx(style['nlds-canvas'], 'voorbeeld-theme', 'utrecht-html')}>
      <div className={clsx(style['nlds-canvas__example'])}>{children}</div>
      <div className={clsx(style['nlds-canvas__toolbar'])}>
        <Button
          className={clsx(style['nlds-canvas__button'], style['nlds-canvas__toggle-code-button'])}
          appearance="subtle-button"
          onClick={toggleExpanded}
          aria-expanded={!defaultCollapsed}
          aria-controls={codeBlockId}
        >
          {defaultCollapsed ? 'Bekijk code' : 'Verberg code'}
        </Button>
      </div>
      <div
        className={clsx(style['nlds-canvas__code-block'], !copy && style['nlds-canvas__code-block--user-select-none'])}
        id={codeBlockId}
        hidden={defaultCollapsed}
      >
        <SyntaxHighlighter language={language} style={PrismStyle}>
          {formatted}
        </SyntaxHighlighter>
        {copy && (
          <div className={clsx(style['nlds-canvas__toolbar'])}>
            <Button
              className={clsx(style['nlds-canvas__button'], style['nlds-canvas__copy-button'])}
              appearance="subtle-button"
              onClick={copyCode}
            >
              Kopieer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
