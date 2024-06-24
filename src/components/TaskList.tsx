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
}: FC<{ title: string; description: string; checked: boolean }>) => {
  return (
    <li className={clsx(style['task-list-item'])}>
      <div
        className={clsx(style['task-list-item__marker'], {
          [style['task-list-item__marker--checked']]: checked,
        })}
      >
        <span className={style['task-list-item__marker-label']}>{checked ? 'Afgevinkt. ' : 'Niet afgevinkt. '}</span>
        {checked && <UtrechtIconCheckmark aria-hidden={true} className={'utrecht-icon'} />}
      </div>
      <div>
        <Heading3 role="presentation">{title}</Heading3>
        <Paragraph>{description}</Paragraph>
      </div>
    </li>
  );
};
