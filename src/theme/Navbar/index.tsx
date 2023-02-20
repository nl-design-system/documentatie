import React from 'react';
import clsx from 'clsx';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useThemeConfig } from '@docusaurus/theme-common';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from './Logo';
import NavbarSearch from '@theme/Navbar/Search';
import NavbarItem from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';

import styles from './styles.module.css';

export default function Navbar() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items;
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <nav className={clsx(styles['nlds-main-nav'])}>
      <div className={clsx(styles['nlds-main-nav__items'])}>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarLogo
          className={styles['nlds-logo']}
          imageClassName={styles['nlds-logo__image']}
          titleClassName={styles['nlds-logo__title']}
        />
        {items
          .filter((item) => item.position === 'left')
          .map(({ position, type, ...item }, i) => (
            <NavbarItem
              type={type as any}
              {...item}
              key={i}
              className={clsx(styles['nlds-main-nav__item'])}
              activeClassName={styles['nlds-main-nav__item--active']}
            />
          ))}
      </div>
      <div className="navbar__items navbar__items--right">
        {items
          .filter((item) => item.position === 'right')
          .map(({ position, type, ...item }, i) => (
            <NavbarItem type={type as any} {...item} key={i} className={clsx(styles['nlds-main-nav__item'])} />
          ))}
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>
      <div role="presentation" className={clsx('navbar-sidebar__backdrop')} onClick={mobileSidebar.toggle} />
      {mobileSidebar.shouldRender && <NavbarMobileSidebar />}
    </nav>
  );
}
