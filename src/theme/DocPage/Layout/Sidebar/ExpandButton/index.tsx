import { translate } from '@docusaurus/Translate';
import { IconArrowBarToRight } from '@tabler/icons-react';
import { default as DefaultDocRootLayoutSidebarExpandButton } from '@theme/DocRoot/Layout/Sidebar/ExpandButton';
import { LinkButton } from '@utrecht/component-library-react/dist/css-module';
import './styles.css';

type Fn = typeof DefaultDocRootLayoutSidebarExpandButton;

const DocPageLayoutSidebarExpandButton: Fn = function DocPageLayoutSidebarExpandButton({ toggleSidebar }) {
  return (
    <LinkButton
      className="expandButton"
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
      <IconArrowBarToRight className="expandButtonIcon" />
    </LinkButton>
  );
};

export default DocPageLayoutSidebarExpandButton;
