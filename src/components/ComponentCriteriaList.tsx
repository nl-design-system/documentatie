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
import { successCriteriaMap } from './wcag22';
import { AccordionProvider } from '@utrecht/component-library-react';
import './ComponentCriteriaList.css';

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
 * sc and status are optional.
 *
 */
export const CriteriaListItem = ({ title, sc, status, component }: CriteriaListItemProps) => {
  const data = successCriteriaMap.get(sc);
  const scTitle = data ? `${sc} ${data.nl?.title}` : sc;

  return (
    <div className="component-criteria-section">
      <Heading appearance="utrecht-heading-4" level={4} className="component-criteria-section__heading">
        {title}
      </Heading>
      {(sc || status) && (
        <dl className="component-criteria-section__dl">
          {sc && (
            <>
              <dt className="component-criteria-section__dt">WCAG</dt>
              <dd className="component-criteria-section__dd">
                <Link href={`/wcag/${sc}`}>{scTitle}</Link>
              </dd>
            </>
          )}
          {status && (
            <>
              <dt className="component-criteria-section__dt">Status</dt>
              <dd className="component-criteria-section__dl">{status}</dd>
            </>
          )}
        </dl>
      )}
      {component}
    </div>
  );
};

/**
 * CriteriaList renders the details, summary for the testCategory.
 *
 */
export const CriteriaList = ({ testCategory, items }: CriteriaListProps) => (
  <AccordionProvider
    sections={[
      {
        className: 'utrecht-accordion--nlds-subtle',
        headingLevel: 3,
        expanded: false,
        // TODO: Make Pull Request for Utrecht Accordion to allow `ReactNode`
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (<span>{testCategory}</span>) as any,
        body: items.map((item, index) => <CriteriaListItem key={index} {...item} />),
      },
    ]}
  />
);
