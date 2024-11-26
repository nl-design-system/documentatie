import { Alert, Heading1, Icon, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import style from './BingoCard.module.css';

interface Issue {
  number: number;
  label: string;
}

interface BingoCardProps {
  issues: Issue[];
  columns: number;
  freeCellsIds: number[];
}

export const BingoCard = ({ issues, columns, freeCellsIds }: BingoCardProps) => {
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
