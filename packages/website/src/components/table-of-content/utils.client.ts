/**
 * An object to map list items to that are mis configured in the original markup
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MissingHeading {}
export const missingHeading = new MissingHeading();

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type HeadingToListItemsMap = Map<HTMLHeadingElement | MissingHeading, HTMLLIElement[]>;

/**
 * Get all headings in the provided scope that have a matching heading level.
 */
export function getHeadingsInScope(
  scopeRoot: HTMLElement,
  headingLevel: HeadingLevel,
  ignore: Set<HTMLHeadingElement> = new Set(),
) {
  const set: Set<HTMLHeadingElement> = new Set();
  scopeRoot.querySelectorAll(`h${headingLevel}`).forEach((heading) => {
    if (ignore.has(heading)) return;
    set.add(heading);
  });
  return set;
}

/**
 * Get all ListItems of the listElement as a Set
 */
export function getListItems(listElement: HTMLUListElement | HTMLOListElement) {
  const set: Set<HTMLLIElement> = new Set();
  listElement.querySelectorAll('li').forEach((li) => set.add(li));
  return set;
}

/**
 * Find the heading element in a Set of heading elements for a given ListItem.
 * If the list item contains an anchor link, use it's `href` to locate the
 * heading based on the `heading.id`. If that fails, try to match on the
 * innerText of both the heading and listitem. If that also fails, giveup and
 * consider the heading to be missing.
 */
export function findHeadingForListItem(listItem: HTMLLIElement, headings: Set<HTMLHeadingElement>) {
  let heading: HTMLHeadingElement;

  const linkElement: HTMLAnchorElement | null = listItem.querySelector('a');
  heading = headings.values().find((heading) => heading.id === linkElement?.href.replace('#', ''));
  if (heading) return heading;

  heading = headings.values().find((heading) => heading.innerText === listItem.innerText);
  if (heading) return heading;

  return missingHeading;
}

/**
 * Build a Map of heading elements to an array of ListItems. Useful for looking
 * up list items for a given heading element
 */
export function mapHeadingsToListItems(
  headings: Set<HTMLHeadingElement>,
  listItems: Set<HTMLLIElement>,
  map: HeadingToListItemsMap,
) {
  [...headings, missingHeading].forEach((heading) => {
    if (map.has(heading) === false) {
      map.set(heading, []);
    }
  });

  listItems.values().forEach((listItem) => {
    const heading = findHeadingForListItem(listItem, headings);
    map.get(heading).push(listItem);
  });
}

/**
 * Create (or update) a ListItem based on a heading. If a listItem is provided,
 * update its properties to reflect the content of the heading.
 */
export function createListItemsForHeading(heading: HTMLHeadingElement, listItem?: HTMLLIElement) {
  const li: HTMLLIElement = listItem || document.createElement('li');
  li.classList.add('ams-unordered-list__item');

  if (heading.id) {
    const link = li.querySelector('a') || document.createElement('a');
    link.href = `#${heading.id}`;
    link.innerText = heading.innerText;
    li.replaceChildren(link);
  } else {
    li.innerText = heading.innerText;
  }

  return li;
}
