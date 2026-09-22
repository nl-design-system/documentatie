import { readFile } from 'node:fs/promises';
import { remark } from 'remark';

/**
 * Flatten an mdast tree to plain text: inline nodes are concatenated, block-level
 * siblings are separated by newlines, and raw HTML (e.g. `<!-- @license -->`
 * comments) is dropped.
 * @param {import('mdast').Nodes} node
 * @returns {string}
 */
export function mdastToPlainText(node) {
  switch (node.type) {
    case 'text':
    case 'inlineCode':
    case 'code':
      return node.value;
    case 'break':
      return '\n';
    case 'html':
      // Skip raw HTML such as the license/author comments at the top of each file.
      return '';
    default:
      break;
  }
  if (!('children' in node) || !Array.isArray(node.children)) {
    return '';
  }
  // Separate block-level children (list items, paragraphs) by a newline so lists
  // don't collapse into a single run-on line; keep inline children glued together.
  const blockContainers = new Set(['root', 'list', 'listItem', 'blockquote']);
  const separator = blockContainers.has(node.type) ? '\n' : '';
  return node.children.map(mdastToPlainText).join(separator);
}

/**
 * Convert a markdown string to trimmed plain text.
 * @param {string} markdown
 * @returns {string}
 */
export function markdownToText(markdown) {
  const text = mdastToPlainText(remark().parse(markdown));
  return text.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * Read a markdown file and return its content as trimmed plain text.
 * @param {string} file
 * @returns {Promise<string>}
 */
export async function readMarkdownAsText(file) {
  const markdown = await readFile(file, 'utf8');
  return markdownToText(markdown);
}
