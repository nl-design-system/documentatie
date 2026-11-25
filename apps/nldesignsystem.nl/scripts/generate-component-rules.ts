import { glob, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readMarkdownAsHtml } from './lib/markdown-to-html.ts';

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

/**
 * `solution.md` and `<name>.solution.md` describe a solution. Each comes with a
 * `.json` file of the same name that holds its `id` and `$comment`.
 */
function isSolution(fileName: string): boolean {
  return fileName === 'solution.md' || fileName.endsWith('.solution.md');
}

/**
 * Build the rule object for a single `_rules/<slug>` folder: a reference to its
 * `subject`, the metadata id/title, the `explanation`, the optional
 * `relatedguidelines` and a `solutions` list. Every markdown file is rendered to
 * HTML that uses NL Design System components. Any other file is an error.
 *
 * @param ruleDir
 * @param subject id of the subject this rule belongs to
 */
async function readRule(ruleDir: string, subject: string): Promise<Record<string, unknown>> {
  const [metadataText, entries] = await Promise.all([
    readFile(join(ruleDir, 'metadata.json'), 'utf8'),
    readdir(ruleDir, { withFileTypes: true }),
  ]);
  const metadata = JSON.parse(metadataText);

  // Sorted so the order of the solutions is the same on every run.
  const fileNames = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  let hasExplanation = false;
  let hasRelatedGuidelines = false;
  const solutionFiles: string[] = [];

  for (const fileName of fileNames) {
    switch (fileName) {
      case 'metadata.json':
        break;
      case 'explanation.md':
        hasExplanation = true;
        break;
      case 'relatedguidelines.md':
        hasRelatedGuidelines = true;
        break;
      default:
        if (isSolution(fileName)) {
          solutionFiles.push(fileName);
        } else if (!isSolution(`${basename(fileName, '.json')}.md`)) {
          throw new Error(`${join(ruleDir, fileName)} is not a known rule file`);
        }
    }
  }

  if (!hasExplanation) {
    throw new Error(`${ruleDir} is missing explanation.md`);
  }

  // The plain `solution.md` goes first, the named solutions follow alphabetically.
  solutionFiles.sort((a, b) => Number(b === 'solution.md') - Number(a === 'solution.md'));

  const [explanation, relatedGuidelines, solutions] = await Promise.all([
    readMarkdownAsHtml(join(ruleDir, 'explanation.md')),
    hasRelatedGuidelines ? readMarkdownAsHtml(join(ruleDir, 'relatedguidelines.md')) : undefined,
    Promise.all(
      solutionFiles.map(async (fileName) => {
        const [solutionText, html] = await Promise.all([
          readFile(join(ruleDir, `${basename(fileName, '.md')}.json`), 'utf8'),
          readMarkdownAsHtml(join(ruleDir, fileName)),
        ]);
        const { id, $comment } = JSON.parse(solutionText);
        return { id, $comment, html };
      }),
    ),
  ]);

  return {
    id: metadata.id,
    explanation,
    ...(relatedGuidelines && { relatedguidelines: relatedGuidelines }),
    solutions,
    subject,
    title: metadata.title,
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
        rules,
        subject: { id: component, label: humanize(component), type: 'component' },
      };
    }),
  )
).filter((group) => group !== null);

const output = {
  rules: subjectGroups.flatMap((group) => group.rules),
  subjects: subjectGroups.map((group) => group.subject),
};

const outFile = join(docsDistDir, 'component-rules.json');
await mkdir(docsDistDir, { recursive: true });
await writeFile(outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(
  `Wrote ${output.rules.length} rules across ${output.subjects.length} subjects to ${relative(process.cwd(), outFile)}`,
);
