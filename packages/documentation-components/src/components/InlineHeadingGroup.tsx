import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './InlineHeadingGroup.css';
import { HeadingLevel } from '@nl-design-system-candidate/heading-react';
import clsx from 'clsx';

export interface InlineHeadingGroupProps extends HTMLAttributes<HTMLElement> {
  level?: HeadingLevel;
  suffix?: ReactNode;
}

export const InlineHeadingGroup = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<InlineHeadingGroupProps>) => {
  // TODO: When SCSS is supported, use `nlds-inline-heading-group--level-${level}`
  return (
    <hgroup className={clsx('nlds-inline-heading-group', className)} {...restProps}>
      {children}
    </hgroup>
  );
};

export interface InlineHeadingGroupHeadingProps extends HTMLAttributes<HTMLElement> {
  level: HeadingLevel;
}
