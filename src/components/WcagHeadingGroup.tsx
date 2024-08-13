import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import React, { type PropsWithChildren } from 'react';
import { InlineHeadingGroup, type InlineHeadingGroupProps } from './InlineHeadingGroup';
import style from './WcagHeadingGroup.module.css';

export interface WcagHeadingGroupProps extends InlineHeadingGroupProps {
  conformanceLevel?: 'A' | 'AA' | 'AAA';
}

export const WcagHeadingGroup = ({
  children,
  conformanceLevel,
  ...restProps
}: PropsWithChildren<WcagHeadingGroupProps>) => {
  return (
    <InlineHeadingGroup
      className={style['nlds-inline-heading-group--wcag-heading-group']}
      suffix={
        conformanceLevel && (
          <DataBadge className={style['nlds-inline-heading-group__badge']}>Niveau {conformanceLevel}</DataBadge>
        )
      }
      {...restProps}
    >
      {children}
    </InlineHeadingGroup>
  );
};
