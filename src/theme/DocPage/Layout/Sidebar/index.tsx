import { useLocation } from '@docusaurus/router';
import DocSidebar from '@docusaurus/theme-classic/src/theme/DocSidebar';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import { default as DefaultDocPageLayoutSidebar } from '@theme/DocRoot/Layout/Sidebar';
import clsx from 'clsx';
import React, { type ReactNode, useCallback, useState } from 'react';

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }: { children: ReactNode }) {
  const sidebar = useDocsSidebar();
  return <React.Fragment key={sidebar?.name ?? 'noSidebar'}>{children}</React.Fragment>;
}

type Fn = typeof DefaultDocPageLayoutSidebar;

const DocPageLayoutSidebar: Fn = function DocPageLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}) {
  const { pathname } = useLocation();

  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    setHiddenSidebar((t) => !t);
  }, [setHiddenSidebarContainer, hiddenSidebar]);

  return (
    <aside
      className={clsx(ThemeClassNames.docs.docSidebarContainer, 'docSidebarContainer')}
      onTransitionEnd={(_evt) => {
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }}
    >
      <ResetOnSidebarChange>
        <div className={clsx('sidebarViewport', hiddenSidebar && 'sidebarViewportHidden')}>
          <DocSidebar sidebar={sidebar} path={pathname} onCollapse={toggleSidebar} isHidden={hiddenSidebar} />
        </div>
      </ResetOnSidebarChange>
    </aside>
  );
};

export default DocPageLayoutSidebar;
