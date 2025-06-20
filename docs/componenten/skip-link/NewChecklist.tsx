import { Link } from '@site/src/components/Link';
import { successCriteriaMap } from '@site/src/components/wcag22';
import { BadgeList, Button, Checkbox, type HeadingProps } from '@utrecht/component-library-react';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import clsx from 'clsx';
import { useId, useState } from 'react';
import './index.css';

/**
 * CriteriaListItemProps defines expected variables for the item to test.
 *
 * title: H4 heading: A test to perform on a component.
 * sc: related succescriterium, not required.
 * component: the snippet with the description of the test.
 * status: passes/fails/conditional or any other string, not required.
 */
export interface NewChecklistItemProps {
  headingLevel: HeadingProps['level'];
  title: string;
  sc?: string;
  component: string;
  status?: string;
  tags: string[];
}

/**
 * Defines the variables for the kind of test.
 *
 * testCategory: the kind of test to list in the details/summary, displayed as H3 for this list.
 * items: the test items.
 */
export interface NewChecklistProps {
  items: NewChecklistItemProps[];
}

/**
 * CriteriaListItem generates the test item.
 *
 * sc and status are optional.
 *
 */
export const NewChecklistItem = ({ title, sc, component, tags }: NewChecklistItemProps) => {
  const labelId = useId();

  const badgeTags = [...tags];

  if (sc) {
    badgeTags.push(sc);

    const data = successCriteriaMap.get(sc);

    if (data?.conformance) {
      badgeTags.push(`Niveau ${data.conformance}`);
    }
  }
  return (
    <div
      className={clsx(
        'new-checklist',
        tags.map((tag) => `new-checklist--${tag}`),
      )}
    >
      <Checkbox className="new-checklist__checkbox" aria-labelledby={labelId} />
      <details className="new-checklist__content">
        <summary>
          <span id={labelId}>{title}</span>
        </summary>
        <div>
          <div>{component}</div>
          <BadgeList className="new-checklist__badge-list">
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

export const NewChecklist = ({ items }: NewChecklistProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const isSelectedTag = (tag: string) => selectedTags.includes(tag);

  const toggleTag = (tag: string, force?: boolean) => {
    const newSelected = typeof force === 'boolean' ? force : !isSelectedTag(tag);

    const newArray = newSelected ? [...selectedTags, tag] : selectedTags.filter((x) => x !== tag);

    setSelectedTags(newArray);
  };

  const allTags = items.reduce((set, item) => {
    item.tags.forEach((tag) => {
      set.add(tag);
    });
    return set;
  }, new Set<string>());

  const filterRequireEvery = false;

  const badgeListLabelId = useId();

  const filteredItems = items.filter(({ tags }) => {
    if (selectedTags.length === 0) {
      return true;
    } else if (filterRequireEvery) {
      return selectedTags.every((tag) => tags.includes(tag));
    } else {
      return tags.some((tag) => selectedTags.includes(tag));
    }
  });
  const hiddenItemCount = items.length - filteredItems.length;

  return (
    <div>
      <div className="ma-filter-block">
        <span id={badgeListLabelId}>Kies welke onderwerpen je wilt zien: </span>
        <BadgeList role="group" aria-labelledby={badgeListLabelId} className="ma-badge-toggle-button-group">
          {Array.from(allTags.values()).map((tag, index) => (
            <Button
              onClick={() => toggleTag(tag)}
              pressed={isSelectedTag(tag)}
              appearance="subtle"
              key={index}
              className="utrecht-button--contents"
            >
              <DataBadge>{tag}</DataBadge>
            </Button>
          ))}
        </BadgeList>
        <div>
          {selectedTags.length >= 1 ? (
            <>
              <p role="status">Er wordt op {selectedTags.length} onderwerpen gefilterd.</p>
              <p>
                {hiddenItemCount} van de {items.length} acceptatiecriteria zijn nu niet zichtbaar.
              </p>
              <Button
                appearance="secondary-action-button"
                onClick={() => {
                  setSelectedTags([]);
                }}
              >
                Toon alles
              </Button>
            </>
          ) : (
            'Alle onderwerpen worden getoond.'
          )}
        </div>{' '}
      </div>

      <div className="new-checklist-group">
        {filteredItems.map((args, index) => (
          <NewChecklistItem key={index} {...args} />
        ))}
      </div>
    </div>
  );
};
