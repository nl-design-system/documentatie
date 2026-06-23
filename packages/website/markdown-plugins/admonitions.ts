import { visit } from 'unist-util-visit';

const TYPES = { tip: 'tip', note: 'note', caution: 'caution', danger: 'danger', warning: 'warning' };
const MAP = {
  [TYPES.tip]: 'ok',
  [TYPES.note]: 'info',
  [TYPES.danger]: 'error',
  [TYPES.caution]: 'warning',
  [TYPES.warning]: 'warning',
};

/**
 * Remark plugin to be used in combination with `remark-directive`. Transforms
 * the admonition into an Utrecht Spotlight Section
 */
export function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      if (!TYPES[node.name]) return;

      const data = node.data || (node.data = {});
      data.hName = 'div';
      data.hProperties = {
        className: ['utrecht-spotlight-section', `utrecht-spotlight-section--${MAP[node.name]}`],
      };

      if (node.children[0]?.data?.directiveLabel) {
        node.children[0].data.hName = 'strong';
      }
    });
  };
}
