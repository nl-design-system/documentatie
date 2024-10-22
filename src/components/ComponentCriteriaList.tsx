import { Heading, type HeadingProps, Link } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import style from './ComponentCriteriaList.module.css';
import { successCriteriaMap } from './wcag22';

export interface CriteriaListItemProps {
  title: string;
  sc: string;
  component?: string;
  status: string;
  headingLevel: HeadingProps['level'];
}

export interface CriteriaListProps {
  headingLevel: HeadingProps['level'];
  testList: string;
  items: CriteriaListItemProps[];
}

export const CriteriaListItem = ({ title, sc, status, component, headingLevel = 3 }: CriteriaListItemProps) => {
  const data = successCriteriaMap.get(sc);
  const scTitle = data ? `${sc} ${data.nl?.title}` : sc;
  // const description = require('./appelepap.mdx');
  return (
    <div>
      <Heading appearance="utrecht-heading-4" level={headingLevel}>
        {title}
      </Heading>
      <dl>
        <dt>WCAG</dt>
        <dd>
          <Link href={`/wcag/${sc}`}>{scTitle}</Link>
        </dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
      {component}
    </div>
  );
};

export const CriteriaList = ({ headingLevel, testList, items }: CriteriaListProps) => (
  <details className={style['task-list']}>
    <summary>
      <h3>{testList}</h3>
    </summary>
    {items.map((item, index) => (
      <CriteriaListItem key={index} headingLevel={headingLevel} {...item} />
    ))}
  </details>
);
