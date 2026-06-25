import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';
import { blockquote } from './blockquote';
import { code } from './code';
import { emphasis } from './emphasis';
import { figure } from './figure';
import { heading } from './heading';
import { hr } from './hr';
import { image } from './image';
import { link } from './link';
import { orderedList } from './ordered-list';
import { paragraph } from './paragraph';
import { pre } from './pre';
import { strong } from './strong';
import { unorderedList } from './unordered-list';
import { isElement } from 'hast-util-is-element';

/**
 * A rehype plugin to transform HTML generated from Markdown so that it uses
 * NL Design System components
 *
 * Rehype does not parse HTML markup in markdown files. For HTML elements in
 * Markdown that need transformation (like `<figure>`), trigger this plugin
 * in `packages/website/markdown-plugins/remark-nlds-components/index.ts` also
 */
export function nldsComponentsPlugin() {
  return function transform(tree: Root): void {
    visit(tree, 'element', function (node, _index, parent) {
      if (isElement(node) === false) return;

      blockquote(node);
      code(node, parent as Element);
      emphasis(node);
      figure(node);
      heading(node);
      hr(node);
      image(node);
      link(node);
      orderedList(node);
      paragraph(node);
      pre(node);
      strong(node);
      unorderedList(node);
    });
  };
}
