import Heading from '@theme-original/Heading';
import type { ComponentProps, ReactElement } from 'react';

type Props = ComponentProps<typeof Heading>;

export default function MDXHeading(props: Props): ReactElement {
  return <Heading {...props} />;
}
