import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/Navbar/Layout';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function NavbarLayout({ children }: Props): ReactElement {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();

  const { navbarRef } = useHideableNavbar(hideOnScroll);
  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
      })}
    >
      {children}
      <NavbarMobileSidebar />
    </nav>
  );
}
