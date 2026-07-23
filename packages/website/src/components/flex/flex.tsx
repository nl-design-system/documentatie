import type { ReactNode } from 'react';
import './flex.css';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexProps {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: FlexWrap;
  children?: ReactNode;
  className?: string;
  is?:
    | 'div'
    | 'section'
    | 'article'
    | 'aside'
    | 'main'
    | 'header'
    | 'footer'
    | 'nav'
    | 'ul'
    | 'ol'
    | 'li'
    | 'form'
    | 'fieldset'
    | 'figure'
    | 'blockquote'
    | 'pre'
    | 'dl'
    | 'address';
}

export const Flex = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  children,
  className,
  is: Component = 'div',
}: FlexProps) => {
  const directionClass = `ma-flex--direction-${direction}`;
  const justifyClass = `ma-flex--justify-${justify.replace(/\s+/g, '-')}`;
  const alignClass = `ma-flex--align-${align.replace(/\s+/g, '-')}`;
  const wrapClass = `ma-flex--wrap-${wrap}`;

  return (
    <Component
      className={`ma-flex ${directionClass} ${justifyClass} ${alignClass} ${wrapClass}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Component>
  );
};

Flex.displayName = 'Flex';
