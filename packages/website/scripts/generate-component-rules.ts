import { glob, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readMarkdownAsHtml } from './lib/markdown-to-html';

// Source markdown lives in the documentation package; output ships with it too.
const componentenDir = fileURLToPath(new URL('../../../docs/componenten', import.meta.url));
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * Turn a kebab-case directory name into a human-readable label.
 * `font-family` -> `Font family`.
 */
function humanize(name: string): string {
  const spaced = name.replaceAll('-', ' ');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/**
 * List the immediate subdirectory names of `dir` (empty when `dir` is missing).
 */
async function readDirNames(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

/**
 * List the rule slugs inside a `_rules` folder, relative to that folder. A rule is
 * any directory containing a `metadata.json`, at any depth: rules can be grouped in
 * a subfolder (`heading1/noH1`) as well as live directly in `_rules` (`contrast`).
 */
async function readRuleSlugs(rulesDir: string): Promise<string[]> {
  const slugs: string[] = [];
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

// Keys the rule object itself uses. A markdown file may not claim one of these,
// because the markdown keys are spread last and would overwrite the metadata.
const reservedKeys = new Set(['subject', 'id', 'title']);

/**
 * Build the rule object for a single `_rules/<slug>` folder: a reference to its
 * `subject`, the metadata id/title, plus one key per markdown file (`solution`,
 * `explanation`, `editor-error`, …). Every markdown file is rendered to HTML that
 * uses NL Design System components.
 *
 * @param subject id of the subject this rule belongs to
 */
async function readRule(ruleDir: string, subject: string): Promise<Record<string, string>> {
  const [metadataText, entries] = await Promise.all([
    readFile(join(ruleDir, 'metadata.json'), 'utf8'),
    readdir(ruleDir, { withFileTypes: true }),
  ]);
  const metadata = JSON.parse(metadataText);

  // Sorted so the key order of the generated file is the same on every run.
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name));

  const rendered = await Promise.all(
    markdownFiles.map(async (entry) => {
      const key = basename(entry.name, '.md');
      if (reservedKeys.has(key)) {
        throw new Error(`${join(ruleDir, entry.name)} uses the reserved name "${key}", rename the file`);
      }
      return [key, await readMarkdownAsHtml(join(ruleDir, entry.name))] as const;
    }),
  );

  return {
    subject,
    id: metadata.id,
    title: metadata.title,
    ...Object.fromEntries(rendered),
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
).filter((group) => group !== null);

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
