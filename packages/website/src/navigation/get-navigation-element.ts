import { navigationElements, type NavigationElement, type NavigationGroup } from './index';
import { navigation } from '../navigation.config';
import type { NavigationItem } from './index.ts';

/**
 * Get an element in the navigation tree based on a href.
 */
export async function getNavigationElement(href: string) {
  await navigation;
  return navigationElements.find((element: NavigationElement) => {
    const _href = (element as NavigationItem)?.href || (element as NavigationGroup)?.index?.href;
    return trimSlashes(_href) === trimSlashes(href);
  });
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
