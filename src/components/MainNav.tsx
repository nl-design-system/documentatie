import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import style from './MainNav.module.css';

export const MainNav = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={clsx(style['main-nav'])}>
      {/* For now use @theme navbar items as this helps maintain the navbar configuration while in beta*/}
      <div className={clsx(style['main-nav__container'], 'container')}>{children}</div>
    </div>
  );
};
