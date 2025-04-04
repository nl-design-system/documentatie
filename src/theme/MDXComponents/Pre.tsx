import { CodeBlockSyntaxHighlighting } from '@site/src/components/CodeBlockSyntaxHighlighting';
import type { Props as MDXPreProps } from '@theme/MDXComponents/Pre';
import { isValidElement } from 'react';
import type { ReactElement } from 'react';

export default function MDXPre(props: MDXPreProps): ReactElement {
  let syntax;
  let textContent = '';

  if (isValidElement(props.children)) {
    const elementProps = (props.children as ReactElement).props;
    const match =
      typeof elementProps.className === 'string'
        ? elementProps.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/)
        : null;

    if (match) {
      syntax = match[1];
    }

    if (typeof elementProps.children === 'string') {
      textContent = elementProps.children;
    }
  }

  return <CodeBlockSyntaxHighlighting syntax={syntax} textContent={textContent} trim />;
}
