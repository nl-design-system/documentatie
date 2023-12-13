import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import style from './Bingo.module.css';

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
    <div className={style['bingo']}>
      <div className={style['bingo__form']}>
        {bingoNumbers.map((bingoNumber) => (
          <div className={style['bingo__number']} key={bingoNumber}>
            <input
              {...register(`number-${bingoNumber}`)}
              type="checkbox"
              className={style['bingo__input']}
              id={`number-${bingoNumber}`}
              defaultChecked={bingoNumber === 'Free'}
              disabled={bingoNumber === 'Free'}
            />
            <label htmlFor={`number-${bingoNumber}`} className={style['bingo__label']}>
              {bingoNumber}
            </label>
          </div>
        ))}
      </div>
      <div className={style['bingo_items']}>
        <OrderedList>
          {items.map((item) => {
            return (
              <OrderedListItem
                key={`item-${item}`}
                className={clsx(style['bingo-item'], item === 'Free' && style['bingo-item--checked'])}
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
