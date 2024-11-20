import { IconMoodHappy, IconMoodSad } from '@tabler/icons-react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { createContext, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import style from './Guideline.module.css';
interface GuidelineProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: ReactNode;
  appearance: 'do' | 'dont';
  figure?: boolean;
}

export const CodeExampleContext = createContext({});

export const Guideline = ({ title, appearance, description, children, figure }: PropsWithChildren<GuidelineProps>) => {
  const guidelineLabel = {
    do: 'Doen',
    dont: 'Niet doen',
  };
  const ContainerElement = figure ? 'figure' : 'div';
  const CaptionElement = figure ? 'figcaption' : 'div';

  return (
    <ContainerElement
      className={clsx(style['nlds-guideline'], style[`nlds-guideline--${appearance}`])}
      id={typeof title === 'string' ? title?.toLowerCase().replace(/\s/g, '-') : undefined}
    >
      <CaptionElement className={clsx(style['nlds-guideline__description'])}>
        {appearance === 'dont' ? (
          <>
            <Paragraph className={clsx(style['nlds-guideline__badge'], style[`nlds-guideline__badge--${appearance}`])}>
              <IconMoodSad aria-hidden="true" role="presentation" className={style['nlds-guideline__icon']} />
              <span className={style['nlds-guideline__title']}>{guidelineLabel['dont']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        ) : (
          <>
            <Paragraph className={clsx(style['nlds-guideline__badge'], style[`nlds-guideline__badge--${appearance}`])}>
              <IconMoodHappy aria-hidden="true" role="presentation" className={style['nlds-guideline__icon']} />
              <span className={style['nlds-guideline__title']}>{guidelineLabel['do']}</span>
            </Paragraph>
            <Paragraph>{title}</Paragraph>
          </>
        )}
        {description}
      </CaptionElement>
      <div className={clsx(style['nlds-guideline__example'])}>
        <CodeExampleContext.Provider value={{ title: title, type: guidelineLabel[appearance] }}>
          {children}
        </CodeExampleContext.Provider>
      </div>
    </ContainerElement>
  );
};
