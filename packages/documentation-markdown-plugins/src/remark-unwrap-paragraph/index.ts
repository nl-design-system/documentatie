import type { Parents, Root } from 'mdast';
import type {} from 'mdast-util-mdx-jsx';
import { visit, SKIP } from 'unist-util-visit';

/**
 * Remark plugin that unwraps `paragraph` nodes inside a `<Paragraph>` JSX element.
 * MDX processes text content inside JSX elements as markdown, wrapping it in `paragraph`
 * nodes. When the `Paragraph` component renders its own `<p>` element, this results in
 * nested `<p>` tags (invalid HTML). This plugin flattens those `paragraph` children so
 * the text flows directly into the component's `<p>`.
 */
export function remarkUnwrapParagraph() {
  const tagNames = ['Paragraph', 'Link'];

  function matchesParent(parent: Parents) {
    return (
      (parent.type === 'mdxJsxFlowElement' || parent.type === 'mdxJsxTextElement') &&
      parent.name !== null &&
      tagNames.includes(parent.name)
    );
  }

  return (tree: Root) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) {
        return undefined;
      }

      const isMatch = node.type === 'paragraph' && matchesParent(parent);

      if (!isMatch) {
        return undefined;
      }

      parent.children.splice(index, 1, ...(node.children ?? []));
      return [SKIP, index];
    });
  };
}
