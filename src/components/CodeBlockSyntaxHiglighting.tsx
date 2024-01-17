import { CodeBlock, CodeBlockProps } from '@utrecht/component-library-react/dist/css-module';
import { Highlight } from 'prism-react-renderer';
import React, { Element, PropsWithChildren } from 'react';
import nldsPrismTheme from '../../nldsPrism';

export interface CodeBlockSyntaxHiglightingProps extends CodeBlockProps {
  lineNumber?: boolean;
  textContent: string;
  syntax?: string;
  trim?: boolean;
}

export function CodeBlockSyntaxHiglighting({
  lineNumber,
  syntax,
  textContent,
  trim,
}: PropsWithChildren<CodeBlockSyntaxHiglightingProps>): Element {
  let code = textContent;

  if (trim) {
    code = code.trim();
  }

  return (
    <Highlight theme={nldsPrismTheme} code={code} language={syntax || ''}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlock style={style}>
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

export default CodeBlockSyntaxHiglighting;
