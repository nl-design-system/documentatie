import { Button } from '@components/button/button';
import { Drawer } from '@utrecht/component-library-react';
import { IconX } from '@tabler/icons-react';
import '@utrecht/drawer-css/dist/index.css';
import './mobile-menu.css';

export const MobileMenuTrigger = () => {
  return (
    // @ts-expect-error commandfor is not defined in React. Polyfill is included
    <Button commandfor="ma-mobile-menu-drawer" command="show-modal">
      Menu
    </Button>
  );
};

export const MobileMenu = ({ children }) => {
  return (
    <Drawer id="ma-mobile-menu-drawer" className="ma-mobile-menu-drawer" modal={true}>
      <header className="ma-mobile-menu-drawer__header">
        <Button
          purpose="subtle"
          /* @ts-expect-error -- commandfor is not defined in react. Polyfill is included */
          commandfor="ma-mobile-menu-drawer"
          command="request-close"
          iconStart={<IconX />}
          iconOnly
        >
          Sluiten
        </Button>
      </header>
      {children}
    </Drawer>
  );
};
