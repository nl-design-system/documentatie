import { Button } from '@utrecht/component-library-react/dist/css-module';
import { HTMLContent } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import prettierBabel from 'prettier/plugins/babel.mjs';
import prettierESTree from 'prettier/plugins/estree.mjs';
import prettierHTML from 'prettier/plugins/html.mjs';
import prettier from 'prettier/standalone';
import React, { isValidElement, ReactNode, useEffect, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { v4 as uuid } from 'uuid';
import style from './Canvas.module.css';
import { CodeBlockSyntaxHighlighting } from '/src/components/CodeBlockSyntaxHighlighting';

interface CanvasProps {
  defaultCollapsed?: boolean;
  code?: string | ReactNode | (() => ReactNode);
  children: ReactNode | (() => ReactNode);
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

export const Canvas = ({ code, copy = false, defaultCollapsed = true, children, language }: CanvasProps) => {
  // By default the `children` argument is converted to code.
  let jsxTree = typeof children === 'function' ? children() : children;
  // You can override the code from `children` with the `code` argument.
  // The code argument can be a string, or JSX, or a function that generates JSX.
  let codeJsxTree = typeof code === 'function' ? code() : isValidElement(code) ? code : undefined;
  let unformattedCode = typeof code === 'string' ? code : ReactDOMServer.renderToStaticMarkup(codeJsxTree || jsxTree);
  let [displayCode, setDisplayCode] = useState(unformattedCode);

  useEffect(() => {
    const formatWithPrettier = async () => {
      displayCode = await prettier.format(unformattedCode, {
        parser: language,
        plugins: [prettierBabel, prettierESTree, prettierHTML],
        semi: false,
        singleAttributePerLine: true,
        embeddedLanguageFormatting: 'off',
        htmlWhitespaceSensitivity: 'ignore',
      });
      setDisplayCode(displayCode);
    };
    formatWithPrettier();
  }, [unformattedCode]);

  const codeBlockId = uuid();

  const copyCode = () => {
    navigator.clipboard.writeText(displayCode).catch((err) => console.error('Copy code failed', err));
  };

  return (
    <div className={clsx(style['nlds-canvas'])}>
      <div className={clsx(style['nlds-canvas__example'])}>
        <HTMLContent className="voorbeeld-theme">{jsxTree}</HTMLContent>
      </div>
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
        <CodeBlockSyntaxHighlighting syntax={language} textContent={displayCode} trim />
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
