import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import prettierSync from '@prettier/sync';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';

/**
 * The Canvas component used in Docusaurus depends on a function providing the
 * code as children. In Astro this is documented to not work.
 * This remark plugin removes the arrow syntax before parsing the rest of the
 * children. This is enough for Astro to work. When Docusaurus is no longer
 * used, the source files can be updated and this plugin can be removed
 */
export function remarkCanvasFix() {
  return async (tree: Root) => {
    visit(tree, 'mdxJsxFlowElement', (node, _, parent) => {
      if (node.name !== 'Canvas' && parent.name !== 'Guideline') return;

      const parentNode = parent as MdxJsxFlowElement;

      if (
        parentNode.attributes.some(
          (attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'appearance' && attr.value === 'do',
        )
      ) {
        node.attributes.push({
          type: 'mdxJsxAttribute',
          name: 'copyCode',
          value: 'allow',
        });
      }
    });

    visit(tree, 'mdxFlowExpression', (node, _, parent) => {
      if (parent.type !== 'mdxJsxFlowElement' || parent.name !== 'Canvas') return;

      const parentNode = parent as MdxJsxFlowElement;

      if (node.value.startsWith('() => ')) {
        const code = node.value
          .replace(/\(\)\s=>\s\(?/, '') // remove the arrow function from the string
          .replace(/\)$/, '') // remove the closing `)` of the arrow function
          .replaceAll(/\n/g, '') // remove newlines, prettier will reformat
          .replaceAll(/\bhtmlFor=/g, 'for=') // replace jsx style attribute name `htmlFor` with `for`
          .replaceAll(/\bclassName=/g, 'class=') // replace jsx style attribute name `className` with `class`
          .replaceAll('<>', '') // remove jsx fragment wrapper start
          .replaceAll('</>', '') // remove jsx fragment wrapper end
          .trim();

        const styleTransformedCode = styleObjectToString(code);

        const formattedCode = prettierSync
          .format(styleTransformedCode, {
            parser: 'html',
            singleAttributePerLine: true,
            embeddedLanguageFormatting: 'off',
            htmlWhitespaceSensitivity: 'ignore',
          })
          // complex regex to remove multiline string literals in JSX
          .replaceAll(/\{\s*"(?:[^"\\]|\\.)*"\s*\}/g, (m) =>
            m
              .replace(/^\{\s*"/, '')
              .replace(/"\s*\}$/, '')
              .replaceAll('\\"', '"')
              .replaceAll("\\'", "'"),
          );

        const codeAttr: MdxJsxAttribute = {
          type: 'mdxJsxAttribute',
          name: 'code',
          value: formattedCode,
        };

        // only if no existing `code` attribute is present create a new one
        if (parentNode.attributes.some((attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'code') === false) {
          parentNode.attributes.push(codeAttr);
        }
      }
    });
  };
}

// Transform JSX (multiline) style attributes into html style attributes
function styleObjectToString(input: string) {
  let output = input;
  const matches = output.matchAll(/style=(\{\{.+?\}\})/g);
  [...matches].forEach(([, match]) => {
    let replacement = match
      .replaceAll('("', "('")
      .replaceAll('")', "')")
      .replaceAll('"', '')
      .replaceAll(',', ';')
      .replace('{{', '"')
      .replace('}}', '"');

    // camel case to snake case
    replacement = replacement.replaceAll(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}-${p2}`.toLowerCase());

    // collapse double spaces into a single space
    replacement = replacement.replaceAll(/\s+/g, ' ').trim();

    output = output.replace(match, replacement);
  });

  return output;
}
