import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import type { PropsWithChildren } from 'react';
import { InlineHeadingGroup, type InlineHeadingGroupProps } from './InlineHeadingGroup';
import './WcagHeadingGroup.css';

export interface WcagHeadingGroupProps extends InlineHeadingGroupProps {
  conformanceLevel: string;
}

export const WcagHeadingGroup = ({
  children,
  conformanceLevel,
  ...restProps
}: PropsWithChildren<WcagHeadingGroupProps>) => {
  return (
    <InlineHeadingGroup
      className="nlds-inline-heading-group--wcag-heading-group"
      suffix={
        conformanceLevel && <DataBadge className="nlds-inline-heading-group__badge">{conformanceLevel}</DataBadge>
      }
      {...restProps}
    >
      {children}
    </InlineHeadingGroup>
  );
};
