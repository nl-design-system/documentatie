import { navigationElements, type NavigationElement, type NavigationGroup } from './index';
import { navigation } from '../navigation.config';
import type { NavigationItem } from './index.ts';

/**
 * Based on the navigation config, get the breadcrumb path of
 * NavigationElements for a specific route. The `input` can be either an
 * `href` or `NavigationElement`.
 */
export async function getBreadcrumbsForElement(input: string | NavigationElement): Promise<NavigationElement[]> {
  await navigation;

  const parents: NavigationGroup[] = [];
  const child: NavigationElement | undefined = typeof input === 'string' ? findNavigationElement(input) : input;

  if (!child) return [];

  findNavigationElementParents(child, parents);
  parents.reverse();

  if (child !== parents.at(-1)?.index) {
    return [...parents, child];
  }

  return parents;
}

/**
 * Find an element in the navigation tree based on a href.
 */
function findNavigationElement(href: string) {
  return navigationElements.find((element: NavigationElement) => {
    const _href = (element as NavigationItem)?.href || (element as NavigationGroup)?.index?.href;
    return trimSlashes(_href) === trimSlashes(href);
  });
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

/**
 * Trim the slashes of a string (usually an `href`) to use in a comparison.
 * Since the `href` of an `NavigationItem` can be based on an
 * Astro Content Collection Id's, a Docusaurus ID, the existance of a leading
 * or trailing slash is not guaranteed. Stripping them results in a more stable
 * comparison
 */
function trimSlashes(string?: string) {
  return string ? string.replace(/\/$/, '').replace(/^\//, '') : undefined;
}
