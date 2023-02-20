import React from 'react';
import Logo from '@theme/Logo';
import clsx from 'clsx';

export default function NavbarLogo({ className, titleClassName, imageClassName, ...props }): JSX.Element {
  return (
    <Logo
      className={clsx('navbar__brand', className)}
      imageClassName={clsx('navbar__logo', imageClassName)}
      titleClassName={clsx('navbar__title text--truncate', titleClassName)}
      {...props}
    />
  );
}
