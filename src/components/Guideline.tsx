import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { IconMoodSad, IconMoodHappy } from '@tabler/icons-react';
import style from './Guideline.module.css';
import clsx from 'clsx';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';

interface GuidelineProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: ReactNode;
  appearance: 'do' | 'dont';
}

export const Guideline = ({ title, appearance, description, children }: PropsWithChildren<GuidelineProps>) => {
  const guidelineLabel = {
    do: 'Doen',
    dont: 'Niet doen',
  };

  return (
    <div
      className={clsx(style['nlds-guideline'], style[`nlds-guideline--${appearance}`])}
      id={title?.toLowerCase().replace(/\s/g, '-')}
    >
      <div className={clsx(style['nlds-guideline__description'])}>
        {appearance === 'dont' ? (
          <>
            <Paragraph className={clsx(style['nlds-guideline__badge'], style[`nlds-guideline__badge--${appearance}`])}>
              <IconMoodSad className={style['nlds-guideline__icon']} />
              <span className={style['nlds-guideline__title']}>{guidelineLabel['dont']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        ) : (
          <>
            <Paragraph className={clsx(style['nlds-guideline__badge'], style[`nlds-guideline__badge--${appearance}`])}>
              <IconMoodHappy className={style['nlds-guideline__icon']} />
              <span className={style['nlds-guideline__title']}>{guidelineLabel['do']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        )}
        {description}
      </div>
      <div className={clsx(style['nlds-guideline__example'])}>{children}</div>
    </div>
  );
};
