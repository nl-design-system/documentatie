import { useLocation } from '@docusaurus/router';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocPage/Layout/Sidebar';
import DocSidebar from '@theme/DocSidebar';
import clsx from 'clsx';
import React, { type ReactNode, useCallback, useState } from 'react';
import styles from './styles.module.css';

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }: { children: ReactNode }) {
  const sidebar = useDocsSidebar();
  return <React.Fragment key={sidebar?.name ?? 'noSidebar'}>{children}</React.Fragment>;
}

export default function DocPageLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}: Props): JSX.Element {
  const { pathname } = useLocation();

  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    setHiddenSidebar((t) => !t);
  }, [setHiddenSidebarContainer, hiddenSidebar]);

  return (
    <aside
      className={clsx(ThemeClassNames.docs.docSidebarContainer, styles.docSidebarContainer)}
      onTransitionEnd={(e) => {
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }}
    >
      <ResetOnSidebarChange>
        <div className={clsx(styles.sidebarViewport, hiddenSidebar && styles.sidebarViewportHidden)}>
          <DocSidebar sidebar={sidebar} path={pathname} onCollapse={toggleSidebar} isHidden={hiddenSidebar} />
        </div>
      </ResetOnSidebarChange>
    </aside>
  );
}
