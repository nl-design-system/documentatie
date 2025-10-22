import { Link } from '@site/src/components/Link';
import { successCriteriaMap } from '@site/src/components/wcag22';
import { BadgeList, Button, type HeadingProps } from '@utrecht/component-library-react';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import clsx from 'clsx';
import { useId, useState } from 'react';
import './Checklist.css';
import { Checkbox, Fieldset, FormField, FormLabel, Heading } from '@utrecht/component-library-react/css-module';

/**
 * ChecklistItemProps defines expected variables for the item to test.
 *
 * title: H4 heading: A test to perform on a component.
 * sc: related succescriterium, not required.
 * component: the snippet with the description of the test.
 */
export interface ChecklistItemProps {
  headingLevel: HeadingProps['level'];
  title: string;
  sc?: string;
  component: string;
  tags: string[];
}

/**
 * Defines the variables for the kind of test.
 *
 * testCategory: the kind of test to list in the details/summary, displayed as H3 for this list.
 * items: the test items.
 */
export interface ChecklistProps {
  headingLevel: HeadingProps['level'];
  items: ChecklistItemProps[];
}

/**
 * CriteriaListItem generates the test item.
 *
 * sc is optional.
 *
 */
export const ChecklistItem = ({ title, sc, component, tags }: ChecklistItemProps) => {
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
    <li
      className={clsx(
        'new-checklist__item',
        tags.map((tag) => `new-checklist__item--${tag}`),
      )}
    >
      {/* <Checkbox className="new-checklist__checkbox" aria-labelledby={labelId} /> */}
      <details>
        <summary>
          <span className="new-checklist__title" id={labelId}>
            {title}
          </span>
        </summary>
        <div className="new-checklist__content">
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
    </li>
  );
};

export const Checklist = ({ items, headingLevel }: ChecklistProps) => {
  const allTags = items.reduce((set, item) => {
    item.tags.forEach((tag) => {
      set.add(tag);
    });
    return set;
  }, new Set<string>());

  const [selectedTags, setSelectedTags] = useState<string[]>(Array.from(allTags.values()));

  const isSelectedTag = (tag: string) => selectedTags.includes(tag);

  const toggleTag = (tag: string, force?: boolean) => {
    const newSelected = typeof force === 'boolean' ? force : !isSelectedTag(tag);

    const newArray = newSelected ? [...selectedTags, tag] : selectedTags.filter((x) => x !== tag);

    setSelectedTags(newArray);
  };

  const fieldsetLabelId = useId();

  const filteredItems =
    selectedTags.length >= 1
      ? items.filter(({ tags }) => {
          return tags.some((tag) => selectedTags.includes(tag));
        })
      : items;

  const hiddenItemCount = items.length - filteredItems.length;

  return (
    <div>
      <div className="ma-filter-block">
        <Fieldset aria-describedby="filter-results" aria-labelledby={fieldsetLabelId}>
          <Heading level={headingLevel} id={fieldsetLabelId}>
            Filter acceptatiecriteria voor:
          </Heading>
          {Array.from(allTags.values()).map((tag) => (
            <FormField key={tag} type="checkbox">
              <Checkbox
                defaultChecked={isSelectedTag(tag)}
                checked={isSelectedTag(tag)}
                id={tag}
                onChange={() => toggleTag(tag)}
              />
              <FormLabel htmlFor={tag}>{tag}</FormLabel>
            </FormField>
          ))}
        </Fieldset>
        <div>
          <>
            <p role="status">
              {items.length - hiddenItemCount} van de {items.length} items zijn nu zichtbaar.
            </p>
            {hiddenItemCount >= 1 ? (
              <Button
                appearance="secondary-action-button"
                onClick={() => {
                  setSelectedTags(Array.from(allTags.values()));
                }}
              >
                Toon alles
              </Button>
            ) : (
              <></>
            )}
          </>
        </div>
      </div>

      <ul className="new-checklist" role="list">
        {filteredItems.map((args, index) => (
          <ChecklistItem key={index} {...args} />
        ))}
      </ul>
    </div>
  );
};
