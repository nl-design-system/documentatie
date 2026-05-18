import { relative, resolve, sep } from 'node:path';
import { readdir } from 'node:fs/promises';
import { getAllCollections } from '../content.config';
import type { Dirent } from 'node:fs';
import { sortItems } from './sort-items';
export { getBreadcrumbsForElement } from './get-breadcrumbs-for-element';
export { getMainNavigation } from './get-main-navigation';
export { getNavigationElement } from './get-navigation-element';

/**
 * An item in a navigation tree. The item references an Content Collection ID.
 */
export interface NavigationItem {
  /** The label of the item to display to the user */
  label?: string;

  /** The description of the markdown frontmatter for this item */
  description?: string;

  /** The Astro Content Collection ID of the item */
  id?: string;

  /** The filepath of the source file (`.md` or `.mdx`) this item links to */
  filePath?: string;

  /** The parent `NavigationGroup` this item is nested under. */
  parent?: NavigationGroup;

  /** The href to the rendered page */
  href?: string;

  /** The position this item should take within a NavigationGroup items list */
  order?: number;
}

/**
 * A group of NavigationItems. Used to group various navigation items together.
 * Designed to represent a subtree of the `docs/` folder. Each item of the
 * group is either a markdown file or an other group.
 */
export interface NavigationGroup {
  /** The label of the group to display to the user */
  label?: string;

  /** The items in the group */
  items: (NavigationItem | NavigationGroup | Promise<NavigationItem> | Promise<NavigationGroup>)[];

  /**
   * An index page for the group. Usually the index.md in the folder. Useful
   * as an overview page. If the `index` item is a file within the folder, it
   * is removed from the `items` list when the items are generated based on
   * the `dirName`.
   */
  index?: NavigationItem;

  /** The href to the index page for this group */
  href?: string;

  /** The directory representing the group */
  filePath?: string;

  /** Specific file paths to ignore. Paths are _relative to the filePath_ */
  ignoredFiles?: string[];

  /** The parent `NavigationGroup` this group is nested under. */
  parent?: NavigationGroup;

  /** The position this group should take within a NavigationGroup items list */
  order?: number;
}

export type NavigationElement = NavigationItem | NavigationGroup;
export type NavigationElementOrdered = NavigationElement & { order: NonNullable<NavigationElement['order']> };

/**
 * A flat list of all navigation elements, filled when the `navigation` promise
 * is resolved
 */
export const navigationElements: NavigationElement[] = [];

type NavigationItemInput =
  | string
  | (Partial<Omit<NavigationItem, 'id'>> & ({ label: string; href: string } | { label?: string; href: never }));

/**
 * Create a `NavigationItem` object.
 *
 * A `NavigationItem` is an reference to a page on the website. Provide a
 * filepath to a markdown file or an configuration object. When a filepath is
 * provided, this markdown file should be available in Astro as part of a
 * Content Collection.
 *
 * @see {@link ./README.md} for further information.
 *
 * @example
 * ```js
 * navigationItem("docs/handboek/estafettemodel.mdx");
 * // or
 * navigationItem({ label: "Home", href: "/" });
 * ```
 */
export async function navigationItem(input: NavigationItemInput): Promise<NavigationItem> {
  const _filePath = typeof input === 'string' ? input : input.filePath;
  const options = typeof input === 'string' ? undefined : input;

  const entries = await getAllCollections();
  const entry = entries.find(
    (entry) =>
      (_filePath && entry.filePath?.endsWith(_filePath)) || // relative file path
      entry.filePath?.endsWith(`${_filePath}.mdx`) || // file path based on docusaurus style id
      entry.filePath?.endsWith(`${_filePath}.md`), // file path based on docusaurus style id
  );

  if (!entry && _filePath) throw new Error(`Could not find entry with filePath: ${_filePath}`);

  const label = options?.label || entry?.data?.title_sm || entry?.data.title;
  if (!label) throw new Error(`No label provided for ${_filePath}`);

  const item: NavigationItem = {
    id: entry?.id,
    description: entry?.data.description,
    label,
    filePath: entry?.filePath,
    parent: options?.parent,
    href: `/${entry?.id || options?.href}/`.replaceAll(/\/{2,}/g, '/'),
    order: entry?.data?.navigation_order,
  };

  // Unlisted items are allowd to be turned into an `NavigationItem`, but
  // should not end up in
  if (!entry?.data?.unlisted) {
    navigationElements.push(item);
  }

  return item;
}

type NavigationGroupOptions = Partial<Pick<NavigationGroup, 'label' | 'filePath' | 'ignoredFiles' | 'items'>> & {
  index?: Promise<NavigationItem>;
};

/**
 * Create a `NavigationGroup` object.
 *
 * A `NavigationGroup` is a reference to a folder relative to the `docs/`
 * folder. A `NavigationGroup` collects its items either via a the `items`
 * field or the `filePath`. When provided with a `filePath` it will build a
 * navigation tree starting from the `filePath`. The `filePath` needs to be an
 * folder.
 *
 * @see {@link ./README.md} for further information on configuration the options
 *
 * @example
 * ```js
 * navigationGroup({ filePath: 'docs/richtlijnen' });
 * // or
 * navigationGroup({
 *   label: 'Handboek',
 *   items: [
 *     navigationItem('docs/handboek/introductie.md'),
 *     ...
 *   ]
 * });
 * ```
 */
export async function navigationGroup(options: NavigationGroupOptions): Promise<NavigationGroup> {
  // Resolve provided item promises before continueing to ensure all data to
  // be available
  const items = await Promise.all(options?.items || []);

  let files: Dirent[];
  let folderName: string | undefined;
  const indexOptions = await options?.index;
  let indexFile: NavigationItem | undefined;
  let indexOverview: NavigationItem | undefined;

  if (options.filePath) {
    const baseDir = resolve('../../');
    const targetDir = resolve(baseDir, options.filePath);
    if (!targetDir.startsWith(baseDir + sep)) throw new Error('Path traversal detected');

    folderName = options.filePath.split('/').at(-1);
    files = (await readdir(targetDir, { withFileTypes: true }))
      .filter((file) => file.name.startsWith('_') === false)
      .filter(
        (file) =>
          file.name.endsWith('.md') || file.name.endsWith('.mdx') || file.name === 'index.json' || file.isDirectory(),
      );

    // Loop over all files in the directory
    await Promise.all(
      files.map(async (file) => {
        if (options.ignoredFiles?.includes(file.name)) {
          return;
        }

        if (file.isFile()) {
          const filePath = relative('.', `${file.parentPath}/${file.name}`);
          const contentCollectionEntry = await getEntryWithFilepath(filePath);

          // Treat index.md(x) files as the group index
          if (/index.mdx?$/i.test(file.name)) {
            indexFile = await navigationItem(filePath);
          }

          // If an index file is provided in the options, ignore it as sub item
          else if (indexOptions?.filePath?.endsWith(file.name)) {
            return;
          }

          // Generate an overview page based on a config file
          else if (file.name === 'index.json') {
            indexOverview = await navigationItem(filePath);
          }

          // If the entry is marked as `unlisted`, ignore it
          else if (contentCollectionEntry?.data.unlisted) {
            return;
          }

          // Add each regular file as navigation item
          else {
            items.push(await navigationItem(filePath));
          }
        }

        // Generate and add each subdirectory as new group. But only when the
        // subdirectory has navigation items of its own
        if (file.isDirectory()) {
          const group = await navigationGroup({ filePath: `${options.filePath}/${file.name}` });
          if (group.items.length || group.index) {
            items.push(group);
          }
        }
      }),
    );
  }

  // Sort items alphabetically based on their label
  const sortedItems = options.filePath ? sortItems(items) : items;

  const index = indexOptions || indexFile || indexOverview;

  // Resulting NavigationGroup to be returned
  const group: NavigationGroup = {
    label: options.label || index?.label || toTitleCase(folderName) || 'unknown',
    items: sortedItems,
    index,
    filePath: options.filePath,
    href: index?.href,
    order: index?.order,
  };

  // Add the resulting NavigationGroup to each item as a parent
  group.items.forEach(async (item) => {
    const _item = await item;
    _item.parent = group;
  });

  if (index) {
    index.parent = group;
  }

  // Add the group to the navigationElements list
  if (group.items.length) {
    navigationElements.push(group);
  }

  // Return the group for consumption
  return group;
}

async function getEntryWithFilepath(filePath: string) {
  const entries = await getAllCollections();
  return entries.find((entry) => filePath && entry.filePath?.endsWith(filePath));
}

function toTitleCase(input: string | undefined): string | undefined {
  if (input === undefined) return input;
  const [firstLetter, ...rest] = [...input];
  return String(`${firstLetter.toUpperCase()}${rest.join('')}`).replaceAll('-', ' ');
}
