import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import './DefinitionList.css';

export const DefinitionList = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dl className={clsx('definition-list', className)}>{children}</dl>
);

export const Definition = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx('definition', className)}>{children}</div>
);

export const DefinitionTitle = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dt className={clsx('definition__title', className)}>{children}</dt>
);

export const DefinitionData = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <dd className={clsx('definition__data', className)}>{children}</dd>
);
