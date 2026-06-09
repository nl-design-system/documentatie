import { navigation } from '../navigation.config';

/**
 * Get the main navigation items (level 1) of the navigation structure.
 * This consists of the root `NavigationGroup` from the navigation config
 * alongside its children.
 */
export async function getMainNavigation() {
  const nav = await navigation;
  return [nav, ...nav.items].filter(Boolean);
}
