import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Navbar/Search';
import styles from './Search.module.css';

export default function NavbarSearch({ children, className, ...props }: Props): JSX.Element {
  return (
    <div className={clsx(className, styles['nav-search-bar'])} {...props}>
      {children}
    </div>
  );
}
