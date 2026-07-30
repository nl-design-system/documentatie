import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { remark } from 'remark';

// Source markdown lives in the documentation package; output ships with it too.
const componentenDir = fileURLToPath(new URL('../../../docs/componenten', import.meta.url));
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * Flatten an mdast tree to plain text: inline nodes are concatenated, block-level
 * siblings are separated by newlines, and raw HTML (e.g. `<!-- @license -->`
 * comments) is dropped.
 * @param {import('mdast').Nodes} node
 * @returns {string}
 */
function mdastToPlainText(node) {
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
 * Read a markdown file and return its content as trimmed plain text.
 * @param {string} file
 * @returns {Promise<string>}
 */
async function readMarkdownAsText(file) {
  const markdown = await readFile(file, 'utf8');
  const text = mdastToPlainText(remark().parse(markdown));
  return text.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * List the immediate subdirectory names of `dir` (empty when `dir` is missing).
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function readDirNames(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

/**
 * Build the issue object for a single `_issues/<slug>` folder: metadata id/title
 * plus one key per markdown file (`solution`, `explanation`, `editor-error`, …).
 * @param {string} issueDir
 * @returns {Promise<Record<string, string>>}
 */
async function readIssue(issueDir) {
  const metadata = JSON.parse(await readFile(join(issueDir, 'metadata.json'), 'utf8'));

  const entries = await readdir(issueDir, { withFileTypes: true });
  const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

  /** @type {Record<string, string>} */
  const texts = {};
  await Promise.all(
    markdownFiles.map(async (entry) => {
      const key = basename(entry.name, '.md');
      texts[key] = await readMarkdownAsText(join(issueDir, entry.name));
    }),
  );

  return {
    id: metadata.id,
    title: metadata.title,
    ...texts,
  };
}

const componentNames = (await readDirNames(componentenDir)).sort((a, b) => a.localeCompare(b));

const components = (
  await Promise.all(
    componentNames.map(async (component) => {
      const issuesDir = join(componentenDir, component, '_issues');
      const slugs = (await readDirNames(issuesDir)).sort((a, b) => a.localeCompare(b));
      if (slugs.length === 0) {
        return null;
      }
      const issues = await Promise.all(slugs.map((slug) => readIssue(join(issuesDir, slug))));
      return { component, issues };
    }),
  )
).filter(Boolean);

const output = {
  components,
};

const totalIssues = components.reduce((total, { issues }) => total + issues.length, 0);

const outFile = join(docsDistDir, 'component-issues.json');
await mkdir(docsDistDir, { recursive: true });
await writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(
  `Wrote ${totalIssues} issues across ${components.length} components to ${relative(process.cwd(), outFile)}`,
);
