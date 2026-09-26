import type { NavigationGroupResolved } from '.';

/**
 * `getSideNavigationItems` returns an array of the current side navigation
 * items. It injects the main menu item index page as the first navigation item
 * for easier reference.
 *
 * The Den Haag Side Navigation expects a nested array, so thats why the return value is nested
 */
export const getSideNavigationItems = (navigationTree: NavigationGroupResolved, pathname: string) => {
  const treeLevelOne = navigationTree.items.find((item) => item.expanded || item.current);

  if (!treeLevelOne || treeLevelOne.type !== 'group') {
    return [[]];
  }

  const items = treeLevelOne.items;
  const index = treeLevelOne.index;

  if (index && treeLevelOne.href === pathname) {
    index.current = true;
  }

  return [[index, ...items].filter(Boolean)];
};
