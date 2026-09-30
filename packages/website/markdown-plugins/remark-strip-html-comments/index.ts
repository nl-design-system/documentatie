import type { Root } from 'mdast';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';

const isCommentOnly = (value: string) => /^<!--[\s\S]*-->$/.test(value.trim());

/**
 * Remark plugin that removes HTML comments from the document.
 *
 * Every documentation file starts with a `<!-- @license CC0-1.0 -->` comment, and
 * some carry editorial notes for the authors. Both are meant for the repository,
 * not for the HTML that ships in `@nl-design-system-unstable/documentation`.
 *
 * This has to run on the markdown (mdast) tree: `@astrojs/markdown-remark` runs
 * `rehype-raw` after the rehype plugins, so at that point a comment is still an
 * opaque `raw` node rather than a `comment` node.
 *
 * Only comment-only nodes are removed, so raw HTML like `<figure>` stays intact.
 */
export function remarkStripHtmlComments() {
  return function transform(tree: Root): void {
    visit(tree, 'html', function (node, index, parent) {
      if (!parent || index === undefined) return CONTINUE;
      if (isCommentOnly(node.value) === false) return CONTINUE;

      parent.children.splice(index, 1);
      return [SKIP, index];
    });
  };
}
