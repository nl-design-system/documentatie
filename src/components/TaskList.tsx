import { Heading, type HeadingProps } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCheckmark } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React, { type PropsWithChildren, type ReactNode } from 'react';
import style from './TaskList.module.css';

export interface TaskListProps {}
export const TaskList = ({ children }: PropsWithChildren<TaskListProps>) => (
  <ul className={style['task-list']}>{children}</ul>
);

export interface TaskListItemProps {
  title: ReactNode;
  description: string;
  checked: boolean;
  headingLevel: HeadingProps['level'];
}

export const TaskListItem = ({
  checked,
  children,
  title,
  description,
  headingLevel = 3,
}: PropsWithChildren<TaskListItemProps>) => {
  return (
    <li className={clsx(style['task-list-item'])}>
      <div className={clsx(style['task-list-item__marker'], checked && style['task-list-item__marker--checked'])}>
        <span className={style['task-list-item__marker-label']}>{checked ? 'Afgevinkt. ' : 'Niet afgevinkt. '}</span>
        {checked && <UtrechtIconCheckmark aria-hidden={true} className={'utrecht-icon'} />}
      </div>
      <div>
        <Heading appearance="utrecht-heading-3" level={headingLevel}>
          {title}
        </Heading>
        {description}
        {children}
      </div>
    </li>
  );
};
