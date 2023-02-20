import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

export default function MobileSidebarToggle(): JSX.Element {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button onClick={toggle} aria-expanded={shown} className="navbar__toggle clean-btn" type="button">
      Menu
    </button>
  );
}
