import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export const MainNav = ({ children }: PropsWithChildren<object>) => {
  return (
    <div className="main-nav">
      {/* For now use @theme navbar items as this helps maintain the navbar configuration while in beta*/}
      <div className={clsx('main-nav__container', 'container')}>{children}</div>
    </div>
  );
};
