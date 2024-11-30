import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import { toKebabCase } from '../utils';
import './EstafetteBadge.css';

interface EstafetteBadgeProps {
  state: string;
}

export const EstafetteBadge = ({ state }: EstafetteBadgeProps) => {
  const stateModifier = toKebabCase(state);
  return (
    <DataBadge className={clsx('estafette-badge', stateModifier && `estafette-badge--${stateModifier}`)}>
      {state}
    </DataBadge>
  );
};
