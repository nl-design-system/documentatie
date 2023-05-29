import React from 'react';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocPage/Layout/Sidebar/ExpandButton';

import styles from './styles.module.css';
import { IconArrowBarToRight } from '@tabler/icons-react';
import { LinkButton } from '@utrecht/component-library-react';

export default function DocPageLayoutSidebarExpandButton({ toggleSidebar }: Props): JSX.Element {
  return (
    <LinkButton
      className={styles.expandButton}
      title={translate({
        id: 'theme.docs.sidebar.expandButtonTitle',
        message: 'Expand sidebar',
        description: 'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.expandButtonAriaLabel',
        message: 'Expand sidebar',
        description: 'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}
    >
      <IconArrowBarToRight className={styles.expandButtonIcon} />
    </LinkButton>
  );
}
