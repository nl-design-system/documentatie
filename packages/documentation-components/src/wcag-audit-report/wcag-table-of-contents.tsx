import { t } from '@nl-design-system-community/documentation-i18n/src/rosetta';
import { SuccessCriterium } from '@nl-design-system-community/wcag-data/src/wcag22.ts';
import { Heading } from '../heading/heading';
import { Paragraph } from '../paragraph/paragraph';
import {
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsListItem,
  TableOfContentsSection,
} from './table-of-contents';
import { AuditResults } from './wcag-evaluation-types';

export interface WcagTableOfContentProps {
  auditResults: AuditResults;
  successCriteriaMap: Map<string, SuccessCriterium>;
  lang?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

const stringSort = (a: string, b: string): number => (a === b ? 0 : a > b ? 1 : -1);

// https://stackoverflow.com/questions/40201533/sort-version-dotted-number-strings-in-javascript
const versionPad = (str: string) => str.replace(/\d+/g, (n) => String(Number(n) + 100000));

const versionSort = (a: string, b: string): number => stringSort(versionPad(a), versionPad(b));

export const successCriteriumSort = (a: SuccessCriterium, b: SuccessCriterium) => versionSort(a.sc, b.sc);

export const WcagTableOfContents = ({
  auditResults,
  headingLevel = 2,
  lang,
  successCriteriaMap,
}: WcagTableOfContentProps) => {
  const failedAuditResults = Object.entries(auditResults).filter(([, samples]) =>
    samples.some((sample) => sample.result.outcome.id === 'earl:failed'),
  );

  return (
    <TableOfContentsSection>
      <Heading level={headingLevel} id="issues">
        {t('wcagEvaluation.website_found_issues')}
      </Heading>
      {failedAuditResults.length >= 1 ? <Paragraph>{t('wcagEvaluation.website_not_compliant')}</Paragraph> : null}
      <TableOfContentsList>
        {failedAuditResults
          .map(([url]) => {
            return successCriteriaMap.get(url);
          })
          .filter((x): x is SuccessCriterium => !!x)
          .sort(successCriteriumSort)
          .map((data) => {
            const { nl, sc, title } = data;
            const localizedTitle = lang === 'nl' ? nl.title : title;

            return (
              <TableOfContentsListItem key={sc}>
                <TableOfContentsLink href={`#sc-${sc}`} label={`${sc} - `}>
                  {localizedTitle}
                </TableOfContentsLink>
              </TableOfContentsListItem>
            );
          })}
      </TableOfContentsList>
    </TableOfContentsSection>
  );
};
