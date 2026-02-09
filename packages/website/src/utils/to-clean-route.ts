/**
 * Create clean routes for Astro collections. Astro and Docusaurus have a
 * different method of transforming a markdown file path to a url. The Astro
 * version of the website should be a dropin replacement for the legacy
 * Docusaurus version. That means that the generated url structure should be
 * identical. This utility function does that and takes some quirks of Docusuarus
 * into account.
 *
 * Since this utility can also be used in other places then Astro, it tries to be
 * as complete as possible
 */
export function toCleanRoute(path: string) {
  return (
    path
      // Remove .md to make clean urls
      .replace('.md', '')

      // Transform README routes to index routes
      .replace(/\/readme/i, '')
  );
}
