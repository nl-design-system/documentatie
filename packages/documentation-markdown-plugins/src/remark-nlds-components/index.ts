import type { Root, Html } from 'mdast';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { nldsComponentsPlugin as nldsComponentsRehypePlugin } from '../rehype-nlds-components/index.ts';

// This plugin transforms HTML blocks in markdown files into NL Design System
// components.
// HTML Blocks are ignored by the remark-rehype plugin of Astro, so we need to
// force transformation with a custom plugin
export function nldsComponentsPlugin() {
  return (tree: Root) => {
    visit(tree, 'html', (node: Html) => {
      const htmlContent = node.value.trim();

      // Find <figure> elements and transform the node
      if (htmlContent.startsWith('<figure')) {
        runRehypePluginOnNode(node);
      }
    });
  };
}

function runRehypePluginOnNode(node: Html) {
  const result = unified()
    .use(rehypeParse, { fragment: true })
    .use(nldsComponentsRehypePlugin)
    .use(rehypeStringify)
    .processSync(node.value);

  node.value = String(result);
}
