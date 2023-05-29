import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './Header.module.css';
import { Button } from '@utrecht/component-library-react';
import clsx from 'clsx';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <Button
      appearance="subtle"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </Button>
  );
}

export default function NavbarMobileSidebarHeader(): JSX.Element {
  return (
    <div className={clsx(styles['mobile-sidebar__header'])}>
      <CloseButton />
    </div>
  );
}
