import { isNavigationGroup, type NavigationGroup, type NavigationRoot } from '.';
import { getNavigationElement } from './get-navigation-element';

function markExpanded(group: NavigationGroup) {
  if (group.href !== '/') {
    group.expanded = true;
  }

  // mark all parents as expanded except for home
  if (group.parent && group.parent.href !== '/') {
    markExpanded(group.parent);
  }
}

/**
 * Helper fuction that mark `NavigationElement`s with a `current` status based on the provided `pathname`
 */
export async function withCurrentIndication(navigationRoot: Promise<NavigationRoot>, pathname: string) {
  const { navigationTree, navigationList } = (await navigationRoot)();

  const currentElement = getNavigationElement(navigationList, pathname);
  if (currentElement) {
    currentElement.current = true;
  }

  if (isNavigationGroup(currentElement)) {
    markExpanded(currentElement);
  }

  if (currentElement?.parent) {
    markExpanded(currentElement.parent);
  }

  // only when the homepage is visible, mark it as the current page
  if (pathname === '/') {
    navigationTree.current = true;
  }

  return { navigationTree, navigationList };
}
