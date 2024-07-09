import clsx from 'clsx';
import React, { type PropsWithChildren, type ReactNode } from 'react';
import style from './InlineHeadingGroup.module.css';

export interface InlineHeadingGroupProps {
  level?: number;
  suffix?: ReactNode;
}
export const InlineHeadingGroup = ({ children, level = 1, suffix }: PropsWithChildren<InlineHeadingGroupProps>) => {
  // TODO: When SCSS is supported, use style[`nlds-inline-heading-group--level-${level}`]
  return (
    <hgroup className={clsx(style['nlds-inline-heading-group'], `utrecht-heading-${level}`)}>
      <h1 className={clsx(style['nlds-inline-heading-group__heading'])}>{children}</h1>
      {suffix && (
        <p className={clsx(style['nlds-inline-heading-group__suffix'])}>
          {suffix ? ' ' : ''}
          {suffix}
        </p>
      )}
    </hgroup>
  );
};
