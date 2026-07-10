import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import prettierSync from '@prettier/sync';

/**
 * The Canvas component used in Docusaurus depends on a function providing the
 * code as children. In Astro this is documented to not work.
 * This remark plugin removes the arrow syntax before parsing the rest of the
 * children. This is enough for Astro to work. When Docusaurus is no longer
 * used, the source files can be updated and this plugin can be removed
 */
export function remarkCanvasFix() {
  return async (tree: Root) => {
    visit(tree, 'mdxFlowExpression', (node, _, parent) => {
      if (parent.type !== 'mdxJsxFlowElement' || parent.name !== 'Canvas') return;

      if (node.value.startsWith('() => ')) {
        const code = node.value
          .replace(/\(\)\s=>\s\(?/, '')
          .replace(/\)$/, '')
          .replaceAll(/\n/g, '')
          .trim();

        const styleTransformedCode = styleObjectToString(code);

        const formattedCode = prettierSync.format(styleTransformedCode, { parser: 'babel' });

        node.value = formattedCode
          .replaceAll(/;$/gm, '')
          .replace('<>', '')
          .replace('</>', '')
          .replaceAll('{" "}', ' ')
          .replaceAll(/^\s+$\n/gm, '\n');

        // @ts-expect-error - The type html is not assignable to mdxFlowExpression. Which is true, but we want to force it to
        node.type = 'html';
      }
    });
  };
}

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

    replacement = replacement.replaceAll(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}-${p2}`.toLowerCase());

    output = output.replace(match, replacement);
  });

  return output;
}
