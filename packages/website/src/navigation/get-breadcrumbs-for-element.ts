import type { NavigationElement, NavigationGroup } from './index';
import { getNavigationElement } from './get-navigation-element';

/**
 * Based on the navigation config, get the breadcrumb path of
 * NavigationElements for a specific route. The `input` can be either an
 * `href` or `NavigationElement`.
 */
export async function getBreadcrumbsForElement(
  navigationElementList: Set<NavigationElement>,
  input: string | NavigationElement,
): Promise<NavigationElement[]> {
  const parents: Set<NavigationGroup> = new Set();
  const child: NavigationElement | undefined =
    typeof input === 'string' ? await getNavigationElement(navigationElementList, input) : input;

  if (!child) return [];

  findNavigationElementParents(child, parents);
  const _parents = [...parents].reverse();

  if (child !== _parents.at(-1)?.index) {
    return [..._parents, child];
  }

  return _parents;
}

/**
 * Find all parents for a given `NavigationElement`.
 */
function findNavigationElementParents(element: NavigationElement, list: Set<NavigationElement>) {
  if (element.parent) {
    list.add(element.parent);
    findNavigationElementParents(element.parent, list);
  }
}
