import type { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

type UserInputBadgeProps = HTMLAttributes<HTMLElement>;

export const UserInputBadge = ({ children, className, ...restProps }: PropsWithChildren<UserInputBadgeProps>) => (
  <kbd className={clsx('ma-user-input-badge', className)} {...restProps}>
    {children}
  </kbd>
);
