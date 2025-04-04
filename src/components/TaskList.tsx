import { Heading, type HeadingProps } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCheckmark } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import type { PropsWithChildren, ReactNode } from 'react';
import './TaskList.css';

export type TaskListProps = object;
export const TaskList = ({ children }: PropsWithChildren<TaskListProps>) => <ul className="task-list">{children}</ul>;

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
    <li className={clsx('task-list-item')}>
      <div className={clsx('task-list-item__marker', checked && 'task-list-item__marker--checked')}>
        <span className={'task-list-item__marker-label'}>{checked ? 'Afgevinkt. ' : 'Niet afgevinkt. '}</span>
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
