import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import style from './HomepageTeasers.module.css';

export const HomepageTeasers = ({ children }: PropsWithChildren<{}>) => (
  <div className={clsx(style['homepage-teasers'], 'container')}>{children}</div>
);
