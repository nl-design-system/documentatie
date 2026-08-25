/**
 * This function serialises the `navigationTree` in such a way that it can be
 * send to the client. The original tree has circular references to find the
 * parent element during the construction of the tree. The client does not need
 * that information and thus it can be removed.
 */
export function serialiseNavigationTree(navigationTree: object | undefined) {
  const stripParent = (key: string, value: unknown) => (key === 'parent' ? undefined : value);

  try {
    return JSON.parse(JSON.stringify(navigationTree, stripParent));
  } catch {
    return [];
  }
}
