import Logo from '@theme/Logo';
import clsx from 'clsx';
import React from 'react';
import styles from './Logo.module.css';

export default function NavbarLogo(): React.Element {
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
