import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import './HomepageHero.css';

interface HomepageHeroProps {
  title: string;
}

export const HomepageHero = ({ title, children }: PropsWithChildren<HomepageHeroProps>) => (
  <div className="homepage-hero">
    <div className={clsx('container', 'homepage-hero__container')}>
      <Heading1 className="homepage-hero__title">{title}</Heading1>
      <div className="homepage-hero__description">{children}</div>
    </div>
  </div>
);

export default HomepageHero;
