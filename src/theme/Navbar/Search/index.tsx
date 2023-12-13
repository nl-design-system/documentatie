import type { Props } from '@theme/Navbar/Search';
import clsx from 'clsx';
import React from 'react';
import styles from './Search.module.css';

export default function NavbarSearch({ children, className, ...props }: Props): React.Element {
  return (
    <div className={clsx(className, styles['nav-search-bar'])} {...props}>
      {children}
    </div>
  );
}
