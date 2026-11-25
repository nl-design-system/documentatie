import { t } from '@nl-design-system-community/documentation-i18n/src/rosetta';
import {
  successCriteria as wcag21,
  successCriteriaMap as wcag21map,
} from '@nl-design-system-community/wcag-data/src/wcag21.ts';
import {
  SuccessCriterium,
  successCriteria as wcag22,
  successCriteriaMap as wcag22map,
} from '@nl-design-system-community/wcag-data/src/wcag22.ts';
import {
  Article,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  HeadingGroup,
} from '@utrecht/component-library-react';
import { groupBy, isPlainObject } from 'es-toolkit/compat';
import { ReactNode } from 'react';
import { ActionGroup } from '../action-group/action-group';
import { Button } from '../button/button';
import { Heading } from '../heading/heading';
import { Link } from '../link/link';
import { Markdown } from '../markdown/markdown';
import { Note } from '../note/note';
import { Paragraph } from '../paragraph/paragraph';
import { UnorderedList } from '../unordered-list/unordered-list';
import { AuditResults } from './wcag-evaluation-types';
import wcagJSON from './wcag-evaluation.json';
import { getAuditResultOutcome, WcagAuditResults, WcagScSection } from './wcag-section';
import { countOutcomes, WcagSummary } from './wcag-summary';
import { successCriteriumSort, WcagTableOfContents } from './wcag-table-of-contents';

const UnorderedListItem = UnorderedList.Item;

type WcagEmJson = typeof wcagJSON;

interface WcagSpotlightSectionProps {
  markdown: string;
  link: string;
  linkText: string;
}

const WcagSpotlightSection = ({ link, linkText, markdown }: WcagSpotlightSectionProps) => {
  return (
    <Note aside purpose="info">
      {markdown && <Markdown className="ma-flow">{markdown}</Markdown>}
      {link && linkText && (
        <div>
          <Paragraph>
            {t('wcagEvaluation.read_more_at_NLDS')}:
            <br />
            <Link href={link} external printable>
              {linkText}
            </Link>
          </Paragraph>
        </div>
      )}
    </Note>
  );
};

const technologyUrls: { [index: string]: string } = {
  CSS: 'https://www.w3.org/Style/CSS/Overview.en.html',
  HTML: 'https://html.spec.whatwg.org/',
  JavaScript: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/',
  'Next.js': 'https://nextjs.org',
  'NL Design System': 'https://nldesignsystem.nl/',
  React: 'https://react.dev/',
  SVG: 'https://www.w3.org/TR/SVG2/',
  'WAI-ARIA': 'https://www.w3.org/TR/wai-aria/',
};

const TechnologyLink = ({ technology }: { technology: string }) =>
  typeof technology === 'string' && technology in technologyUrls ? (
    <Link href={technologyUrls[technology]} external>
      {technology}
    </Link>
  ) : (
    <span>{technology}</span>
  );

export const AuditRapport = ({
  evaluation: incompleteEvaluation,
  lang,
  print,
  technicalAuditContent,
  wcagPages,
}: {
  evaluation: WcagEmJson;
  wcagPages?: { successCriterion: string; summaryMarkdown: string }[];
  lang?: string;
  print?: boolean;
  technicalAuditContent?: ReactNode;
}) => {
  // Hack: add WCAG:22 namespace as the WCAG-EM tool breaks when included https://www.w3.org/WAI/eval/report-tool/evaluation/define-scope
  const context = incompleteEvaluation['@context'];
  const evaluation = { ...incompleteEvaluation, '@context': { ...context, WCAG22: 'http://www.w3.org/TR/WCAG22/#' } };

  const wcagVersion = evaluation.defineScope.wcagVersion;
  const conformanceTarget = evaluation.defineScope.conformanceTarget || '';

  const ENTIRE_SUBJECT_ID = '_:subject_1';
  const entireSampleResults = evaluation.auditSample.filter(
    (auditSample) => auditSample.subject.id === ENTIRE_SUBJECT_ID,
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auditResults: AuditResults = groupBy(entireSampleResults, (auditSample: any) => {
    let url = auditSample.test.id.replace(/^([^:]+):/, (match: string, match2: string) => {
      if (Object.hasOwn(evaluation['@context'], match2)) {
        return evaluation['@context'][match2 as keyof (typeof evaluation)['@context']];
      } else {
        return match;
      }
    });
    url = url.replace('http://www.w3.org/', 'https://www.w3.org/');
    // url = url.replace('https://www.w3.org/TR/WCAG20', 'https://www.w3.org/TR/WCAG21');
    // url = url.replace('https://www.w3.org/TR/WCAG21', 'https://www.w3.org/TR/WCAG22');
    if (wcagVersion === '2.1') {
      url = url.replace('https://www.w3.org/TR/WCAG22', 'https://www.w3.org/TR/WCAG21');
    }
    return url;
  });

  const wcagLists: { [index: string]: SuccessCriterium[] } = {
    '2.0': [],
    '2.1': wcag21,
    '2.2': wcag22,
  };

  const wcagMaps: { [index: string]: Map<string, SuccessCriterium> } = {
    '2.0': new Map(),
    '2.1': wcag21map,
    '2.2': wcag22map,
  };

  const targetWcag = wcagLists[wcagVersion] || [];
  const targetWcagMap = wcagMaps[wcagVersion] || [];

  const targetSc = targetWcag.filter(({ conformance }) => conformance.length <= conformanceTarget.length);

  const WcagSection = wcagPages
    ? ({ successCriterion }: { successCriterion: string }) => {
        const target = successCriterion;
        const page = wcagPages.find(({ successCriterion }) => successCriterion === target);
        const data = wcag22.find(({ sc }) => sc === target);

        if (!page) {
          return null;
        }
        const title = data?.nl.title;
        const linkTextPrefix = t('wcagEvaluation.criteria_explained');

        return (
          <WcagSpotlightSection
            markdown={page.summaryMarkdown}
            link={`https://nldesignsystem.nl/wcag/${successCriterion}`}
            linkText={`${linkTextPrefix}: ${title}`}
          ></WcagSpotlightSection>
        );
      }
    : () => [];

  const irrelevantResults = Object.keys(auditResults).filter(
    (resultUrl) => !targetSc.some(({ url }) => url === resultUrl),
  );

  irrelevantResults.forEach((result) => {
    console.warn('Results not part of report: ', evaluation?.reportFindings?.title, result);
  });

  const outcomeMapping = {
    'earl:cantTell': t('wcagEvaluation.outcome.cantTell'),
    'earl:failed': t('wcagEvaluation.outcome.failed'),
    'earl:inapplicable': t('wcagEvaluation.outcome.inapplicable'),
    'earl:passed': t('wcagEvaluation.outcome.passed'),
    'earl:untested': t('wcagEvaluation.outcome.untested'),
  };
  const outcomeCounts = countOutcomes(auditResults, targetSc, evaluation?.reportFindings?.title);

  const wcag21CriteriaFailed = Object.entries(auditResults)
    .filter(([, samples]) => samples.some((sample) => sample.result.outcome.id === 'earl:failed'))
    .filter(([url]) => {
      const item = wcag22map.get(url);

      const failsRequiredConformanceLevel = item && item.conformance !== 'AAA';
      const failsRequiredWcagVersion = item?.since && ['WCAG20', 'WCAG21'].includes(item.since);

      return failsRequiredConformanceLevel && failsRequiredWcagVersion;
    });

  const structuredSample = Array.isArray(evaluation.selectSample?.structuredSample)
    ? evaluation.selectSample?.structuredSample
    : isPlainObject(evaluation.selectSample?.structuredSample)
      ? [evaluation.selectSample?.structuredSample]
      : [];

  const randomSample = Array.isArray(evaluation.selectSample?.randomSample)
    ? evaluation.selectSample?.randomSample
    : isPlainObject(evaluation.selectSample?.randomSample)
      ? [evaluation.selectSample?.randomSample]
      : [];

  const technologiesReliedUpon = Array.isArray(evaluation.exploreTarget?.technologiesReliedUpon)
    ? evaluation.exploreTarget?.technologiesReliedUpon
    : typeof evaluation.exploreTarget?.technologiesReliedUpon === 'string'
      ? [evaluation.exploreTarget?.technologiesReliedUpon]
      : [];

  // let dateLanguage;
  // if (lang === 'nl') {
  //   dateLanguage = 'nl-NL';
  // } else {
  //   dateLanguage = 'en-GB';
  // }

  const dateLanguageMap: Record<string, string> = {
    en: 'en-GB',
    es: 'es-ES',
    fr: 'fr-FR',
    nl: 'nl-NL',
  };

  const dateLanguage = dateLanguageMap[lang || 'nl'] || 'nl-NL';

  return (
    <Article className="utrecht-audit-report" lang={lang}>
      <HeadingGroup>
        <Heading level={1}>{evaluation.reportFindings.title}</Heading>
        <Paragraph>
          {evaluation.reportFindings.evaluator} {t('wcagEvaluation.for')} {evaluation.reportFindings.commissioner}
          {' — '}
          {evaluation.reportFindings.date['@value']
            ? new Intl.DateTimeFormat(dateLanguage, {
                dateStyle: 'full',
                timeZone: 'Europe/Amsterdam',
              }).format(new Date(evaluation.reportFindings.date['@value']))
            : 'TODO: datum onbekend'}
        </Paragraph>
      </HeadingGroup>
      <WcagSummary
        headingLevel={2}
        outcomeMapping={outcomeMapping}
        outcomeCounts={outcomeCounts}
        wcag21CriteriaFailed={wcag21CriteriaFailed.length}
        wcagVersion={wcagVersion}
        evaluationDate={
          evaluation.reportFindings.date['@value']
            ? new Date(evaluation.reportFindings.date['@value']).toISOString()
            : new Date('1900-01-01').toISOString() /* TODO */
        }
        conformanceTarget={conformanceTarget}
        successCriteria={targetSc}
      >
        <Paragraph>
          <Markdown className="ma-flow">{evaluation.reportFindings.summary}</Markdown>
        </Paragraph>
      </WcagSummary>
      {technicalAuditContent}
      <section>
        <Heading level={2} id="de-steekproef">
          {t('wcagEvaluation.sample_title')}
        </Heading>
        <Paragraph>
          {t('wcagEvaluation.sample_summary', {
            structuredSampleLength: structuredSample?.length || 0,
          })}
        </Paragraph>
        <UnorderedList>
          {structuredSample.map(({ id, description, title }) => (
            <UnorderedListItem key={id}>
              <Link href={description} external printable>
                {title}
              </Link>
            </UnorderedListItem>
          ))}
        </UnorderedList>
        {randomSample.length > 0 && (
          <>
            <Paragraph>
              {t('wcagEvaluation.random_sample_summary', {
                randomSampleLength: randomSample.length,
              })}
            </Paragraph>
            <UnorderedList>
              {randomSample.map(({ id, description, title }) => (
                <UnorderedListItem key={id}>
                  <Link href={description} external printable>
                    {title}
                  </Link>
                </UnorderedListItem>
              ))}
            </UnorderedList>
          </>
        )}
      </section>
      <WcagTableOfContents auditResults={auditResults} successCriteriaMap={targetWcagMap} lang={lang} />
      <section id="resultaten-per-wcag-succescriterium">
        <Heading level={2} id="results">
          {t('wcagEvaluation.results_per_criterion_title')}
        </Heading>
        {/* TODO: Implement toggle button with web component */}
        <div className="todo-filter-button-group" hidden>
          <ActionGroup>
            <Button
              aria-expanded="true"
              onClick={(evt) => {
                if (evt.target instanceof HTMLElement) {
                  let expanded = evt.target.getAttribute('aria-expanded') === 'true';

                  expanded = !expanded;

                  document.body.classList.toggle('todo-only-wcag-sc-failed', !expanded);
                  evt.target.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                  evt.target.classList.toggle('utrecht-button--pressed', expanded);
                  evt.target.textContent = expanded
                    ? t('wcagEvaluation.only_show_does_not_suffice')
                    : t('wcagEvaluation.show_all');

                  const visibleSectionSelector = expanded ? '.todo-section--wcag-sc' : '.todo-section--wcag-sc-failed';

                  evt.target.setAttribute('aria-describedby', 'filter-button-group-status');

                  const toggleButtonStatus = document.getElementById('filter-button-group-status');
                  const visibleSectionLength = document.querySelectorAll(visibleSectionSelector).length;
                  if (toggleButtonStatus) {
                    toggleButtonStatus.textContent = `${visibleSectionLength} succescriteria zichtbaar`;
                  }
                }
              }}
            >
              {t('wcagEvaluation.only_show_does_not_suffice')}
            </Button>
          </ActionGroup>
          <Paragraph role="status" id="filter-button-group-status"></Paragraph>
        </div>
        <section>
          {targetSc.toSorted(successCriteriumSort).map((item) => {
            const title = lang === 'nl' ? item.nl.title : item.title;
            const { conformance, fragment, sc, url } = item;

            return (
              <WcagScSection
                key={url}
                sc={sc}
                fragment={fragment}
                title={title}
                conformance={conformance}
                print={print}
                outcome={getAuditResultOutcome(auditResults[url] || [])}
              >
                <WcagAuditResults auditResults={auditResults[url]} outcomeMapping={outcomeMapping} />
                {lang === 'nl' && <WcagSection successCriterion={sc} />}
              </WcagScSection>
            );
          })}
        </section>
      </section>
      <section>
        <Heading level={2} id="gebruikte-technieken">
          {t('wcagEvaluation.used_technologies')}
        </Heading>
        <Paragraph>{t('wcagEvaluation.used_technologies_intro')}</Paragraph>
        <UnorderedList>
          {technologiesReliedUpon
            ?.toSorted((a, b) => a.localeCompare(b))
            .map((i) => (
              <UnorderedListItem key={i}>
                <TechnologyLink technology={i} />
              </UnorderedListItem>
            ))}
        </UnorderedList>
      </section>
      <section>
        <Heading level={2} id="over-de-evaluatie">
          {t('wcagEvaluation.about_the_evaluation')}
        </Heading>
        <DataList>
          <DataListItem>
            <DataListKey>{t('wcagEvaluation.auditor')}:</DataListKey>
            <DataListValue>{evaluation.reportFindings.evaluator}</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>{t('wcagEvaluation.client')}:</DataListKey>
            <DataListValue>{evaluation.reportFindings.commissioner}</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>{t('wcagEvaluation.evaluation_date')}:</DataListKey>
            <DataListValue>
              {evaluation.reportFindings.date['@value']
                ? new Intl.DateTimeFormat(dateLanguage, {
                    dateStyle: 'full',
                    timeZone: 'Europe/Amsterdam',
                  }).format(new Date(evaluation.reportFindings.date['@value']))
                : 'TODO: datum onbekend'}
            </DataListValue>
          </DataListItem>
        </DataList>
        <section>
          <Heading level={3}>{t('wcagEvaluation.principles')}</Heading>
          <DataList>
            {evaluation['@context'] && evaluation['@context']['Evaluation'] === 'wcagem:procedure' ? (
              <DataListItem>
                <DataListKey>{t('wcagEvaluation.evaluation_method')}:</DataListKey>
                <DataListValue>WCAG-EM</DataListValue>
              </DataListItem>
            ) : null}
            <DataListItem>
              <DataListKey>{t('wcagEvaluation.evaluation_scope')}:</DataListKey>
              <DataListValue>
                <Markdown className="ma-flow">{evaluation.defineScope.scope.description}</Markdown>
              </DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>{t('wcagEvaluation.evaluation_wcagVersion')}:</DataListKey>
              <DataListValue>{evaluation.defineScope.wcagVersion}</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>{t('wcagEvaluation.evaluation_conformanceTarget')}:</DataListKey>
              <DataListValue>{evaluation.defineScope.conformanceTarget}</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>{t('wcagEvaluation.evaluation_supportbaseline')}:</DataListKey>
              <DataListValue>{evaluation.defineScope.accessibilitySupportBaseline}</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>{t('wcagEvaluation.evaluation_additionalReq')}:</DataListKey>
              <DataListValue>{evaluation.defineScope.additionalEvaluationRequirements}</DataListValue>
            </DataListItem>
          </DataList>
        </section>
        <section>
          <Heading level={2} id="specifics">
            {t('wcagEvaluation.evaluation_specifics')}
          </Heading>
          <Paragraph>{evaluation.reportFindings.evaluationSpecifics}</Paragraph>
        </section>
      </section>
    </Article>
  );
};
