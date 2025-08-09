import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import type { ReactElement } from 'react';

export default function MobileSidebarToggle(): ReactElement {
  const { toggle, shown, shouldRender } = useNavbarMobileSidebar();

  return (
    shouldRender && (
      <Button
        appearance="primary-action-button"
        onClick={toggle}
        aria-expanded={shown}
        className="navbar__toggle clean-btn"
        type="button"
      >
        Menu
      </Button>
    )
  );
}
