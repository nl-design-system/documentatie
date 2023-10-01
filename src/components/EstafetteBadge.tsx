import React from 'react';
import { DataBadge } from '@utrecht/component-library-react/dist/css-module';
import { COMPONENT_STATES } from '@nl-design-system/component-index';
import style from './EstafetteBadge.module.css';
import clsx from 'clsx';

interface EstafetteBadgeProps {
  stateModifier: 'help-wanted' | 'community' | 'candidate' | 'hall-of-fame';
  state: COMPONENT_STATES;
}

export const EstafetteBadge = ({ stateModifier, state }: EstafetteBadgeProps) => (
  <DataBadge className={clsx(style['estafette-badge'], style[`estafette-badge--${stateModifier}`])}>{state}</DataBadge>
);
