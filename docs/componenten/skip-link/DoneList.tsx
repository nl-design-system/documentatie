import { Link } from '@site/src/components/Link';
import { successCriteriaMap } from '@site/src/components/wcag22';
import { BadgeList, type HeadingProps } from '@utrecht/component-library-react';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import clsx from 'clsx';
import { useId } from 'react';
import './index.css';

/**
 * DoneListListItemProps defines expected variables for the item to test.
 *
 * title: H4 heading: A test to perform on a component.
 * sc: related succescriterium, not required.
 * component: the snippet with the description of the test.
 * status: passes/fails/conditional or any other string, not required.
 */
export interface DoneListItemProps {
  headingLevel: HeadingProps['level'];
  title: string;
  sc?: string;
  component: string;
  status?: string;
  diy: string;
}

/**
 * Defines the variables for the kind of test.
 *
 * testCategory: the kind of test to list in the details/summary, displayed as H3 for this list.
 * items: the test items.
 */
export interface DoneListProps {
  items: DoneListItemProps[];
}

/**
 * DoneListItem generates the test item.
 *
 * sc and status are optional.
 *
 */
export const DoneListItem = ({ title, sc, component, diy }: DoneListItemProps) => {
  const labelId = useId();

  const badgeTags = [];

  if (sc) {
    badgeTags.push(sc);

    const data = successCriteriaMap.get(sc);

    if (data?.conformance) {
      badgeTags.push(`Niveau ${data.conformance}`);
    }
  }
  return (
    <div className={clsx('done-list')}>
      <details className="done-list__content">
        <summary>
          <span id={labelId}>{title}</span>
        </summary>
        <div>
          <div>
            {component}
            <h4>Zelf maken?</h4>
            {diy}
          </div>
          <BadgeList className="done-list__badge-list">
            {badgeTags.map((tag, index) => {
              let badge = <DataBadge key={index}>{tag}</DataBadge>;

              const isSuccessCriterium = (str: string) => /^[0-9]+\.[0-9]+\.[0-9]+$/.test(str);

              if (isSuccessCriterium(tag)) {
                const data = successCriteriaMap.get(tag);

                // TODO: Use aria-label with SC title
                badge = (
                  <Link
                    key={index}
                    href={`/wcag/${tag}`}
                    aria-label={`WCAG Succescriterium ${data.sc} ${data.nl.title}`}
                    style={{ lineHeight: 1 }}
                  >
                    <DataBadge>{`WCAG ${tag}`}</DataBadge>
                  </Link>
                );
              }
              return badge;
            })}
          </BadgeList>
        </div>
      </details>
    </div>
  );
};

export const DoneList = ({ items }: DoneListProps) => {
  return (
    <div className="new-checklist-group">
      {items.map((item, idx) => (
        <DoneListItem key={idx} {...item} />
      ))}
    </div>
  );
};
