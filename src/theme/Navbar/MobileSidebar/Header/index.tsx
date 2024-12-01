import { translate } from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { IconChevronLeft, IconX } from '@tabler/icons-react';
import type { ButtonProps } from '@utrecht/component-library-react/dist/Button';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import './Header.css';

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
      className={clsx('navbar-sidebar__header-button', 'navbar-sidebar__header-button--close')}
      onClick={() => mobileSidebar.toggle()}
    >
      <IconX />
    </Button>
  );
}

function SecondaryMenuBackButton(props: ButtonProps) {
  return (
    <Button {...props} appearance="subtle-button" className={clsx('navbar-sidebar__header-button')}>
      <IconChevronLeft /> Hoofdmenu
    </Button>
  );
}

export default function NavbarMobileSidebarHeader(): ReactElement {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const { hide, shown } = useNavbarSecondaryMenu();

  return (
    <div className={clsx('mobile-sidebar__header')}>
      {/* edge-case: prevent returning to the primaryMenu when it's empty */}
      {!isPrimaryMenuEmpty && shown ? <SecondaryMenuBackButton onClick={() => hide()} /> : <div></div>}
      <CloseButton />
    </div>
  );
}
