import { t } from '@nl-design-system-community/documentation-i18n/src/rosetta';
import { SuccessCriterium } from '@nl-design-system-community/wcag-data/src/wcag22.ts';
import { Heading, Paragraph, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import { DigiToegankelijkStatus } from './digitoegankelijk-status';
import { type AuditResults } from './wcag-evaluation-types';
import { getAuditResultOutcome } from './wcag-section';
interface OutcomeCounts {
  'earl:passed': number;
  'earl:failed': number;
  'earl:inapplicable': number;
  'earl:cantTell': number;
  'earl:untested': number;
}

export const countOutcomes = (results: AuditResults, targetSc: SuccessCriterium[], title: string): OutcomeCounts => {
  return targetSc.reduce(
    (acc: OutcomeCounts, sc) => {
      const auditResult = results[sc.url];
      const outcome = getAuditResultOutcome(auditResult || []);
      acc[outcome] = (acc[outcome] || 0) + 1;
      if (outcome === 'earl:untested') {
        console.warn('Missing test: ', title, sc.url);
      }
      return acc;
    },
    { 'earl:cantTell': 0, 'earl:failed': 0, 'earl:inapplicable': 0, 'earl:passed': 0, 'earl:untested': 0 },
  );
};

export interface WcagSummaryProps {
  headingLevel?: number;
  successCriteria: SuccessCriterium[];
  wcagVersion: string;
  evaluationDate: string;
  conformanceTarget: string;
  outcomeMapping: { [index: string]: string };
  outcomeCounts: OutcomeCounts;
  wcag21CriteriaFailed: number;
}

export const WcagSummary = ({
  children,
  conformanceTarget,
  evaluationDate,
  headingLevel = 2,
  outcomeCounts,
  outcomeMapping,
  successCriteria,
  wcag21CriteriaFailed,
  wcagVersion,
}: PropsWithChildren<WcagSummaryProps>) => {
  const totalSummary = outcomeCounts['earl:passed'] + outcomeCounts['earl:failed'] + outcomeCounts['earl:inapplicable'];

  return (
    <section className="todo-section todo-section--wcag-summary">
      <Heading level={headingLevel} id="samenvatting">
        {t('wcagEvaluation.summary')}
      </Heading>
      <Paragraph>
        {t('wcagEvaluation.evaluation_summary', {
          conformanceTarget: conformanceTarget,
          totalCriteria: successCriteria.length,
          totalSummary: totalSummary,
          wcagVersion: wcagVersion,
        })}
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>
          <span>{outcomeMapping['earl:passed']}: </span>
          <span>{outcomeCounts['earl:passed']}</span>
        </UnorderedListItem>
        <UnorderedListItem>
          <span>{outcomeMapping['earl:failed']}: </span>
          <span>{outcomeCounts['earl:failed']}</span>
        </UnorderedListItem>
        <UnorderedListItem>
          <span>{outcomeMapping['earl:cantTell']}: </span>
          <span>{outcomeCounts['earl:cantTell']}</span>
        </UnorderedListItem>
        <UnorderedListItem>
          <span>{outcomeMapping['earl:inapplicable']}: </span>
          <span>{outcomeCounts['earl:inapplicable']}</span>
        </UnorderedListItem>
        <UnorderedListItem>
          <span>{outcomeMapping['earl:untested']}: </span>
          <span>{outcomeCounts['earl:untested']}</span>
        </UnorderedListItem>
      </UnorderedList>
      <Paragraph>
        <DigiToegankelijkStatus
          criteriaTested={totalSummary}
          criteriaFailed={wcag21CriteriaFailed}
          evaluationDate={evaluationDate}
          renderDate={new Date().toISOString()}
        />
      </Paragraph>
      {children}
    </section>
  );
};
