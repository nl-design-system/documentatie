import { glob, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readMarkdownAsText } from './lib/markdown-to-text.mjs';

// Source markdown lives in the documentation package; output ships with it too.
const componentenDir = fileURLToPath(new URL('../../../docs/componenten', import.meta.url));
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * Turn a kebab-case directory name into a human-readable label.
 * `font-family` -> `Font family`.
 * @param {string} name
 * @returns {string}
 */
function humanize(name) {
  const spaced = name.replace(/-/g, ' ');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
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
 * List the rule slugs inside a `_rules` folder, relative to that folder. A rule is
 * any directory containing a `metadata.json`, at any depth: rules can be grouped in
 * a subfolder (`heading1/noH1`) as well as live directly in `_rules` (`contrast`).
 * @param {string} rulesDir
 * @returns {Promise<string[]>}
 */
async function readRuleSlugs(rulesDir) {
  /** @type {string[]} */
  const slugs = [];
  try {
    for await (const relPath of glob('**/metadata.json', { cwd: rulesDir })) {
      slugs.push(dirname(relPath));
    }
  } catch {
    // No `_rules` folder for this component.
    return [];
  }
  return slugs.sort((a, b) => a.localeCompare(b));
}

/**
 * Build the rule object for a single `_rules/<slug>` folder: a reference to its
 * `subject`, the metadata id/title, plus one key per markdown file (`solution`,
 * `explanation`, `editor-error`, …).
 * @param {string} ruleDir
 * @param {string} subject id of the subject this rule belongs to
 * @returns {Promise<Record<string, string>>}
 */
async function readRule(ruleDir, subject) {
  const metadata = JSON.parse(await readFile(join(ruleDir, 'metadata.json'), 'utf8'));

  const entries = await readdir(ruleDir, { withFileTypes: true });
  const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

  /** @type {Record<string, string>} */
  const texts = {};
  await Promise.all(
    markdownFiles.map(async (entry) => {
      const key = basename(entry.name, '.md');
      texts[key] = await readMarkdownAsText(join(ruleDir, entry.name));
    }),
  );

  return {
    subject,
    id: metadata.id,
    title: metadata.title,
    ...texts,
  };
}

const componentNames = (await readDirNames(componentenDir)).sort((a, b) => a.localeCompare(b));

// Each component is a `subject`; the `type` field keeps the format open so other
// kinds of subjects (templates, guidelines, …) can be added later.
const subjectGroups = (
  await Promise.all(
    componentNames.map(async (component) => {
      const rulesDir = join(componentenDir, component, '_rules');
      const slugs = await readRuleSlugs(rulesDir);
      if (slugs.length === 0) {
        return null;
      }
      const rules = await Promise.all(slugs.map((slug) => readRule(join(rulesDir, slug), component)));
      return {
        subject: { id: component, label: humanize(component), type: 'component' },
        rules,
      };
    }),
  )
).filter(Boolean);

const output = {
  subjects: subjectGroups.map((group) => group.subject),
  rules: subjectGroups.flatMap((group) => group.rules),
};

const outFile = join(docsDistDir, 'component-rules.json');
await mkdir(docsDistDir, { recursive: true });
await writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(
  `Wrote ${output.rules.length} rules across ${output.subjects.length} subjects to ${relative(process.cwd(), outFile)}`,
);
