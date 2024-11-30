import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar } from '@docusaurus/theme-common/internal';
import { IconArrowBarToLeft, IconArrowBarToRight } from '@tabler/icons-react';
import type { Props } from '@theme/DocSidebar/Desktop';
import Content from '@theme/DocSidebar/Desktop/Content';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { useId } from 'react';
import './styles.css';

function DocSidebarDesktop({ path, sidebar, onCollapse: toggleSidebar, isHidden }: Props) {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const { isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const sidebarId = useId();

  return (
    <div
      className={clsx(
        'sidebar',
        hideOnScroll && 'sidebarWithHideableNavbar',
        isHidden && 'sidebarHidden',
        isNavbarVisible && 'sidebarWithNavbar',
      )}
    >
      <Button
        appearance="subtle-button"
        onClick={toggleSidebar}
        className={clsx('sidebar__toggle-button', isHidden && 'sidebar__toggle-button--icon-only')}
        aria-controls={sidebarId}
        aria-label={isHidden ? 'Toon sidebar' : 'Verberg sidebar'}
        aria-expanded={!isHidden}
      >
        {!isHidden ? (
          <>
            <IconArrowBarToLeft /> Verberg
          </>
        ) : (
          <>
            <IconArrowBarToRight />
          </>
        )}
      </Button>

      <div
        id={sidebarId}
        aria-expanded={!isHidden}
        className={clsx('sidebar__content', isHidden && 'sidebar__content--hidden')}
      >
        <Content path={path} sidebar={sidebar} />
      </div>
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
