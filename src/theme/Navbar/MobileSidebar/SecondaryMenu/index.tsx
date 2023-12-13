import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import React from 'react';

// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
export default function NavbarMobileSidebarSecondaryMenu(): React.Element | null {
  const secondaryMenu = useNavbarSecondaryMenu();
  return <>{secondaryMenu.content}</>;
}
