import { Heading, type HeadingProps, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCheckmark } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import style from './TaskList.module.css';

export const TaskList = ({ children }: PropsWithChildren<{}>) => <ul className={style['task-list']}>{children}</ul>;

interface TaskListItemProps {
  title: string;
  description: string;
  checked: boolean;
  headingLevel: HeadingProps['level'];
}

export const TaskListItem = ({ checked, title, description, headingLevel = 3 }: TaskListItemProps) => {
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
        <Heading appearance="utrecht-heading-3" level={headingLevel}>
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </li>
  );
};
