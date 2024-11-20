import { CodeBlock, CodeBlockProps } from '@utrecht/component-library-react/dist/css-module';
import { Highlight } from 'prism-react-renderer';
import React, { Element, PropsWithChildren, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CodeExampleContext } from './Guideline';
import nldsPrismTheme from '../../nldsPrism';

export interface CodeBlockSyntaxHighlightingProps extends CodeBlockProps {
  lineNumber?: boolean;
  syntax?: string;
  textContent: string;
  trim?: boolean;
  codeBlockLabel?: string;
}

export function CodeBlockSyntaxHighlighting({
  lineNumber,
  syntax,
  textContent,
  trim,
}: PropsWithChildren<CodeBlockSyntaxHighlightingProps>): Element {
  let code = textContent;
  const { title, type: codeExampleType } = useContext(CodeExampleContext);
  const titleId = uuidv4();

  if (trim) {
    code = code.trim();
  }

  return (
    <Highlight theme={nldsPrismTheme} code={code} language={syntax || ''}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          <span hidden id={titleId}>
            codevoorbeeld {codeExampleType ? `“${codeExampleType}”` : ''} {title ? ': ' : ' '}
            {title}
          </span>
          <CodeBlock tabIndex={0} role={title ? 'region' : undefined} aria-labelledby={titleId} style={style}>
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
        </>
      )}
    </Highlight>
  );
}

export default CodeBlockSyntaxHighlighting;
