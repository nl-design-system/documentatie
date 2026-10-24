import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';

type UserInputBadgeProps = HTMLAttributes<HTMLElement>;

export const UserInputBadge = ({ children, className, ...restProps }: PropsWithChildren<UserInputBadgeProps>) => (
  <kbd className={clsx('ma-user-input-badge', className)} {...restProps}>
    {children}
  </kbd>
);
