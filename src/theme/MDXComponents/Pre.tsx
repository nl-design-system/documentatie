import { CodeBlockSyntaxHighlighting } from '@site/src/components/CodeBlockSyntaxHighlighting';
import { isValidElement } from 'react';
import type { ComponentProps, ReactElement } from 'react';

type Props = ComponentProps<typeof CodeBlockSyntaxHighlighting>;

export default function MDXPre(props: Props): ReactElement {
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
