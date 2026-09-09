import type { ReactNode } from 'react';
import { Button } from '@components/button/button';
import { Drawer } from '@utrecht/component-library-react';
import { IconX, IconMenu2 } from '@tabler/icons-react';
import { i18n, type I18nLanguages } from '../../i18n';
import '@utrecht/drawer-css/dist/index.css';
import './mobile-menu.css';

export interface MobileMenuTriggerProps {
  lang: I18nLanguages;
}

export const MobileMenuTrigger = ({ lang }: MobileMenuTriggerProps) => {
  return (
    <Button
      className="ma-mobile-menu-trigger"
      purpose="subtle"
      iconStart={<IconMenu2 />}
      /* @ts-expect-error commandfor is not defined in React. Polyfill is included */
      commandfor="ma-mobile-menu-drawer"
      command="show-modal"
    >
      {i18n[lang].menu}
    </Button>
  );
};

export interface MobileMenuProps {
  children?: ReactNode;
  lang: I18nLanguages;
}

export const MobileMenu = ({ children, lang }: MobileMenuProps) => {
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
          {i18n[lang].close}
        </Button>
      </header>
      {children}
    </Drawer>
  );
};
