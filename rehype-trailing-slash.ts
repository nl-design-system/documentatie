import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

// Define the type for the element node
interface ElementNode extends Node {
  tagName: string;
  properties: {
    href?: string;
  };
}

const isHttpProtocol = (url: URL) => url.protocol === 'https:' || url.protocol === 'http:';

const isExternalLink = (url: URL, siteURL: URL) => url.hostname !== siteURL.hostname;

/**
 * Append a trailing slash to the pathname portion of the href.
 * This is done by first building an URL object. With the URL object, the
 * pathname can be modified separate from the hash or search parts of the url.
 * Later the origin is removed to preserve the link as written
 */
export function addTrailingSlash(href: string, options: { siteURL: URL; stripOrigin?: boolean }): string {
  const url = new URL(href, options.siteURL);

  // Leave external links or links to other protocols untouched
  if (isHttpProtocol(url) === false || isExternalLink(url, options.siteURL)) return href;

  // Append the slash
  if (!url.pathname.endsWith('/')) {
    url.pathname += '/';
  }

  let newHref = url.toString();

  // Remove the origin from the newHref if it was not present on the original
  // href
  if (href.startsWith(options.siteURL.origin) === false || options.stripOrigin) {
    newHref = newHref.replace(options.siteURL.origin, '');
  }

  // If the original href is an relative pathname, remove the leading slash
  // added by the new URL() call
  if (href.startsWith(options.siteURL.origin) === false && href.startsWith('/') === false) {
    newHref = newHref.split('').toSpliced(0, 1).join('');
  }

  return newHref;
}

/**
 * Rehype plugin looping over every link and appending a trailing slash if it
 * is an internal link.
 */
export function addTrailingSlashPlugin(options: { siteUrl: string; stripOrigin?: boolean }) {
  const { siteUrl, ..._options } = options;
  const siteURL = new URL(siteUrl);

  return (tree: Node) => {
    visit(tree, 'element', (node: ElementNode) => {
      if (node.tagName === 'a' && node?.properties?.href) {
        node.properties.href = addTrailingSlash(node.properties.href, { siteURL, ..._options });
      }
    });
  };
}
