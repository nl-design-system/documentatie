import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import './HomepageHero.css';

export const HomepageHero = ({ children }: PropsWithChildren) => (
  <div className="homepage-hero">
    <div className={clsx('container', 'homepage-hero__container')}>{children}</div>
  </div>
);

export default HomepageHero;
