import { Figure, FigureCaption } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import style from './ComponentIllustration.module.css';
import * as Sketch from './sketches';

type ComponentIllustrationProps = {
  id: string;
  stateModifier: 'help-wanted' | 'community' | 'candidate' | 'hall-of-fame';
  description: string;
};

export const ComponentIllustration = ({ id, stateModifier, description }: ComponentIllustrationProps) => {
  const kebabToPascal = (s: string) =>
    s
      .split('-')
      .map((word) => {
        const [first, ...rest] = word.split('');
        return first.toUpperCase() + rest.join('');
      })
      .join('');

  const getFigure = () => {
    const component = kebabToPascal(id);

    if (Object.prototype.hasOwnProperty.call(Sketch, component)) {
      return { SVG: Sketch[component], caption: description, modifier: stateModifier };
    } else {
      return { SVG: Sketch.Todo, caption: 'Leeg grid zonder component schets' };
    }
  };

  const { SVG, caption, modifier } = getFigure();

  return (
    <Figure className={clsx(style['component-illustration'], modifier && style[`component-illustration--${modifier}`])}>
      <SVG className={clsx(style['component-illustration__svg'])} />
      <FigureCaption className={clsx(style['component-illustration__caption'])}>{caption}</FigureCaption>
    </Figure>
  );
};
