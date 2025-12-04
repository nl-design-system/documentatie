import Details from '@theme-original/Details';
import React, { type ComponentProps, type ReactElement } from 'react';

interface Props extends ComponentProps<typeof Details> {
  children: ReactElement;
}

export default function MDXDetails(props: Props): ReactElement {
  const items = React.Children.toArray(props.children);
  // Split summary item from the rest to pass it as a separate prop to the
  // Details theme component
  const summary = items.find(
    (item): item is ReactElement<ComponentProps<'summary'>> =>
      React.isValidElement(item) && (item.props as { mdxType: string } | null)?.mdxType === 'summary',
  );
  const children = <>{items.filter((item) => item !== summary)}</>;

  return (
    <Details {...props} summary={summary}>
      {children}
    </Details>
  );
}
