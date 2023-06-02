import React, { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { Image } from '@utrecht/component-library-react';
import style from './CardGroup.module.css';

interface CardProps {
  illustration?: { src: string; alt: string };
  illustrationAlt?: string;
}

export const Card = ({ illustration, children }: PropsWithChildren<CardProps>) => (
  <div className={clsx(style['cardgroup__card'])}>
    {illustration && (
      <div className={clsx(style['homepage-card__illustration'])}>
        <Image src={illustration.src} alt={illustration.alt} />
      </div>
    )}
    <div className={clsx(style['homepage-card__content'])}>{children}</div>
  </div>
);

export const CardGroup = ({ children }: PropsWithChildren<{}>) => (
  <div className={clsx(style['cardgroup'])}>{children}</div>
);
