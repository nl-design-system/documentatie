import { UnorderedList } from '../unordered-list/unordered-list';
import { Card } from '../card/card';
import { isNavigationGroup, isNavigationItem, type NavigationElement } from '../../navigation';

export interface DocCardListProps {
  items: (NavigationElement & { labelLang?: string; descriptionLang?: string })[];
}

export const DocCardList = (props: DocCardListProps) => {
  return (
    <UnorderedList markers={false}>
      {(props.items || []).map((page) => {
        let heading, description, href;

        if (isNavigationItem(page)) {
          heading = page.label;
          description = page.description;
          href = page.href;
        }

        if (isNavigationGroup(page)) {
          heading = page.label;
          description = page?.index?.description;
          href = page.href;
        }

        if (page.labelLang) {
          heading = <span lang={page.labelLang}>{heading}</span>;
        }
        if (page.descriptionLang) {
          description = <span lang={page.descriptionLang}>{description}</span>;
        }

        return (
          <UnorderedList.Item key={href}>
            <Card heading={heading} description={description} href={href} />
          </UnorderedList.Item>
        );
      })}
    </UnorderedList>
  );
};
