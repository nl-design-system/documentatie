import { useEffect, useState, type SyntheticEvent } from 'react';
import { COMPONENT_STATES } from '../../../../../src/utils';

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
        const cardFrameworks: string = card.dataset['frameworkNames'] || '';
        const keep = frameworkFilters.some((framework) => {
          return cardFrameworks.includes(framework);
        });
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
    const value = event.currentTarget.value;
    if (statusFilters.includes(value)) {
      setStatusFilters(statusFilters.filter((name) => name !== value));
    } else {
      setStatusFilters([...statusFilters, value]);
    }
  }

  function changeFrameworkFilter(event: SyntheticEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    if (frameworkFilters.includes(value)) {
      setFrameworkFilters(frameworkFilters.filter((name) => name !== value));
    } else {
      setFrameworkFilters([...frameworkFilters, value]);
    }
  }

  return (
    <div className="ma-component-overview-filter">
      <ul>
        {Object.entries(COMPONENT_STATES)
          .filter(([key]) => key !== 'UNKNOWN')
          .map(([key, value]) => (
            <li key={key}>
              <input type="checkbox" name="status" value={key} onChange={changeStatusFilter} /> {value}
            </li>
          ))}
      </ul>
      <ul>
        {frameworkNames.map((name) => (
          <li key={name}>
            <input type="checkbox" name="framework" value={name} onChange={changeFrameworkFilter} /> {name}
          </li>
        ))}
      </ul>
      <output>
        <span>
          {shownCards} van {cards.length} zichtbaar
        </span>
      </output>
    </div>
  );
};
