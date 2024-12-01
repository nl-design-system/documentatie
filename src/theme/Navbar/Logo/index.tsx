import Logo from '@theme/Logo';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import './Logo.css';

export default function NavbarLogo(): ReactElement {
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
