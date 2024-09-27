import { Heading, type HeadingProps, Link } from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconCheckmark } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';
import style from './TaskList.module.css';
import { successCriteriaMap } from './wcag22';

export interface WcagListItemProps {
  sc: string;
  description?: string;
  checked?: boolean;
  headingLevel: HeadingProps['level'];
}

export interface WcagListProps {
  headingLevel: HeadingProps['level'];
  items: WcagListItemProps[];
}

export const WcagListItem = ({ sc, checked, description, headingLevel = 3 }: WcagListItemProps) => {
  const data = successCriteriaMap.get(sc);
  const title = data ? `${sc} ${data.nl?.title}` : sc;
  return (
    <li className={clsx(style['task-list-item'])}>
      <div className={clsx(style['task-list-item__marker'], checked && style['task-list-item__marker--checked'])}>
        <span className={style['task-list-item__marker-label']}>{checked ? 'Afgevinkt. ' : 'Niet afgevinkt. '}</span>
        {checked && <UtrechtIconCheckmark aria-hidden={true} className={'utrecht-icon'} />}
      </div>
      <div>
        <Heading appearance="utrecht-heading-3" level={headingLevel}>
          <Link href={`/wcag/${sc}`}>{title}</Link>
        </Heading>
        {description}
      </div>
    </li>
  );
};

export const WcagList = ({ headingLevel, items }: WcagListProps) => (
  <ul className={style['task-list']}>
    {items.map((item, index) => (
      <WcagListItem key={index} headingLevel={headingLevel} {...item} />
    ))}
  </ul>
);
