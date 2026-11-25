/**
 * `metadata.json` holds the `id` and `title` of a rule, a solution `.json` file the
 * `id` and `$comment` of a solution.
 */
export interface RuleJson {
  id: string;
  $comment: string;
  title: string;
}

export interface MarkdownSource {
  path: string;
  /** Set by `#readRuleFiles`. */
  file?: File;
  /** Set by `#convertMarkdownFiles`. */
  html: string;
}

export interface JsonSource {
  path: string;
  /** Set by `#readRuleFiles`. */
  file?: File;
  /** Set by `#parseJsonFiles`. */
  parsed: RuleJson;
}

export interface SolutionFiles {
  json: JsonSource;
  markdown: MarkdownSource;
}

/**
 * The files in one `_rules/<slug>` folder, by role.
 */
export interface RuleFiles {
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
export interface RuleFolder {
  component: string;
  dir: string;
  fileNames: string[];
}

export interface Solution {
  id: string;
  $comment: string;
  html: string;
}

export interface Rule {
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
export interface Subject {
  id: string;
  label: string;
  type: 'component';
}

/**
 * The content of `dist/component-rules.json`.
 */
export interface ComponentRules {
  rules: Rule[];
  subjects: Subject[];
}
