import * as React from 'react';
import { Link } from '@site/src/components/Link';
import { successCriteriaMap } from '@site/src/components/wcag22';
import { BadgeList } from '@utrecht/component-library-react';
import { Paragraph } from '../../packages/website/src/components/paragraph/paragraph';
import { Button } from '../../packages/website/src/components/button/button';
import { Accordion, AccordionSection } from '../../packages/website/src/components/accordion/accordion';
import { Heading, type HeadingProps } from '../../packages/website/src/components/heading/heading';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import clsx from 'clsx';
import { useId, useState } from 'react';
import './Checklist.css';
import { Checkbox, Fieldset, FormField, FormLabel } from '@utrecht/component-library-react/css-module';

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
  children: React.ReactElement<ChecklistItemProps>[];
}

/**
 * CriteriaListItem generates the test item.
 *
 * sc is optional.
 *
 */
export const ChecklistItem = ({ title, sc, children, tags }: React.PropsWithChildren<ChecklistItemProps>) => {
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
      data-tags={tags.join(',')}
      className={clsx(
        'ma-new-checklist__item',
        tags.map((tag) => `ma-new-checklist__item--${tag}`),
      )}
    >
      {/* <Checkbox className="ma-new-checklist__checkbox" aria-labelledby={labelId} /> */}
      <AccordionSection
        label={
          <span className="ma-new-checklist__title" id={labelId}>
            {title}
          </span>
        }
      >
        <div className="ma-new-checklist__content ma-flow">
          {children && <div className="ma-flow">{children}</div>}
          <BadgeList className="ma-new-checklist__badge-list">
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
      </AccordionSection>
    </li>
  );
};

export const Checklist = ({ children, headingLevel }: ChecklistProps) => {
  const listRef = React.useRef<HTMLDivElement>(null);

  const [allChildren, setAllChildren] = useState<HTMLLIElement[]>([]);
  const [allTheTags, setAllTheTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [totalChildren, setTotalChildren] = useState<number>(0);
  const [shownChildren, setShownChildren] = useState<number>(0);

  const isSelectedTag = (tag: string) => selectedTags.includes(tag);

  const toggleTag = (tag: string, force?: boolean) => {
    const newSelected = typeof force === 'boolean' ? force : !isSelectedTag(tag);

    const newArray = newSelected ? [...selectedTags, tag] : selectedTags.filter((x) => x !== tag);

    setSelectedTags(newArray);
  };

  const fieldsetLabelId = useId();

  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const tags = new Set<string>();
    const items = Array.from(list.querySelectorAll<HTMLLIElement>('[data-tags]'));
    items.forEach((li) => {
      li.dataset.tags?.split(',')?.forEach((tag) => tag && tags.add(tag));
    });
    setAllChildren(items);
    setAllTheTags([...tags]);
    setTotalChildren(items.length);
    setSelectedTags([...tags]);
  }, []);

  React.useEffect(() => {
    const tagsToTest = selectedTags;
    const childrenToShow = [];
    const childrenToHide = [];

    allChildren.forEach((child) => {
      const tags = child.dataset.tags?.split(',') || [];
      if (tags.some((tag) => tagsToTest.includes(tag))) {
        childrenToShow.push(child);
      } else {
        childrenToHide.push(child);
      }
    });

    childrenToShow.forEach((child) => (child.hidden = false));
    childrenToHide.forEach((child) => (child.hidden = true));

    setShownChildren(childrenToShow.length);
  }, [selectedTags]);

  return (
    <div>
      <div className="ma-filter-block">
        <Fieldset aria-describedby="filter-results" aria-labelledby={fieldsetLabelId}>
          <Heading level={headingLevel} id={fieldsetLabelId}>
            Filter acceptatiecriteria voor:
          </Heading>
          {Array.from(allTheTags).map((tag) => (
            <FormField key={tag} type="checkbox">
              <Checkbox checked={isSelectedTag(tag)} id={tag} onChange={() => toggleTag(tag)} />
              <FormLabel htmlFor={tag}>{tag}</FormLabel>
            </FormField>
          ))}
        </Fieldset>
        <div>
          <>
            <Paragraph role="status">
              {shownChildren} van de {totalChildren} items zijn nu zichtbaar.
            </Paragraph>
            {shownChildren < totalChildren ? (
              <Button
                purpose="secondary"
                onClick={() => {
                  setSelectedTags(allTheTags);
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

      <Accordion as="ul" className="ma-new-checklist" role="list" ref={listRef}>
        {children}
      </Accordion>
    </div>
  );
};
