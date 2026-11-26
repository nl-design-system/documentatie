import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type SideNavigationExpandSeparatorProps = HTMLAttributes<HTMLSpanElement>;

export const SideNavigationExpandSeparator = (props: SideNavigationExpandSeparatorProps) => {
  const className = clsx('denhaag-side-navigation__expand-separator', props.className);

  return <span className={className}></span>;
};

export default SideNavigationExpandSeparator;
