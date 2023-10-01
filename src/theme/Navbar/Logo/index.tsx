import React from 'react';
import Logo from '@theme/Logo';
import styles from './Logo.module.css';
import clsx from 'clsx';

export default function NavbarLogo(): JSX.Element {
  return (
    <Logo
      className={clsx(
        'utrecht-link',
        'utrecht-link--html-a',
        'navbar__item',
        'navbar__item--show-on-mobile',
        styles['navbar-logo'],
      )}
      imageClassName={clsx('navbar__logo', styles['navbar-logo__icon'])}
      titleClassName={clsx('navbar__title', styles['navbar-logo__title'])}
    />
  );
}
