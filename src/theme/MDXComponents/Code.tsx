import CodeBlock from '@theme/CodeBlock';
import type { Props } from '@theme/MDXComponents/Code';
import type { ComponentProps } from 'react';
import React, { isValidElement } from 'react';

export default function MDXCode(props: Props): React.Element {
  const inlineElements: (string | undefined)[] = [
    'a',
    'abbr',
    'b',
    'br',
    'button',
    'cite',
    'code',
    'del',
    'dfn',
    'em',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'object',
    'output',
    'q',
    'ruby',
    's',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var',
    'wbr',
  ];
  const shouldBeInline = React.Children.toArray(props.children).every(
    (el) =>
      (typeof el === 'string' && !el.includes('\n')) ||
      (isValidElement(el) && inlineElements.includes((el.props as { mdxType: string } | null)?.mdxType)),
  );

  return shouldBeInline ? <code {...props} /> : <CodeBlock {...(props as ComponentProps<typeof CodeBlock>)} />;
}
