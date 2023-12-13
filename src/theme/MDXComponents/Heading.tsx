import Heading from '@theme/Heading';
import type { Props } from '@theme/MDXComponents/Heading';
import React from 'react';

export default function MDXHeading(props: Props): React.Element {
  return <Heading {...props} />;
}
