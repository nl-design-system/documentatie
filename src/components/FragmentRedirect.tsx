import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';

interface FragmentRedirectProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const FragmentRedirect = ({ children, className, ...restProps }: PropsWithChildren<FragmentRedirectProps>) => (
  <div {...restProps} className={clsx('nlds-fragment-redirect', className)}>
    {children}
  </div>
);
