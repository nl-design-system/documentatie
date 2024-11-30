import Logo from '@theme/Logo';
import clsx from 'clsx';
import React from 'react';
import './Logo.css';

export default function NavbarLogo(): React.Element {
  return (
    <Logo
      className={clsx(
        'utrecht-link',
        'utrecht-link--html-a',
        'navbar__item',
        'navbar__item--show-on-mobile',
        'navbar-logo',
      )}
      imageClassName={clsx('navbar__logo', 'navbar-logo__icon')}
      titleClassName={clsx('navbar__title', 'navbar-logo__title')}
    />
  );
}
