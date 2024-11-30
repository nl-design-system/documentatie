export const resolveUrl = (from: string, to: string): string => {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://pathname/'));
  if (resolvedUrl.protocol === 'resolve:') {
    const { pathname, search, hash } = new URL(to, new URL(from, 'http://example.com/'));
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
};
