import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import React from 'react';
import clsx from 'clsx';
import IconMenu from '@theme/IconMenu';
import Logo from '@theme/Logo';
import NavbarItem from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';

import style from './AppHeader.module.css';

interface AppHeaderProps extends HTMLAttributes<HTMLElement> {
  showHamburger?: boolean;
  showSearchBar?: boolean;
  onHamburgerClick: () => void;
  menuItems: any[];
}

export const AppHeader = forwardRef(
  (
    { showHamburger, showSearchBar, onHamburgerClick, menuItems, children, className }: AppHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    {
      /* For now use @theme navbar items as this helps maintain the navbar configuration while in beta*/
    }
    return (
      <nav
        className={clsx(style['app-header'], { [style['app-header--show-mobile-menu']]: showHamburger }, className)}
        ref={ref}
      >
        <div className={clsx('container', style['app-header__container'])}>
          {showHamburger && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={onHamburgerClick}
              onKeyDown={onHamburgerClick}
            >
              <IconMenu />
            </button>
          )}
          <Logo
            className={clsx(style['app-header__logo'], style['logo'])}
            imageClassName={clsx(style['logo__image'])}
            titleClassName={clsx(style['logo__title'])}
          />
          <div className={clsx(style['app-header__menu'])}>
            {menuItems.map((item, i) => (
              <NavbarItem {...item} key={i} />
            ))}
            {showSearchBar && <SearchBar />}
          </div>
        </div>
      </nav>
    );
  },
);
