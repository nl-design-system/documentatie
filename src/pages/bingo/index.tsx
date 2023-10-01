import { useHistory } from '@docusaurus/router';
import { Alert, Heading1, Icon, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { issues } from './_issues';
import style from './bingo.module.css';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface BingoCardProps {
  issues: typeof issues;
  columns: number;
  freeCellsIds: number[];
}

const BingoCard = ({ issues, columns, freeCellsIds }: BingoCardProps) => {
  const { register, formState } = useForm();

  return (
    <>
      <section className={clsx(style['nlds-bingo-card'])}>
        <img
          className={clsx(style['nlds-bingo-card__logo'])}
          src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-text-2.svg"
          alt="NL Design System logo"
        />
        <Heading1>Foute formulieren Bingo</Heading1>
        <form className={clsx(style['bingo-card__bingo'])}>
          <div
            className={clsx(style['bingo-card__grid'])}
            style={{ '--bingo-card-grid-columns': columns } as CSSProperties}
          >
            {issues.map(({ number, label }, id) => (
              <div key={label} className={clsx(style['bingo-card__cell'])}>
                {freeCellsIds.includes(id + 1) ? (
                  <Icon>
                    <img
                      src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-icon.svg"
                      alt="NL Design System logo icon"
                    />
                  </Icon>
                ) : (
                  <label className={clsx(style['bingo-card__cell-number'])}>
                    <input type="checkbox" {...register(String(number), { required: true })} />
                    {number}
                  </label>
                )}
              </div>
            ))}
          </div>
          {formState.isValid && (
            <div role="alert">
              <Alert type="info">
                <Paragraph>Bingo!🏅</Paragraph>
              </Alert>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export const BingoCards = () => {
  const { location } = useHistory();
  const params = new URLSearchParams(location.search);

  const players = parseInt(params.get('players'), 10) || 1;
  const columns = parseInt(params.get('columns'), 10) || 3;
  const freeCellsIds = [5];
  const skipIssues = [22, 21, 20, 18, 16, 14, 8, 7];
  const filteredIssues = issues.filter((issue) => !skipIssues.includes(issue.number));

  const bingoCards = Array(players)
    .fill(0)
    .map(() => {
      const cardIssues = shuffleArray([...filteredIssues]);
      return cardIssues.splice(0, columns * columns);
    });

  return (
    <div id="results">
      {bingoCards.map((issues, index) => (
        <BingoCard issues={issues} columns={columns} freeCellsIds={freeCellsIds} key={index} />
      ))}
    </div>
  );
};

export default BingoCards;
