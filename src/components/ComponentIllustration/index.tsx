import { Figure, FigureCaption } from '@utrecht/component-library-react';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { toKebabCase } from '../../utils';
import './ComponentIllustration.css';

interface ComponentIllustrationProps extends HTMLAttributes<HTMLElement> {
  relayStep: string;
  description: string;
  name: string;
}

export const ComponentIllustration = ({ name, relayStep, description }: ComponentIllustrationProps) => {
  const stateModifier = toKebabCase(relayStep);
  return (
    <Figure>
      <svg
        width="960"
        height="540"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('component-illustration', `component-illustration--${stateModifier}`)}
        fill="none"
      >
        <g fill="var(--component-illustration-background-color, white)">
          <rect width="960" height="540" />
          <rect width="960" height="540" />
        </g>
        <g fill="var(--component-illustration-grid-color, #eee)">
          <rect width="2" height="540" transform="translate(69)" />
          <rect width="2" height="540" transform="translate(151)" />
          <rect width="2" height="540" transform="translate(233)" />
          <rect width="2" height="540" transform="translate(315)" />
          <rect width="2" height="540" transform="translate(397)" />
          <rect width="2" height="540" transform="translate(479)" />
          <rect width="2" height="540" transform="translate(561)" />
          <rect width="2" height="540" transform="translate(643)" />
          <rect width="2" height="540" transform="translate(725)" />
          <rect width="2" height="540" transform="translate(807)" />
          <rect width="2" height="540" transform="translate(889)" />
          <rect width="960" height="2" transform="translate(0 64)" />
          <rect width="960" height="2" transform="translate(0 146)" />
          <rect width="960" height="2" transform="translate(0 228)" />
          <rect width="960" height="2" transform="translate(0 310)" />
          <rect width="960" height="2" transform="translate(0 392)" />
          <rect width="960" height="2" transform="translate(0 474)" />
        </g>
        <use href={`/svg/componenten_overzicht_${toKebabCase(name)}.svg#component-illustration`} />
      </svg>
      <FigureCaption className="component-illustration__caption">{description}</FigureCaption>
    </Figure>
  );
};
