import { visit, SKIP } from 'unist-util-visit';

/**
 * Remark plugin that removes a wrapping <div lang="en"> while keeping
 * its contents.
 * Astro does not need this element since in Astro the `lang="en"` is set based
 * on the frontmatter. When the switch to Astro is complete, these div's should
 * be removed and this plugin can be removed as well. see #4368
 */
export function remarkUnwrapDiv() {
  const tagName = 'div';
  const attributeName = 'lang';
  const attributeValue = 'en';

  function matchesAttribute(node) {
    const attrs = node.attributes ?? [];
    return attrs.some(
      (attr) => attr.type === 'mdxJsxAttribute' && attr.name === attributeName && attr.value === attributeValue,
    );
  }

  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === null) {
        return undefined;
      }

      const isMatch =
        (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
        node.name === tagName &&
        matchesAttribute(node);

      if (!isMatch) {
        return undefined;
      }

      parent.children.splice(index, 1, ...(node.children ?? []));
      return [SKIP, index]; // re-visit this index in case of nested wrapped divs
    });
  };
}
