import { useNavbarMobileSidebar, useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/Navbar/MobileSidebar/Layout';
import clsx from 'clsx';
import { React, useEffect, useRef } from 'react';
import styles from './Layout.module.css';

export default function NavbarMobileSidebarLayout({ header, primaryMenu, secondaryMenu }: Props): React.Element {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu();
  const navbarModalDialog = useRef(null);
  const { shown, toggle } = useNavbarMobileSidebar();

  useEffect(() => {
    const dialogEl = navbarModalDialog.current;

    if (shown) {
      dialogEl.showModal();
    } else {
      dialogEl.close();
    }
  });

  useEffect(() => {
    const dialogEl = navbarModalDialog.current;

    function toggleOnEscape(e) {
      if (e.key === 'Escape') {
        if (shown) {
          toggle();
        }
      }
    }

    dialogEl.addEventListener('keydown', toggleOnEscape);

    return () => {
      dialogEl.removeEventListener('keydown', toggleOnEscape);
    };
  }, [shown]);

  return (
    <dialog className={clsx('navbar-sidebar', styles['navbar-sidebar'])} ref={navbarModalDialog}>
      {header}
      <div className={clsx('navbar-sidebar__items')}>
        {secondaryMenuShown ? (
          <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
        ) : (
          <div className="navbar-sidebar__item menu these-no-need-when">{primaryMenu}</div>
        )}
      </div>
    </dialog>
  );
}
