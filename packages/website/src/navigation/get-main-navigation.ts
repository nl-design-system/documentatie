import type { NavigationRoot } from '.';
import { withCurrentIndication } from './with-current-indication';

/**
 * Get the main navigation items (level 1) of the navigation structure.
 * This consists of the root `NavigationGroup` from the navigation config
 * alongside its children.
 */
export async function getMainNavigation(navigation: Promise<NavigationRoot>, pathname: string) {
  const { navigationTree } = await withCurrentIndication(navigation, pathname);
  return [navigationTree, ...navigationTree.items].filter(Boolean);
}
