import type { Heading, Root } from 'mdast';
import type { VFile } from 'vfile';

const isHeading = (object: { type?: string; depth?: number }): object is Heading => {
  return object?.type === 'heading' && object.depth === 1;
};

export function removeH1FromMarkdown({ filter }: { filter?: string } = {}) {
  return function plugin() {
    return function (tree: Root, file: VFile) {
      if (filter && file?.dirname?.includes(filter) === false) return;

      tree.children = tree.children.filter((child) => isHeading(child) === false);
    };
  };
}
