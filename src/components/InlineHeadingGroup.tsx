import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './InlineHeadingGroup.css';

export interface InlineHeadingGroupProps extends HTMLAttributes<HTMLElement> {
  level?: number;
  suffix?: ReactNode;
}

export const InlineHeadingGroup = ({
  children,
  className,
  level = 1,
  suffix,
  ...restProps
}: PropsWithChildren<InlineHeadingGroupProps>) => {
  // TODO: When SCSS is supported, use `nlds-inline-heading-group--level-${level}`
  return (
    <hgroup className={clsx('nlds-inline-heading-group', `utrecht-heading-${level}`, className)} {...restProps}>
      <h1 className="nlds-inline-heading-group__heading">{children}</h1>
      {suffix && (
        <p className="nlds-inline-heading-group__suffix">
          {suffix ? ' ' : ''}
          {suffix}
        </p>
      )}
    </hgroup>
  );
};
