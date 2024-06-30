import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import style from './EstafetteBadge.module.css';
import { toKebabCase } from '../utils';

interface EstafetteBadgeProps {
  state: string;
}

export const EstafetteBadge = ({ state }: EstafetteBadgeProps) => {
  const stateModifier = toKebabCase(state);
  return (
    <DataBadge className={clsx(style['estafette-badge'], stateModifier && style[`estafette-badge--${stateModifier}`])}>
      {state}
    </DataBadge>
  );
};
