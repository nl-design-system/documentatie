export interface Outcome {
  id?: string;
  title: string;
}

export interface Result {
  outcome: Outcome;
  description: string;
}

export interface Assertion {
  type: string;
  date: string;
  mode: Record<string, unknown>;
  result: Result;
  subject: Record<string, unknown>;
  test: Record<string, unknown>;
}

export interface AuditResults {
  [url: string]: Assertion[];
}

export type OutcomeId = 'earl:passed' | 'earl:failed' | 'earl:inapplicable' | 'earl:cantTell' | 'earl:untested';
