import React, { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { Image, Link } from '@utrecht/component-library-react';
import style from './CardGroup.module.css';

type Appearance = 'small' | 'medium' | 'large';

interface CardIllustrationProps {
  background?: boolean;
}

export const CardIllustration = ({ background, children }: PropsWithChildren<CardIllustrationProps>) => (
  <div className={clsx(style['card__illustration'], background && style['card__illustration--background'])}>
    {children}
  </div>
);

export const CardSection = ({ children }: PropsWithChildren<{}>) => (
  <section className={clsx(style['card__section'])}>{children}</section>
);

interface CardProps {
  appearance?: Appearance;
  href?: string;
  className?: string;
}

export const Card = ({ href, appearance = 'medium', className, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className={clsx(style['cardgroup__card'], style[`cardgroup__card--${appearance}`], className)}>
      {href ? (
        <Link href={href} boxContent className={clsx(style['card__link'])}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

interface CardGroupProps {
  appearance?: Appearance;
}

export const CardGroup = ({ appearance = 'medium', children }: PropsWithChildren<CardGroupProps>) => (
  <div className={clsx(style['cardgroup'], style[`cardgroup--${appearance}`])}>{children}</div>
);
