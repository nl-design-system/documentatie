import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import style from './HomepageUpdates.module.css';

export const HomepageUpdates = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={clsx(style['homepage-updates'])}>
      <div className="container padding-bottom--xl">{children}</div>
    </div>
  );
};

export default HomepageUpdates;
