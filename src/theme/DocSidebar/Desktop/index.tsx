import React, { useId } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar } from '@docusaurus/theme-common/internal';
import Content from '@theme/DocSidebar/Desktop/Content';
import type { Props } from '@theme/DocSidebar/Desktop';

import styles from './styles.module.css';
import { LinkButton } from '@utrecht/component-library-react';
import { IconArrowBarToLeft, IconArrowBarToRight } from '@tabler/icons-react';

function DocSidebarDesktop({ path, sidebar, onCollapse: toggleSidebar, isHidden }: Props) {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const { isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const sidebarId = useId();

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
        isNavbarVisible && styles.sidebarWithNavbar,
      )}
    >
      <LinkButton
        onClick={toggleSidebar}
        className={clsx(styles['sidebar__toggle-button'], isHidden && styles['sidebar__toggle-button--icon-only'])}
        aria-controls={sidebarId}
        aria-label={isHidden ? 'Toon sidebar' : 'Verberg sidebar'}
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
      </LinkButton>

      <div
        id={sidebarId}
        aria-expanded={!isHidden}
        className={clsx(styles['sidebar__content'], isHidden && styles['sidebar__content--hidden'])}
      >
        <Content path={path} sidebar={sidebar} />
      </div>
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
