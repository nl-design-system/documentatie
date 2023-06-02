import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import style from './HomepageUpdates.module.css';

export const HomepageUpdates = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={clsx(style['homepage-updates'])}>
      <div className={clsx(style['homepage-updates__linear-gradient'])} />
      <div className="container">{children}</div>
    </div>
  );
};

export default HomepageUpdates;
