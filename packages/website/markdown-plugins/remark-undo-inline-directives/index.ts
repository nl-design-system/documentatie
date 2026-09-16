import type { Root } from 'mdast';
import type { VFile } from 'vfile';
import { visit } from 'unist-util-visit';

/**
 * Remark plugin to undo the creation of inline directives by the
 * `remarkDirective` plugin.
 * The plugin is required to make admonitions work by creating
 * `containerDirective` that the `admonitions.ts` plugin hooks into.
 * It has the downside of also creating `textDirective` and `leaveDirective`.
 * These interfere with (for example) time notations like `10:00` by treating
 * `:00` as a directive.
 *
 * This plugin reverts these directives back to the authored text as found in
 * the original markdown.
 */
export function remarkUndoInlineDirectives() {
  return (tree: Root, file: VFile) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== 'textDirective' && node.type !== 'leafDirective') return undefined;
      if (index === null || !parent || !node.position) return undefined;

      const nodeSourceStart = node.position.start.offset;
      const nodeSourceEnd = node.position.end.offset;

      const source = String(file.value).slice(nodeSourceStart, nodeSourceEnd);
      parent.children[index as number] = { type: 'text', value: source };

      return undefined;
    });
  };
}
