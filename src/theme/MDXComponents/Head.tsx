import Head, { type Props as HeadProps } from '@docusaurus/Head';
import React, { type ReactElement } from 'react';

// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element: ReactElement<{ mdxType?: string; originalType?: string } | undefined>) {
  if (element.props?.mdxType && element.props.originalType) {
    const { ...newProps } = element.props;
    return React.createElement(element.props.originalType, newProps);
  }
  return element;
}

export default function MDXHead(props: HeadProps): ReactElement {
  const unwrappedChildren = React.Children.map(props.children, (child) =>
    React.isValidElement(child) ? unwrapMDXElement(child) : child,
  );
  return <Head {...(props as HeadProps)}>{unwrappedChildren}</Head>;
}
