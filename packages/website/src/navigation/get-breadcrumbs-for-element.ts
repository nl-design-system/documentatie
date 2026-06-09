import type { NavigationElement, NavigationGroup } from './index';
import { navigation } from '../navigation.config';
import { getNavigationElement } from './get-navigation-element';

/**
 * Based on the navigation config, get the breadcrumb path of
 * NavigationElements for a specific route. The `input` can be either an
 * `href` or `NavigationElement`.
 */
export async function getBreadcrumbsForElement(input: string | NavigationElement): Promise<NavigationElement[]> {
  await navigation;

  const parents: NavigationGroup[] = [];
  const child: NavigationElement | undefined = typeof input === 'string' ? await getNavigationElement(input) : input;

  if (!child) return [];

  findNavigationElementParents(child, parents);
  parents.reverse();

  if (child !== parents.at(-1)?.index) {
    return [...parents, child];
  }

  return parents;
}

/**
 * Find all parents for a given `NavigationElement`.
 */
function findNavigationElementParents(element: NavigationElement, list: NavigationElement[]) {
  if (element.parent) {
    list.push(element.parent);
    findNavigationElementParents(element.parent, list);
  }
}
