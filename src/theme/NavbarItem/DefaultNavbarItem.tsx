import React from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import type { DesktopOrMobileNavBarItemProps, Props } from '@theme/NavbarItem/DefaultNavbarItem';
import GitHubNavbarLink from './GitHubNavbarLink';

function DefaultNavbarItemDesktop({ className, isDropdownItem = false, ...props }: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavbarNavLink
      className={clsx(isDropdownItem && 'dropdown__link', className)}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({ className, isDropdownItem, ...props }: DesktopOrMobileNavBarItemProps) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx('menu__link', className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): JSX.Element {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  if (props.label === 'GitHub') {
    return <GitHubNavbarLink {...props} />;
  }

  return <Comp {...props} activeClassName={props.activeClassName ?? (mobile && 'menu__link--active')} />;
}
