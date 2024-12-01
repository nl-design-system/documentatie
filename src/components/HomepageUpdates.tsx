import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import './HomepageUpdates.css';

export const HomepageUpdates = ({ children }: PropsWithChildren<object>) => {
  return (
    <div className={clsx('homepage-updates')}>
      <div className="container padding-bottom--xl">{children}</div>
    </div>
  );
};

export default HomepageUpdates;
