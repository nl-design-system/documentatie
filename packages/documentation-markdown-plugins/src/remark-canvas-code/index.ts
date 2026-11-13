import type { Code, Root } from 'mdast';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { VFile } from 'vfile';
import { visit } from 'unist-util-visit';

/**
 * Canvas accepts a `code` prop. But for authors it is easier to write in
 * markdown. This plugin converts a markdown code fence into the `code` prop.
 * The language of the codefence is used as `language` prop
 */
export function remarkCanvasCode() {
  return (tree: Root, file: VFile) => {
    visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement) => {
      if (node.name !== 'Canvas') return;

      const hasAttribute = (name: string) =>
        node.attributes.some((attr) => attr.type === 'mdxJsxAttribute' && attr.name === name);

      const fence = node.children.find((child): child is Code => child.type === 'code');
      if (!fence) {
        // Without blank lines around the code block, prettier formats it as JSX and it stops being a code block
        if (!hasAttribute('code'))
          file.fail('`<Canvas>` needs a code block, with a blank line before and after it', node);
        return;
      }

      if (hasAttribute('code')) {
        file.fail('`<Canvas>` has both a `code` attribute and a code block, use one of them', fence);
      }

      const attributes: MdxJsxAttribute[] = [{ name: 'code', type: 'mdxJsxAttribute', value: fence.value }];

      if (!hasAttribute('language')) {
        if (!fence.lang) file.fail('Add a language to the code block in `<Canvas>`, e.g. ```html', fence);
        attributes.push({ name: 'language', type: 'mdxJsxAttribute', value: fence.lang });
      }

      node.attributes.push(...attributes);
      node.children = [];
    });
  };
}
