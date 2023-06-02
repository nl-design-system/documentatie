import React, { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { Image, Link } from '@utrecht/component-library-react';
import style from './CardGroup.module.css';

type Appearance = 'small' | 'medium' | 'large';

interface CardProps {
  illustration?: { src: string; alt: string; background?: boolean };
  illustrationAlt?: string;
  appearance?: Appearance;
  href?: string;
}

export const Card = ({ href, illustration, appearance = 'medium', children }: PropsWithChildren<CardProps>) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>) =>
    href ? (
      <Link href={href} boxContent className={clsx(style['card__link'])}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <div className={clsx(style['cardgroup__card'], style[`cardgroup__card--${appearance}`])}>
      <Wrapper>
        {illustration && (
          <div
            className={clsx(
              style['card__illustration'],
              illustration.background && style['card__illustration--background'],
            )}
          >
            <Image src={illustration.src} alt={illustration.alt} />
          </div>
        )}
        {children && <div className={clsx(style['card__content'])}>{children}</div>}
      </Wrapper>
    </div>
  );
};

interface CardGroupProps {
  appearance?: Appearance;
}

export const CardGroup = ({ appearance = 'medium', children }: PropsWithChildren<CardGroupProps>) => (
  <div className={clsx(style['cardgroup'], style[`cardgroup--${appearance}`])}>{children}</div>
);
