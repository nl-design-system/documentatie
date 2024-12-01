import Heading from '@theme/Heading';
import type { Props } from '@theme/MDXComponents/Heading';
import type { ReactElement } from 'react';

export default function MDXHeading(props: Props): ReactElement {
  return <Heading {...props} />;
}
