/**
 * ComponentCriteriaList generates a details/summary with acceptance criteria for a component.
 * The criteria are grouped by the kind of test, defines in testCategory.
 * Version: beta.
 *
 * To-do:
 *  Find a way to make it easier to add and change content for non developers like simplify the item arrays and the import of snippets.
 *  Display the status (we still need to agree on how).
 *  Store snippets in a more convenient directory structure for recycling.
 *  Make rendering WCAG and status conditional in the <dl>.
 *  Add an option to add more than one WCAG-success criteria.
 *  Heading level CriteriaList is now hardcoded as an h3, should be a variable.
 *  Heading level CriteriaListItem is now hardcoded as an h4, should be a variable.
 */

import { Heading, type HeadingProps, Link } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import style from './ComponentCriteriaList.module.css';
import { successCriteriaMap } from './wcag22';

/**
 * CriteriaListItemProps defines expected variables for the item to test.
 *
 * title: H4 heading: A test to perform on a component.
 * sc: related succescriterium, not required.
 * component: the snippet with the description of the test.
 * status: passes/fails/conditional or any other string, not required.
 */
export interface CriteriaListItemProps {
  headingLevel: HeadingProps['level'];
  title: string;
  sc?: string;
  component: string;
  status?: string;
}

/**
 * Defines the variables for the kind of test.
 *
 * testCategory: the kind of test to list in the details/summary, displayed as H3 for this list.
 * items: the test items.
 */
export interface CriteriaListProps {
  headingLevel: HeadingProps['level'];
  testCategory: string;
  items: CriteriaListItemProps[];
}

/**
 * CriteriaListItem generates the test item.
 *
 */
export const CriteriaListItem = ({ title, sc, status, component, headingLevel = 4 }: CriteriaListItemProps) => {
  const data = successCriteriaMap.get(sc);
  const scTitle = data ? `${sc} ${data.nl?.title}` : sc;

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
        {status && (
          <>
            <dt>Status</dt>
            <dd>{status}</dd>
          </>
        )}
      </dl>
      {component}
    </div>
  );
};

/**
 * CriteriaList renders the details, summary for the testCategory.
 *
 */
export const CriteriaList = ({ testCategory, items }: CriteriaListProps) => (
  <details className={style['task-list']}>
    <summary>
      <h3>{testCategory}</h3>
    </summary>
    {items.map((item, index) => (
      <CriteriaListItem key={index} {...item} />
    ))}
  </details>
);
