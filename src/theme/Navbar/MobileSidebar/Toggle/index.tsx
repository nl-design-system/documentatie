import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

export default function MobileSidebarToggle(): React.Element {
  const { toggle, shown } = useNavbarMobileSidebar();

  return (
    <Button
      appearance="subtle-button"
      onClick={toggle}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      Menu
    </Button>
  );
}
