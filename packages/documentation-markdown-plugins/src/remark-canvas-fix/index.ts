import type { Root } from 'mdast';
import type {} from 'mdast-util-mdx-expression';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { VFile } from 'vfile';
import prettierSync from '@prettier/sync';
import { transformSync } from 'esbuild';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { visit } from 'unist-util-visit';

const sizes = [20, 50, 75];

/**
 * Turns the JSX children of a Canvas into HTML, one for each size.
 * When a component or variable is used in the source, the `html` format will
 * fail. Fall back to `typescript` formatting which uses the authored MDX as
 * source.
 */
export const canvasCode = (sources: string[]): { code: string[]; isFallback: boolean } => {
  try {
    const html = jsxToHtml(sources.join('\n'));
    return { code: sizes.map((width) => format(html, 'html', width)), isFallback: false };
  } catch {
    return {
      code: sizes.map((width) => sources.map((source) => format(source, 'typescript', width)).join('\n')),
      isFallback: true,
    };
  }
};

/**
 * Format a string with either the `html` or `typescript` parser from Prettier.
 * When the parser is `html`, use `singleQuote: true`, this keeps `'` in
 * `style` attributes, the `typescript` parsers renders `&quot;`
 */
const format = (code: string, parser: 'html' | 'typescript', printWidth: number) =>
  prettierSync
    .format(code, {
      printWidth,
      htmlWhitespaceSensitivity: 'ignore',
      parser,
      singleAttributePerLine: true,
      singleQuote: parser === 'html',
    })
    .replace(/;?\n$/, '');

/**
 * Transform JSX to HTML via `esbuild`. That transforms `style={{...}}`
 * attributes and other JSX artifacts to normal HTML
 */
const jsxToHtml = (source: string): string => {
  const { code } = transformSync(`<>${source}</>`, {
    jsx: 'transform',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    loader: 'jsx',
  });
  // The `code` can only come from authored MDX
  // eslint-disable-next-line no-new-func
  const element = new Function('h', 'Fragment', `return ${code}`)(createElement, Fragment);
  // React escapes `'`, which is not needed because it always quotes attributes with `"`
  return renderToStaticMarkup(element).replaceAll('&#x27;', "'");
};

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

    visit(tree, 'mdxJsxFlowElement', (node) => {
      if (node.name !== 'Canvas') return;

      // Use existing `code` attribute when present
      if (node.attributes.some((attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'code')) return;

      const sources = node.children.flatMap((child) =>
        child.position ? [String(file.value).slice(child.position.start.offset, child.position.end.offset)] : [],
      );
      if (sources.length === 0) return;

      const { code, isFallback } = canvasCode(sources);
      if (isFallback) file.message('Canvas children could not be rendered to HTML, showing JSX instead', node);

      const codeAttr: MdxJsxAttribute = {
        name: 'code',
        type: 'mdxJsxAttribute',
        value: {
          data: {
            estree: {
              body: [
                {
                  expression: {
                    elements: code.map((value) => ({
                      raw: JSON.stringify(value),
                      type: 'Literal',
                      value,
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
          value: `[${code.map((value) => JSON.stringify(value)).join(', ')}]`,
        },
      };

      node.attributes.push(codeAttr);
    });
  };
}
