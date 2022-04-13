import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';
import style from './DefinitionList.module.css';

export const DefinitionList = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dl className={clsx(style['definition-list'], className)}>{children}</dl>
);

export const Definition = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx(style['definition'], className)}>{children}</div>
);

export const DefinitionTitle = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dt className={clsx(style['definition__title'], className)}>{children}</dt>
);

export const DefinitionData = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dd className={clsx(style['definition__data'], className)}>{children}</dd>
);
