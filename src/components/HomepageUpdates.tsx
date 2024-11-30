import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './HomepageUpdates.css';

export const HomepageUpdates = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={clsx('homepage-updates')}>
      <div className="container padding-bottom--xl">{children}</div>
    </div>
  );
};

export default HomepageUpdates;
