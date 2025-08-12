import { useNavbarMobileSidebar, useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import './Layout.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NavbarMobileSidebarLayout({ header, primaryMenu, secondaryMenu }: any): ReactElement {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu();
  const navbarModalDialog = useRef<HTMLDialogElement>();
  const { shown, toggle } = useNavbarMobileSidebar();

  useEffect(() => {
    const { current: dialogEl } = navbarModalDialog;

    if (!dialogEl) return;
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
    <dialog className={clsx('navbar-sidebar', 'navbar-sidebar')} ref={navbarModalDialog}>
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
