import { COMPONENT_STATES } from '@nl-design-system/component-index';
import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import style from './EstafetteBadge.module.css';

interface EstafetteBadgeProps {
  stateModifier: string | 'help-wanted' | 'community' | 'candidate' | 'hall-of-fame';
  state: COMPONENT_STATES;
}

export const EstafetteBadge = ({ stateModifier, state }: EstafetteBadgeProps) => (
  <DataBadge className={clsx(style['estafette-badge'], style[`estafette-badge--${stateModifier}`])}>{state}</DataBadge>
);
