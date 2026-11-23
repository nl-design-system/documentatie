import type { Root } from 'mdast';
import type {} from 'mdast-util-mdx-expression';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { VFile } from 'vfile';
import prettierSync from '@prettier/sync';
import { visit } from 'unist-util-visit';

/**
 * The Canvas component used in Docusaurus depends on a function providing the
 * code as children. In Astro this is documented to not work.
 * This remark plugin removes the arrow syntax before parsing the rest of the
 * children. This is enough for Astro to work. When Docusaurus is no longer
 * used, the source files can be updated and this plugin can be removed
 */
export function remarkCanvasFix() {
  return async (tree: Root, file: VFile) => {
    visit(tree, 'mdxJsxFlowElement', (node, _, parent) => {
      if (node.name !== 'Canvas') return;
      if (!parent || parent.type !== 'mdxJsxFlowElement' || parent.name !== 'Guideline') return;

      const parentNode = parent as MdxJsxFlowElement;

      if (
        parentNode.attributes.some(
          (attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'appearance' && attr.value === 'do',
        )
      ) {
        node.attributes.push({
          name: 'copyCode',
          type: 'mdxJsxAttribute',
          value: 'allow',
        });
      }
    });

    visit(tree, (node, _, parent) => {
      if (!parent || parent.type !== 'mdxJsxFlowElement' || parent.name !== 'Canvas') return;

      const parentNode = parent;

      if (node.position) {
        const source = String(file.value).slice(node.position.start.offset, node.position.end.offset);

        const formattedCodeSmall = prettierSync
          .format(source, {
            printWidth: 20,
            parser: 'typescript',
            singleAttributePerLine: true,
          })
          .replace(/;\n$/, '');
        const formattedCodeMedium = prettierSync
          .format(source, {
            printWidth: 50,
            parser: 'typescript',
            singleAttributePerLine: true,
          })
          .replace(/;\n$/, '');
        const formattedCodeLarge = prettierSync
          .format(source, {
            printWidth: 75,
            parser: 'typescript',
            singleAttributePerLine: true,
          })
          .replace(/;\n$/, '');

        const codeAttr: MdxJsxAttribute = {
          name: 'code',
          type: 'mdxJsxAttribute',
          value: {
            data: {
              estree: {
                body: [
                  {
                    expression: {
                      elements: [formattedCodeSmall, formattedCodeMedium, formattedCodeLarge].map((code) => ({
                        raw: JSON.stringify(code),
                        type: 'Literal',
                        value: code,
                      })),
                      type: 'ArrayExpression',
                    },
                    type: 'ExpressionStatement',
                  },
                ],
                sourceType: 'module',
                type: 'Program',
              },
            },
            type: 'mdxJsxAttributeValueExpression',
            value: `[${[formattedCodeSmall, formattedCodeMedium, formattedCodeLarge]
              .map((code) => JSON.stringify(code))
              .join(', ')}]`,
          },
        };

        // only if no existing `code` attribute is present create a new one
        if (parentNode.attributes.some((attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'code') === false) {
          parentNode.attributes.push(codeAttr);
        }
      }
    });
  };
}
