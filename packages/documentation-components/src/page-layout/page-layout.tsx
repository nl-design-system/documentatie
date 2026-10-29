import '@utrecht/page-layout-css/dist/index.css';
// export { PageLayout } from '@utrecht/page-layout-react';
// TODO: Replace duplicate implementation here by import when PR has been merged
// https://github.com/nl-design-system/utrecht/pull/3240

import clsx from 'clsx';
import { type ForwardedRef, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react';

export interface PageLayoutProps extends HTMLAttributes<HTMLElement> {
  Component?: 'div' | 'body';
}

export const PageLayout = forwardRef(
  (
    { Component = 'div', children, className, ...restProps }: PropsWithChildren<PageLayoutProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component {...restProps} ref={ref as any} className={clsx('utrecht-page-layout', className)}>
      {children}
    </Component>
  ),
);

PageLayout.displayName = 'PageLayout';
