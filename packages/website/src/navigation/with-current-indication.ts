import type { NavigationGroup, NavigationRoot } from '.';
import { getNavigationElement } from './get-navigation-element';

function markExpanded(group: NavigationGroup) {
  group.expanded = true;
  if (group.parent) {
    markExpanded(group.parent);
  }
}

/**
 * Helper fuction that mark `NavigationElement`s with a `current` status based on the provided `pathname`
 */
export async function withCurrentIndication(navigationRoot: Promise<NavigationRoot>, pathname: string) {
  const { navigationTree, navigationList } = await navigationRoot;

  const currentElement = await getNavigationElement(navigationList, pathname);
  if (currentElement) {
    currentElement.current = true;
  }

  if (currentElement?.parent) {
    markExpanded(currentElement.parent);
  }

  return { navigationTree, navigationList };
}
