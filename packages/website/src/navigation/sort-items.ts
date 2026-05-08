import type { NavigationElement, NavigationElementOrdered } from './index.ts';

/**
 * Comparator function to sort based on `filePath`. Only sorts when both items
 * have an `filePath` property
 */
function sortByFilePath(a: NavigationElement, b: NavigationElement) {
  if (!a.filePath || !b.filePath) return 0;
  if (a.filePath < b.filePath) return -1;
  if (a.filePath > b.filePath) return 1;
  return 0;
}

/**
 * Comparator function to sort based on `order`. When both items share the same
 * order value, fallback to sorting by `filePath`
 */
function sortByOrder(a: NavigationElement, b: NavigationElement) {
  const orderA = a.order || 0;
  const orderB = b.order || 0;

  if (orderA < orderB) return -1;
  if (orderA > orderB) return 1;

  return sortByFilePath(a, b);
}

/** Does an NavigationElement has an `order` property */
const hasOrder = (item: NavigationElement): item is NavigationElementOrdered => item?.order !== undefined;

/**
 * Sort NavigationElement's. The sorting is done in two phases:
 * 1. Sort each item by its `fileName`.
 * 2. Then (one by one) remove each item with an `order` field and inject it
 *    back into the array on the index based on the `order` field.
 */
export function sortItems(items: NavigationElement[]) {
  const fileNameSorted = items.toSorted(sortByFilePath);
  const orderSorted = items.filter(hasOrder).toSorted(sortByOrder);

  const result = [...fileNameSorted];

  orderSorted.forEach((item) => {
    result.splice(result.indexOf(item), 1);
    result.splice(item.order - 1, 0, item);
  });

  return result;
}
