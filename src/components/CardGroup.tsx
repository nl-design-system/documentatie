import { Link } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import './CardGroup.css';

type Appearance = 'small' | 'medium' | 'large' | 'background';

interface CardIllustrationProps extends HTMLAttributes<HTMLElement> {
  background?:
    | 'light-orange'
    | 'light-pink'
    | 'light-purple'
    | 'light-green'
    | 'light-blue'
    | 'dark-orange'
    | 'dark-pink'
    | 'dark-purple'
    | 'dark-green'
    | 'dark-blue';
}

export const CardIllustration = ({
  background,
  children,
  className,
  ...props
}: PropsWithChildren<CardIllustrationProps>) => (
  <div
    className={clsx('ma-card__illustration', background && `ma-card__illustration--${background}`, className)}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className="ma-card__content" {...props} />
);

interface CardProps {
  appearance?: Appearance;
  href?: string;
  className?: string;
  component?: 'article' | 'section' | 'div';
  background?: boolean;
}

export const Card = ({
  href,
  appearance,
  className,
  component = 'div',
  background,
  children,
}: PropsWithChildren<CardProps>) => {
  const Wrapper = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    if (component === 'article') return <article {...props} />;
    if (component === 'section') return <section {...props} />;
    return <div {...props} />;
  };

  const card = (
    <Wrapper
      className={clsx(
        'ma-cardgroup__card',
        background && 'ma-cardgroup__card--light-purple',
        `ma-cardgroup__card--${appearance}`,
        className,
      )}
    >
      {children}
    </Wrapper>
  );

  return href ? (
    <Link href={href} boxContent className="ma-cardgroup__link">
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
  <div className={clsx('ma-cardgroup', `ma-cardgroup--${appearance}`, className)}>{children}</div>
);
