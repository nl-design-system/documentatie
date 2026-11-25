import { t } from '@nl-design-system-community/documentation-i18n/src/rosetta';
import { FormField, HeadingGroup, PreHeading } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { DataBadge } from '../data-badge/data-badge';
import { Heading } from '../heading/heading';
import { Link } from '../link/link';
import { Markdown } from '../markdown/markdown';
import { Paragraph } from '../paragraph/paragraph';
import { UnorderedList } from '../unordered-list/unordered-list';
import { Assertion, OutcomeId } from './wcag-evaluation-types';

const UnorderedListItem = UnorderedList.Item;

export interface WcagScSectionProps {
  /* success criterion, for example: "1.3.5" */
  sc: string;

  /* human readble fragment identifier, for example: "identify-input-purpose" */
  fragment: string;

  /* optimize for physical print. Default: false */
  print?: boolean;

  /* title of the success criterion. For example: "Identify Input Purpose" */
  title: string;

  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  /* Conformance level. For example: "AA" */
  conformance?: string;

  /* URL Identifier of the WCAG success criterion. For example: "https://www.w3.org/TR/WCAG22/#identify-input-purpose" */
  url?: string;

  outcome?: OutcomeId;
}

export const WcagScSection = ({
  children,
  conformance,
  fragment,
  headingLevel = 3,
  outcome,
  print = false,
  sc,
  title,
  url,
}: PropsWithChildren<WcagScSectionProps>) => {
  return (
    <section
      id={`sc-${sc}`}
      className={clsx('todo-section--wcag-sc', 'ma-flow', {
        'todo-section--wcag-sc-cant-tell': outcome === 'earl:cantTell',
        'todo-section--wcag-sc-failed': outcome === 'earl:failed',
        'todo-section--wcag-sc-inapplicable': outcome === 'earl:inapplicable',
        'todo-section--wcag-sc-passed': outcome === 'earl:passed',
        'todo-section--wcag-sc-untested': outcome === 'earl:untested',
      })}
    >
      <span id={(url || '').replace(/.+#/, '')}></span>
      <HeadingGroup id={fragment} className="utrecht-heading-group--level-4">
        <Heading level={headingLevel} appearance="level-3">
          {title}
        </Heading>
        <PreHeading>
          {print ? (
            <>
              {t('wcagEvaluation.success_criterion')} {sc}
            </>
          ) : (
            <Link href={`#sc-${sc}`}>
              {t('wcagEvaluation.success_criterion')} {sc}
            </Link>
          )}{' '}
          <DataBadge>
            {t('wcagEvaluation.conformance_level')} {conformance}
          </DataBadge>
        </PreHeading>
      </HeadingGroup>
      {children}
    </section>
  );
};

export const getAuditResultOutcome = (auditResults: Assertion[]): OutcomeId => {
  const outcomes = auditResults.map((auditResult) => auditResult.result.outcome.id);

  const passed = outcomes.length >= 1 && outcomes.every((outcomeId) => outcomeId === 'earl:passed');
  const failed = outcomes.length >= 1 && outcomes.some((outcomeId) => outcomeId === 'earl:failed');
  const inapplicable = outcomes.length >= 1 && outcomes.every((outcomeId) => outcomeId === 'earl:inapplicable');
  const cantTell = outcomes.length >= 1 && outcomes.every((outcomeId) => outcomeId === 'earl:cantTell');

  return passed
    ? 'earl:passed'
    : failed
      ? 'earl:failed'
      : inapplicable
        ? 'earl:inapplicable'
        : cantTell
          ? 'earl:cantTell'
          : 'earl:untested';
};

export interface WcagAuditResultsProps {
  auditResults: Assertion[];
  outcomeMapping: { [index: string]: string };
}
export const WcagAuditResults = ({ auditResults = [], outcomeMapping }: WcagAuditResultsProps) => {
  const state = getAuditResultOutcome(auditResults);

  const failedResults = Array.isArray(auditResults)
    ? auditResults.filter((auditResult) => auditResult.result.outcome.id === 'earl:failed')
    : [];

  return (
    <div>
      <Paragraph>
        {outcomeMapping[state]}
        {'.'}
      </Paragraph>
      {failedResults.length >= 1 && (
        <FormField invalid>
          <Paragraph>
            <b>
              {failedResults.length === 1
                ? t('wcagEvaluation.issue_found_singular')
                : t('wcagEvaluation.issues_found_multiple')}
              :
            </b>
          </Paragraph>
          {Array.isArray(auditResults) && auditResults.length > 1 ? (
            <UnorderedList>
              {auditResults.map((auditSample, index) => (
                <UnorderedListItem key={index}>
                  <Paragraph>
                    {outcomeMapping[auditResults[0].result.outcome.id as keyof typeof outcomeMapping]}
                  </Paragraph>
                  <Markdown className="ma-flow">{auditSample.result.description}</Markdown>
                </UnorderedListItem>
              ))}
            </UnorderedList>
          ) : (
            failedResults.map((auditResult, index) => (
              <Markdown key={index} className="ma-flow">
                {auditResult.result.description}
              </Markdown>
            ))
          )}
        </FormField>
      )}
    </div>
  );
};
