import type { Root } from 'hast';
import { isElement } from 'hast-util-is-element';
import { visit } from 'unist-util-visit';

const attributeByTagName = { a: 'href', img: 'src' } as const;

/**
 * Rehype plugin that turns root-relative urls into absolute urls.
 *
 * The HTML generated for `@nl-design-system-unstable/documentation` is rendered
 * outside of nldesignsystem.nl, where a link to `/richtlijnen/...` resolves to
 * nothing. The `metadata.json` of every rule already uses absolute urls, so this
 * keeps the whole artifact consistent.
 *
 * This is the opposite of `markdown-plugins/rehype-trailing-slash`, which strips
 * the origin so links on the website stay relative.
 */
export function rehypeAbsoluteUrls({ siteUrl }: { siteUrl: string }) {
  const siteURL = new URL(siteUrl);

  return function plugin() {
    return function transform(tree: Root): void {
      visit(tree, 'element', function (element) {
        for (const [tagName, attribute] of Object.entries(attributeByTagName)) {
          if (isElement(element, tagName) === false) continue;

          const value = element.properties[attribute];
          if (typeof value !== 'string' || value.startsWith('/') === false) continue;

          element.properties[attribute] = new URL(value, siteURL).href;
        }
      });
    };
  };
}
