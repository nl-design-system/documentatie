import type { Props as MDXPreProps } from '@theme/MDXComponents/Pre';
import React, { isValidElement } from 'react';
import { CodeBlockSyntaxHighlighting } from '/src/components/CodeBlockSyntaxHighlighting';
import { Element, Props } from 'react';

export default function MDXPre(props: MDXPreProps): React.Element {
  let syntax;
  let textContent = '';

  if (isValidElement(props.children)) {
    const elementProps = (props.children as Element).props as Props;
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
