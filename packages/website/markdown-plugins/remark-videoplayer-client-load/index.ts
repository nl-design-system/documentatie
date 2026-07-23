import type { Root } from 'mdast';
import type { MdxJsxFlowElement, MdxJsxAttribute } from 'mdast-util-mdx-jsx';
import { visit } from 'unist-util-visit';

/* The <VideoPlayer /> component needs client side logic to function. In Astro
it (thus) needs the `client:load` prop. Instead of placing this burden on the
author, lets add it automatically for each instance */
export function videoplayerClientLoadPlugin() {
  return (tree: Root) => {
    visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement) => {
      if (!node.name || !node.attributes) return;

      if (node.name === 'Videoplayer' || node.name === 'VideoPlayer') {
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
      }
    });
  };
}
