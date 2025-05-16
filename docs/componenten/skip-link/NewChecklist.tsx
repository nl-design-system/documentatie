import { Link } from '@site/src/components/Link';
import { successCriteriaMap } from '@site/src/components/wcag22';
import {
  BadgeList,
  Button,
  Checkbox,
  DataBadge,
  Heading,
  type CheckboxProps,
  type HeadingProps,
} from '@utrecht/component-library-react';
import './index.css';
import clsx from 'clsx';
import { CheckboxGroup } from '@utrecht/checkbox-group-react';
import { useId, useState } from 'react';

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
export const NewChecklistItem = ({ title, sc, status, component, headingLevel = 4, tags }: CriteriaListItemProps) => {
  const labelId = useId();

  const badgeTags = [tags];

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
        <div>{component}</div>
      </details>

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

  const handleTagCheckbox = (evt) => {
    if (evt.target instanceof HTMLInputElement) {
      // Add the tag that is associated with this checkbox to the list of selected tags
      // const newArray = evt.target.checked
      //   ? selectedTags.filter((x) => x !== evt.target.value)
      //   // : [...selectedTags, evt.target.value];

      const tag = evt.target.value || '';

      toggleTag(tag, evt.target.checked);
    }
  };

  const allTags = items.reduce((set, item) => {
    item.tags.forEach((tag) => {
      set.add(tag);
    });
    return set;
  }, new Set<string>());
  console.log(Array.from(allTags.values()));
  const filterRequireEvery = false;

  const badgeListLabelId = useId();

  return (
    <div>
      <div>
        <CheckboxGroup
          label="Wie ben jij?"
          options={[
            { value: 'developer', label: 'Developer' },
            { value: 'designer', label: 'Designer' },
            { value: 'content', label: 'Content-maker' },
          ].map((item) => ({
            ...item,
            onInput: handleTagCheckbox,
          }))}
        />
        <CheckboxGroup
          label="Wat wil je weten?"
          options={[
            { value: 'generic', label: 'Generic things' },
            { value: 'keyboard', label: 'Keyboard things' },
          ].map((item) => ({
            ...item,
            onInput: handleTagCheckbox,
          }))}
        />
      </div>
      <div>
        <span id={badgeListLabelId}>Choose from the following tags: </span>
        <BadgeList role="group" aria-labelledby={badgeListLabelId} className="ma-badge-toggle-group">
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
      </div>
      <div>
        Displaying the following tags:{' '}
        <BadgeList>
          {selectedTags.map((tag, index) => (
            <DataBadge key={index}>{tag}</DataBadge>
          ))}
        </BadgeList>
      </div>
      <div className="new-checklist-group">
        {items
          .filter(({ tags }) => {
            if (selectedTags.length === 0) {
              return true;
            } else if (filterRequireEvery) {
              return selectedTags.every((tag) => tags.includes(tag));
            } else {
              return tags.some((tag) => selectedTags.includes(tag));
            }
          })
          .map((args, index) => (
            <NewChecklistItem key={index} {...args} />
          ))}
      </div>
    </div>
  );
};
