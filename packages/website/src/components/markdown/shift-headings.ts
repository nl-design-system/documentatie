import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface ShiftHeadingsProps {
  headingLevel?: HeadingLevel;
  omitH1?: boolean;
}

export function shiftHeadings({ headingLevel = 1, omitH1 }: ShiftHeadingsProps) {
  return () => {
    return (tree: Root) => {
      if (omitH1) {
        tree.children = tree.children.filter((child) => !(child.type === 'heading' && child.depth === 1));
      }

      if (headingLevel !== 1) {
        visit(tree, 'heading', (node, index, parent) => {
          if (!parent || index === null) {
            return undefined;
          }

          node.depth = Math.min(node.depth + (headingLevel - 1), 6) as HeadingLevel;

          return undefined;
        });
      }
    };
  };
}
