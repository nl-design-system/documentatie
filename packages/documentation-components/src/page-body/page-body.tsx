import '@utrecht/page-body-css/dist/index.css';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import './page-body.css';
export { PageBody } from '@utrecht/page-body-react';

export interface PageBodyWrapperProps extends HTMLAttributes<HTMLElement> {
  Component?: 'div' | 'main';
}

export interface PageBodySectionProps extends HTMLAttributes<HTMLElement> {
  Component?: 'div' | 'main' | 'aside' | 'footer' | 'section' | 'nav';
  appearance?: 'breakout-content';
}

export interface PageBodyContentProps extends HTMLAttributes<HTMLElement> {
  Component?: 'div' | 'main' | 'aside' | 'footer' | 'section' | 'nav';
  appearance?: 'breakout-content';
}

export const PageBodyWrapper = ({
  children,
  className,
  Component = 'div',
  ...restProps
}: PropsWithChildren<PageBodyWrapperProps>) => (
  <Component {...restProps} className={clsx('utrecht-page-body', className)}>
    {children}
  </Component>
);

export const PageBodyContent = ({
  appearance,
  children,
  className,
  Component = 'div',
  ...restProps
}: PropsWithChildren<PageBodyContentProps>) => (
  <Component
    className={clsx(
      'utrecht-page-body__content',
      {
        'utrecht-page-body__content--ma-breakout-content': appearance === 'breakout-content',
      },
      className,
    )}
    {...restProps}
  >
    {children}
  </Component>
);

export const PageBodySection = ({
  appearance,
  children,
  className,
  Component = 'div',
  ...restProps
}: PropsWithChildren<PageBodySectionProps>) => (
  <Component
    className={clsx(
      'utrecht-page-body__section',
      {
        'utrecht-page-body__section--ma-breakout-content': appearance === 'breakout-content',
      },
      className,
    )}
    {...restProps}
  >
    {children}
  </Component>
);
