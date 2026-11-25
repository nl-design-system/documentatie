import { openAsBlob } from 'node:fs';
import { glob, mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { markdownToHtml } from './lib/markdown-to-html.ts';

// Source markdown lives in the documentation package; output ships with it too.
const componentenDir = fileURLToPath(new URL('../../../docs/componenten', import.meta.url));
const docsDistDir = fileURLToPath(new URL('../../../docs/dist', import.meta.url));

/**
 * `metadata.json` holds the `id` and `title` of a rule, a solution `.json` file the
 * `id` and `$comment` of a solution.
 */
interface RuleJson {
  id: string;
  $comment: string;
  title: string;
}

interface MarkdownSource {
  path: string;
  /** Set by `#readRuleFiles`. */
  file?: File;
  /** Set by `#convertMarkdownFiles`. */
  html: string;
}

interface JsonSource {
  path: string;
  /** Set by `#readRuleFiles`. */
  file?: File;
  /** Set by `#parseJsonFiles`. */
  parsed: RuleJson;
}

async function readAsFile(path: string, type: string): Promise<File> {
  return new File([await openAsBlob(path)], basename(path), { type });
}

async function readText({ file, path }: MarkdownSource | JsonSource): Promise<string> {
  if (!file) {
    throw new Error(`${path} has not been read`);
  }
  return file.text();
}

interface SolutionFiles {
  json: JsonSource;
  markdown: MarkdownSource;
}

/**
 * The files in one `_rules/<slug>` folder, by role.
 */
interface RuleFiles {
  component: string;
  metadata: JsonSource;
  explanation: MarkdownSource;
  relatedguidelines?: MarkdownSource;
  /** `solution.md` first, the named solutions follow alphabetically. */
  solutions: SolutionFiles[];
}

/**
 * A rule folder with the sorted names of its files.
 */
interface RuleFolder {
  component: string;
  dir: string;
  fileNames: string[];
}

/**
 * List the rule folders of all components with the sorted names of their files,
 * sorted by component and then by folder. A rule is any directory in
 * `<component>/_rules` containing a `metadata.json`, at any depth: rules can be
 * grouped in a subfolder (`heading1/noH1`) as well as live directly in `_rules`
 * (`contrast`). Files in a folder without `metadata.json` are ignored.
 */
async function listRuleFolders(componentenDir: string): Promise<RuleFolder[]> {
  const entries = await Array.fromAsync(glob('*/_rules/**/*', { cwd: componentenDir, withFileTypes: true }));
  const filesByDir = Map.groupBy(
    entries.filter((entry) => entry.isFile()),
    (entry) => entry.parentPath,
  );
  return [...filesByDir]
    .map(([dir, files]) => ({
      component: relative(componentenDir, dir).split(sep)[0],
      dir,
      // Sorted so the order of the solutions is the same on every run.
      fileNames: files.map((file) => file.name).sort((a, b) => a.localeCompare(b)),
    }))
    .filter(({ fileNames }) => fileNames.includes('metadata.json'))
    .sort((a, b) => a.component.localeCompare(b.component) || a.dir.localeCompare(b.dir));
}

const ruleFileNames = new Set([
  'metadata.json',
  'explanation.md',
  'relatedguidelines.md',
  'solution.md',
  'solution.json',
]);

const isRuleFile = (fileName: string): boolean =>
  ruleFileNames.has(fileName) || fileName.endsWith('.solution.md') || fileName.endsWith('.solution.json');

/**
 * Give each file in a rule folder its role. A solution is a markdown file with a
 * `.json` file of the same name that holds its `id` and `$comment`. Any other
 * file is an error.
 *
 * @param folder
 */
function classifyRuleFolder({ component, dir, fileNames }: RuleFolder): RuleFiles {
  if (!fileNames.includes('explanation.md')) {
    throw new Error(`${dir} is missing explanation.md`);
  }

  let relatedguidelines: MarkdownSource | undefined;
  let solution: SolutionFiles | undefined;
  const namedSolutions: SolutionFiles[] = [];

  for (const fileName of fileNames) {
    if (!isRuleFile(fileName)) {
      throw new Error(`${join(dir, fileName)} is not a known rule file`);
    }
    if (fileName === 'relatedguidelines.md') {
      relatedguidelines = { path: join(dir, fileName) } as MarkdownSource;
    }
    if (fileName === 'solution.md') {
      solution = {
        json: { path: join(dir, 'solution.json') } as JsonSource,
        markdown: { path: join(dir, fileName) } as MarkdownSource,
      };
    }
    if (fileName.endsWith('.solution.md')) {
      const name = basename(fileName, '.md');
      namedSolutions.push({
        json: { path: join(dir, `${name}.json`) } as JsonSource,
        markdown: { path: join(dir, fileName) } as MarkdownSource,
      });
    }
  }

  return {
    relatedguidelines,
    component,
    explanation: { path: join(dir, 'explanation.md') } as MarkdownSource,
    metadata: { path: join(dir, 'metadata.json') } as JsonSource,
    solutions: solution ? [solution, ...namedSolutions] : namedSolutions,
  };
}

interface Solution {
  id: string;
  $comment: string;
  html: string;
}

interface Rule {
  id: string;
  explanation: string;
  relatedguidelines?: string;
  solutions: Solution[];
  /** id of the subject this rule belongs to */
  subject: string;
  title: string;
}

/**
 * Each component is a `subject`; the `type` field keeps the format open so other
 * kinds of subjects (templates, guidelines, …) can be added later.
 */
interface Subject {
  id: string;
  label: string;
  type: 'component';
}

/**
 * The content of `dist/component-rules.json`.
 */
interface ComponentRules {
  rules: Rule[];
  subjects: Subject[];
}

/**
 * Turn a kebab-case directory name into a human-readable label.
 * `font-family` -> `Font family`.
 */
function humanize(name: string): string {
  const spaced = name.replaceAll('-', ' ');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/**
 * Generates `dist/component-rules.json` from the `_rules` folders of the components.
 * `run()` calls the steps in order; each step stores its result for the next one.
 */
class ComponentRulesGenerator {
  readonly #componentenDir: string;
  readonly #outFile: string;
  #rules: RuleFiles[] = [];
  #jsonSources: JsonSource[] = [];
  #markdownSources: MarkdownSource[] = [];

  constructor(componentenDir: string, outFile: string) {
    this.#componentenDir = componentenDir;
    this.#outFile = outFile;
  }

  async run(): Promise<ComponentRules> {
    await this.#collectRuleFiles();
    await this.#readRuleFiles();
    await this.#parseJsonFiles();
    await this.#convertMarkdownFiles();
    const output = this.#buildComponentRules();
    await this.#writeComponentRulesFile(output);
    return output;
  }

  async #collectRuleFiles(): Promise<void> {
    const folders = await listRuleFolders(this.#componentenDir);
    this.#rules = folders.map(classifyRuleFolder);
    this.#jsonSources = this.#rules.flatMap((rule) => [rule.metadata, ...rule.solutions.map(({ json }) => json)]);
    this.#markdownSources = this.#rules.flatMap((rule) => [
      rule.explanation,
      ...(rule.relatedguidelines ? [rule.relatedguidelines] : []),
      ...rule.solutions.map(({ markdown }) => markdown),
    ]);
  }

  async #readRuleFiles(): Promise<void> {
    await Promise.all([
      ...this.#jsonSources.map(async (jsonSource) => {
        jsonSource.file = await readAsFile(jsonSource.path, 'application/json');
      }),
      ...this.#markdownSources.map(async (markdownSource) => {
        markdownSource.file = await readAsFile(markdownSource.path, 'text/markdown');
      }),
    ]);
  }

  async #parseJsonFiles(): Promise<void> {
    await Promise.all(
      this.#jsonSources.map(async (jsonSource) => {
        jsonSource.parsed = JSON.parse(await readText(jsonSource));
      }),
    );
  }

  async #convertMarkdownFiles(): Promise<void> {
    await Promise.all(
      this.#markdownSources.map(async (markdownSource) => {
        markdownSource.html = await markdownToHtml(await readText(markdownSource));
      }),
    );
  }

  #buildComponentRules(): ComponentRules {
    // A component has several rules; the Set keeps each component once, in rule order.
    const components = new Set(this.#rules.map((rule) => rule.component));
    return {
      rules: this.#rules.map((rule) => {
        const metadata = rule.metadata.parsed;
        return {
          id: metadata.id,
          explanation: rule.explanation.html,
          ...(rule.relatedguidelines && { relatedguidelines: rule.relatedguidelines.html }),
          solutions: rule.solutions.map((solution) => {
            const { id, $comment } = solution.json.parsed;
            return { id, $comment, html: solution.markdown.html };
          }),
          subject: rule.component,
          title: metadata.title,
        };
      }),
      subjects: Array.from(components, (component) => ({
        id: component,
        label: humanize(component),
        type: 'component',
      })),
    };
  }

  async #writeComponentRulesFile(output: ComponentRules): Promise<void> {
    await mkdir(dirname(this.#outFile), { recursive: true });
    await writeFile(this.#outFile, JSON.stringify(output, null, 2) + '\n', 'utf8');
  }
}

const outFile = join(docsDistDir, 'component-rules.json');
const output = await new ComponentRulesGenerator(componentenDir, outFile).run();

console.log(
  `Wrote ${output.rules.length} rules across ${output.subjects.length} subjects to ${relative(process.cwd(), outFile)}`,
);
