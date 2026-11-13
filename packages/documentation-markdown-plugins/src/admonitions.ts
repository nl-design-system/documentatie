import type { Root } from 'mdast';
import type {} from 'mdast-util-to-hast';
import type {} from 'remark-directive';
import { visit } from 'unist-util-visit';

const TYPES = { caution: 'caution', danger: 'danger', info: 'info', note: 'note', tip: 'tip', warning: 'warning' };
const MAP = {
  [TYPES.caution]: 'warning',
  [TYPES.danger]: 'error',
  [TYPES.info]: 'info',
  [TYPES.note]: 'info',
  [TYPES.tip]: 'success',
  [TYPES.warning]: 'warning',
};

/**
 * Remark plugin to be used in combination with `remark-directive`. Transforms
 * the admonition into an Utrecht Note
 */
export function remarkAdmonitions() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      if (!Object.hasOwn(TYPES, node.name)) return;

      const data = node.data || (node.data = {});
      data.hName = 'div';
      data.hProperties = {
        ...node.attributes,
        className: ['utrecht-note', `utrecht-note--${MAP[node.name]}`],
      };

      const label = node.children[0];
      if (label?.type === 'paragraph' && label.data?.directiveLabel) {
        label.data.hName = 'strong';
      }
    });
  };
}
