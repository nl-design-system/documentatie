import type { Root } from 'mdast';
import type { MdxJsxFlowElement, MdxJsxAttribute } from 'mdast-util-mdx-jsx';
import { visit } from 'unist-util-visit';

/* Some components need client side logic to function. In Astro they need the
`client:load` prop. Instead of placing this burden on the author, add it
automatically for each instance. Pass the list of component names that need
hydration. */
export function clientLoadPlugin(componentNames: string[]) {
  const nameSet = new Set(componentNames);
  return function plugin() {
    return (tree: Root) => {
      visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement) => {
        if (!node.name || !node.attributes) return;

        if (!nameSet.has(node.name)) return;

        // Check if client:load attribute already exists
        const hasClientLoad = node.attributes.some(
          (attr): attr is MdxJsxAttribute => attr.type === 'mdxJsxAttribute' && attr.name === 'client:load',
        );

        // Add client:load attribute if not present
        if (!hasClientLoad) {
          const newAttr: MdxJsxAttribute = {
            type: 'mdxJsxAttribute',
            name: 'client:load',
            value: null,
          };
          node.attributes.push(newAttr);
        }
      });
    };
  };
}
