import clsx from 'clsx';
import React from 'react';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface FragmentRedirectProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const FragmentRedirect = ({
  children,
  id,
  className,
  ...restProps
}: PropsWithChildren<FragmentRedirectProps>) => (
  <div {...restProps} id={id} className={clsx('nlds-fragment-redirect', className)}>
    {children}
  </div>
);
