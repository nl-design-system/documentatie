import type { HTMLAttributes } from 'react';
import './InlineHeadingGroup.css';
import clsx from 'clsx';

export const InlineHeadingGroup = ({ children, className, ...restProps }: HTMLAttributes<HTMLElement>) => {
  return (
    <hgroup className={clsx('nlds-inline-heading-group', className)} {...restProps}>
      {children}
    </hgroup>
  );
};
