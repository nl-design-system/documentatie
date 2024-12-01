import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { Collapsible, ThemeClassNames, useCollapsible, usePrevious, useThemeConfig } from '@docusaurus/theme-common';
import {
  findFirstSidebarItemLink,
  isActiveSidebarItem,
  useDocSidebarItemsExpandedState,
} from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import type { Props } from '@theme/DocSidebarItem/Category';
import DocSidebarItems from '@theme/DocSidebarItems';
import { Button, Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { useEffect, useMemo } from 'react';
import type { ComponentProps, ReactElement } from 'react';

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (_: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item: Props['item']): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstSidebarItemLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstSidebarItemLink(item);
  }, [item, isBrowser]);
}

function CollapseButton({
  categoryLabel,
  collapsed,
  onClick,
}: {
  categoryLabel: string;
  collapsed: boolean;
  onClick: ComponentProps<'button'>['onClick'];
}) {
  return (
    <Button
      appearance="subtle-button"
      aria-label={translate(
        {
          id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
          message: "Toggle the collapsible sidebar category '{label}'",
          description: 'The ARIA label to toggle the collapsible sidebar category',
        },
        { label: categoryLabel },
      )}
      type="button"
      className="clean-btn"
      onClick={onClick}
    >
      <Icon>{collapsed ? <IconChevronDown /> : <IconChevronUp />}</Icon>
    </Button>
  );
}

export default function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactElement {
  const { items, label, collapsible, className, href } = item;
  const isMainCategory = className === 'sidebar__main-category';
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    },
  });

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  useEffect(() => {
    if (
      collapsible &&
      expandedItem !== null &&
      typeof expandedItem !== 'undefined' &&
      expandedItem !== index &&
      autoCollapseCategories
    ) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item',
        {
          'menu__list-item--collapsed': collapsed,
        },
      )}
    >
      <div className={clsx('menu__list-item-collapsible', { 'sidebar__main-category': isMainCategory })}>
        {isMainCategory ? (
          label
        ) : (
          <Link
            className={clsx('menu__link', 'utrecht-link', {
              'menu__link--sublist': collapsible,
              'menu__link--sublist-caret': !href && collapsible,
            })}
            href={collapsible ? (hrefWithSSRFallback ?? '#') : hrefWithSSRFallback}
            {...props}
          >
            {label}
          </Link>
        )}
        {href && collapsible && (
          <CollapseButton
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
            collapsed={collapsed}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
}
