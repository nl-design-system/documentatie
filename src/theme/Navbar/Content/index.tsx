import { ErrorCauseBoundary, useThemeConfig } from '@docusaurus/theme-common';
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';
import clsx from 'clsx';
import type { PropsWithChildren, ReactElement } from 'react';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

interface NavbarItemsProps {
  items: NavbarItemConfig[];
  position?: 'block-start' | 'block-end';
  positionChildren?: 'block-start' | 'block-end';
  showOnMobile?: boolean;
}

function NavbarItems({
  items,
  position = 'block-start',
  positionChildren = 'block-end',
  showOnMobile,
  children,
}: PropsWithChildren<NavbarItemsProps>): ReactElement {
  return (
    <div
      className={clsx(
        'navbar__items',
        position === 'block-end' ? 'navbar__items--right' : 'navbar__items--left',
        showOnMobile && 'navbar__items--show-on-mobile',
      )}
    >
      {positionChildren === 'block-start' && children}
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={() =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}{' '}
      {positionChildren === 'block-end' && children}
    </div>
  );
}

export default function NavbarContent(): ReactElement {
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const mobileSidebar = useNavbarMobileSidebar();
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className="navbar__inner">
      {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      <NavbarLogo />
      <NavbarItems position="block-start" items={leftItems} />

      <NavbarItems position="block-end" items={rightItems} showOnMobile>
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </NavbarItems>
    </div>
  );
}
