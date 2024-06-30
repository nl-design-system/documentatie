import { toKebabCase } from '@site/src/utils';
import { Figure, FigureCaption } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import style from './ComponentIllustration.module.css';
import * as Sketch from './sketches';

type ComponentIllustrationProps = {
  component: string;
  relayStep: string;
  description: string;
};

export const ComponentIllustration = ({ component, relayStep, description }: ComponentIllustrationProps) => {
  const getFigure = () => {
    if (Object.prototype.hasOwnProperty.call(Sketch, component)) {
      return { SVG: Sketch[component], caption: description };
    } else {
      return { SVG: Sketch.TodoSketch, caption: 'Leeg grid zonder component schets' };
    }
  };

  const { SVG, caption } = getFigure();
  const stateModifier = toKebabCase(relayStep);

  return (
    <Figure
      className={clsx(
        style['component-illustration'],
        stateModifier && style[`component-illustration--${stateModifier}`],
      )}
    >
      <SVG className={clsx(style['component-illustration__svg'])} />
      <FigureCaption className={clsx(style['component-illustration__caption'])}>{caption}</FigureCaption>
    </Figure>
  );
};
