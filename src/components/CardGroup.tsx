import { Link } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './CardGroup.css';

type Appearance = 'small' | 'medium' | 'large' | 'background';

interface CardIllustrationProps extends HTMLAttributes<HTMLElement> {
  background?: boolean;
}

export const CardIllustration = ({
  background,
  children,
  className,
  ...props
}: PropsWithChildren<CardIllustrationProps>) => (
  <div className={clsx('card__illustration', background && 'card__illustration--background', className)} {...props}>
    {children}
  </div>
);

export const CardContent = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className="card__content" {...props} />
);

interface CardProps {
  appearance?: Appearance;
  href?: string;
  className?: string;
  component?: 'article' | 'section' | 'div';
}

export const Card = ({ href, appearance, className, component = 'div', children }: PropsWithChildren<CardProps>) => {
  const Wrapper = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    if (component === 'article') return <article {...props} />;
    if (component === 'section') return <section {...props} />;
    return <div {...props} />;
  };

  const card = (
    <Wrapper className={clsx('cardgroup__card', `cardgroup__card--${appearance}`, className)}>{children}</Wrapper>
  );

  return href ? (
    <Link href={href} boxContent className="cardgroup__link">
      {card}
    </Link>
  ) : (
    card
  );
};

interface CardGroupProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: Appearance;
}

export const CardGroup = ({ appearance = 'medium', children, className }: PropsWithChildren<CardGroupProps>) => (
  <div className={clsx('cardgroup', `cardgroup--${appearance}`, className)}>{children}</div>
);
