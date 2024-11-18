import { CodeBlock, CodeBlockProps } from '@utrecht/component-library-react/dist/css-module';
import { Highlight } from 'prism-react-renderer';
import React, { Element, PropsWithChildren } from 'react';
import nldsPrismTheme from '../../nldsPrism';

export interface CodeBlockSyntaxHighlightingProps extends CodeBlockProps {
  lineNumber?: boolean;
  textContent: string;
  syntax?: string;
  trim?: boolean;
}

export function CodeBlockSyntaxHighlighting({
  lineNumber,
  syntax,
  textContent,
  trim,
}: PropsWithChildren<CodeBlockSyntaxHighlightingProps>): Element {
  let code = textContent;

  if (trim) {
    code = code.trim();
  }

  return (
    <Highlight theme={nldsPrismTheme} code={code} language={syntax || ''}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlock tabIndex={0} style={style}>
          {tokens.map((line, i) => (
            <span key={i} {...getLineProps({ line })}>
              {lineNumber && <span>{i + 1}</span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
              {'\n'}
            </span>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  );
}

export default CodeBlockSyntaxHighlighting;
