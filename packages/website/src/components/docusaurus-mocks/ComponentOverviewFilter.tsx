import { Accordion, AccordionSection } from '../accordion/accordion';
import { Checkbox, FormField, FormLabel, Fieldset } from '@utrecht/component-library-react/dist/css-module';
import { Heading } from '@components/heading/heading';
import { Paragraph } from '@components/paragraph/paragraph';
import { UnorderedList } from '@components/unordered-list/unordered-list';
import { useEffect, useState, type SyntheticEvent } from 'react';
import { COMPONENT_STATES } from '@site/src/utils';
import { EstafetteBadge } from '@site/src/components/EstafetteBadge';
import './ComponentOverviewFilter.css';
import { Button } from '@components/button/button';

const SEARCH_PARAM_FRAMEWORK = 'framework';
const SEARCH_PARAM_STATUS = 'status';

export const ComponentOverviewFilter = () => {
  const [shownCards, setShownCards] = useState<number>(0);
  const [frameworkNames, setFrameworkNames] = useState<string[]>([]);
  const [cards, setCards] = useState<HTMLDivElement[]>([]);

  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [frameworkFilters, setFrameworkFilters] = useState<string[]>([]);

  useEffect(() => {
    const cards: HTMLDivElement[] = [];
    const frameworkNames = new Set<string>();
    document.querySelectorAll('.ma-cardgroup .ma-component-overview-list-item').forEach((item: HTMLDivElement) => {
      item.dataset.frameworkNames?.split(',')?.forEach((framework) => frameworkNames.add(framework));
      cards.push(item);
    });
    setFrameworkNames([...frameworkNames].filter(Boolean));
    setCards(cards);

    function getFiltersFromParams() {
      const params = new URLSearchParams(location.search);
      setStatusFilters(params.get(SEARCH_PARAM_STATUS)?.split(',') || []);
      setFrameworkFilters(params.get(SEARCH_PARAM_FRAMEWORK)?.split(',') || []);
    }
    getFiltersFromParams();

    window.addEventListener('popstate', getFiltersFromParams);
    return () => window.removeEventListener('popstate', getFiltersFromParams);
  }, []);

  useEffect(() => {
    const allCards = new Set<HTMLDivElement>(cards);
    const cardsToShow = new Set<HTMLDivElement>();
    if (statusFilters.length === 0) {
      allCards.forEach((card) => cardsToShow.add(card));
    }

    statusFilters.forEach((status) => {
      cards.forEach((card) => {
        if (card.dataset['status'] === status) {
          cardsToShow.add(card);
        }
      });
    });

    if (frameworkFilters.length) {
      cardsToShow.forEach((card) => {
        const cardFrameworks: string[] = (card.dataset['frameworkNames'] || '').split(',').filter(Boolean);
        const keep = frameworkFilters.some((framework) => cardFrameworks.includes(framework));
        if (keep === false) {
          cardsToShow.delete(card);
        }
      });
    }

    cardsToShow.forEach((card) => (card.hidden = false));
    allCards.difference(cardsToShow).forEach((card) => (card.hidden = true));

    setShownCards(cardsToShow.size);
  }, [frameworkFilters, statusFilters, cards]);

  function changeStatusFilter(event: SyntheticEvent<HTMLInputElement>) {
    const url = new URL(location.href);
    const value = event.currentTarget.id;

    const newStatusArray = statusFilters.includes(value)
      ? statusFilters.filter((name) => name !== value)
      : [...statusFilters, value];

    setStatusFilters(newStatusArray);

    if (newStatusArray.length) {
      url.searchParams.set(SEARCH_PARAM_STATUS, newStatusArray.join(','));
    } else {
      url.searchParams.delete(SEARCH_PARAM_STATUS);
    }

    history.pushState({}, '', url);
  }

  function changeFrameworkFilter(event: SyntheticEvent<HTMLInputElement>) {
    const url = new URL(location.href);
    const value = event.currentTarget.id;

    const newFrameworkArray = frameworkFilters.includes(value)
      ? frameworkFilters.filter((name) => name !== value)
      : [...frameworkFilters, value];

    setFrameworkFilters(newFrameworkArray);

    if (newFrameworkArray.length) {
      url.searchParams.set(SEARCH_PARAM_FRAMEWORK, newFrameworkArray.join(','));
    } else {
      url.searchParams.delete(SEARCH_PARAM_FRAMEWORK);
    }

    history.pushState({}, '', url);
  }

  function resetFilter() {
    const url = new URL(location.href);

    setStatusFilters([]);
    url.searchParams.delete(SEARCH_PARAM_STATUS);

    setFrameworkFilters([]);
    url.searchParams.delete(SEARCH_PARAM_FRAMEWORK);

    history.replaceState({}, '', url);
  }

  return (
    <div className="ma-component-overview-filter ma-flow">
      <Accordion>
        <AccordionSection
          heading={<span id="filter-results-label">Filter componenten</span>}
          headingLevel={2}
          headingApperance="level-5"
          classNamePanel="ma-flow"
        >
          <Fieldset
            aria-describedby="filter-results"
            aria-labelledby="filter-results-label filter-results-status-label"
          >
            <Heading id="filter-results-status-label" level={3} appearance="level-6">
              Status
            </Heading>
            <UnorderedList markers={false}>
              {Object.entries(COMPONENT_STATES)
                .filter(([key]) => key !== 'UNKNOWN')
                .map(([key, value]) => (
                  <UnorderedList.Item key={key}>
                    <FormField type="checkbox">
                      <Checkbox id={key} checked={statusFilters.includes(key)} onChange={changeStatusFilter} />
                      <FormLabel htmlFor={key}>
                        <EstafetteBadge state={value} />
                      </FormLabel>
                    </FormField>
                  </UnorderedList.Item>
                ))}
            </UnorderedList>
          </Fieldset>
          <Fieldset
            aria-describedby="filter-results"
            aria-labelledby="filter-results-label filter-results-implementation-label"
          >
            <Heading id="filter-results-implementation-label" level={3} appearance="level-6">
              Implementatie
            </Heading>
            <UnorderedList markers={false}>
              {frameworkNames.map((name) => (
                <UnorderedList.Item key={name}>
                  <FormField type="checkbox">
                    <Checkbox id={name} checked={frameworkFilters.includes(name)} onChange={changeFrameworkFilter} />
                    <FormLabel htmlFor={name}>{name}</FormLabel>
                  </FormField>
                </UnorderedList.Item>
              ))}
            </UnorderedList>
          </Fieldset>
        </AccordionSection>
      </Accordion>
      <Paragraph role="status" id="filter-results">
        {shownCards} van {cards.length} zichtbaar
      </Paragraph>

      {shownCards === 0 && (
        <Paragraph>
          <Button purpose="primary" onClick={resetFilter}>
            Toon alle componenten
          </Button>
        </Paragraph>
      )}
    </div>
  );
};
