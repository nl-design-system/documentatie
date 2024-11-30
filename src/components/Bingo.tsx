import Head from '@docusaurus/Head';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Bingo.css';

interface BingoProps {
  items: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];
}

export const Bingo = ({ items }: BingoProps) => {
  const bingoNumbers: Array<string | number> = Array(25)
    .fill(0)
    .map((_, index) => index + 1)
    .filter((n) => n !== 13)
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

  bingoNumbers.splice(12, 0, 'Free');
  items.splice(12, 0, 'Free');

  const { register } = useForm();

  return (
    <div className="bingo">
      <Head>
        <meta name="argos" content="false" />
      </Head>
      <div className="bingo__form">
        {bingoNumbers.map((bingoNumber) => (
          <div className="bingo__number" key={bingoNumber}>
            <input
              {...register(`number-${bingoNumber}`)}
              type="checkbox"
              className="bingo__input"
              id={`number-${bingoNumber}`}
              defaultChecked={bingoNumber === 'Free'}
              disabled={bingoNumber === 'Free'}
            />
            <label htmlFor={`number-${bingoNumber}`} className="bingo__label">
              {bingoNumber}
            </label>
          </div>
        ))}
      </div>
      <div className="bingo_items">
        <OrderedList>
          {items.map((item) => {
            return (
              <OrderedListItem
                key={`item-${item}`}
                className={clsx('bingo-item', item === 'Free' && 'bingo-item--checked')}
              >
                {item}
              </OrderedListItem>
            );
          })}
        </OrderedList>
      </div>
    </div>
  );
};
