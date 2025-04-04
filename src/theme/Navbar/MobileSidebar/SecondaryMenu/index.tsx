import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import type { ReactElement } from 'react';

// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
export default function NavbarMobileSidebarSecondaryMenu(): ReactElement | null {
  const secondaryMenu = useNavbarSecondaryMenu();
  return <>{secondaryMenu.content}</>;
}
