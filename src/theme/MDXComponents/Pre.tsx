import CodeBlock from '@theme/CodeBlock';
import type { Props } from '@theme/MDXComponents/Pre';
import React, { isValidElement } from 'react';

export default function MDXPre(props: Props): JSX.Element {
  return (
    <CodeBlock
      // If this pre is created by a ``` fenced codeblock, unwrap the children
      {...(isValidElement(props.children) &&
      (props.children.props as { originalType: string } | null)?.originalType === 'code'
        ? props.children.props
        : { ...props })}
    />
  );
}
