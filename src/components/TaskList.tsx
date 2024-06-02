import { Heading3, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCheckmark } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import style from './TaskList.module.css';

export const TaskList = ({ children }: PropsWithChildren<{}>) => <ul className={style['task-list']}>{children}</ul>;

export const TaskListItem = ({
  checked,
  title,
  description,
}: FC<{ title: string; description: string; checked: boolean }>) => (
  <li className={clsx(style['task-list-item'])}>
    <span
      className={clsx(style['task-list-item__marker'], {
        [style['task-list-item__marker--checked']]: checked,
      })}
    >
      {checked && <UtrechtIconCheckmark className={'utrecht-icon'} />}
    </span>
    <span>
      <Heading3>{title}</Heading3>
      <Paragraph>{description}</Paragraph>
    </span>
  </li>
);
