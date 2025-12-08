import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { NavbarSecondaryMenuFiller, ThemeClassNames } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import clsx from 'clsx';
import { memo } from 'react';

interface SecondaryMenuProps {
  path: string;
  sidebar: PropSidebarItem[];
}

const DocSidebarMobileSecondaryMenu = ({ sidebar, path }: SecondaryMenuProps) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === 'category' && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === 'link') {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
};
function DocSidebarMobile(props) {
  return <NavbarSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props} />;
}
export default memo(DocSidebarMobile);
