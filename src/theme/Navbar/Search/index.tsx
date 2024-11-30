import type { Props } from '@theme/Navbar/Search';
import clsx from 'clsx';
import React from 'react';
import './Search.css';

export default function NavbarSearch({ children, className, ...props }: Props): React.Element {
  return (
    <div className={clsx(className, 'nav-search-bar')} {...props}>
      {children}
    </div>
  );
}
