import { UnorderedList } from '../unordered-list/unordered-list';
import { Card } from '../card/card';
import { isNavigationGroup, isNavigationItem, type NavigationElement } from '../../navigation';

export interface DocCardListProps {
  cardHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  items: (NavigationElement & { labelLang?: string; descriptionLang?: string })[];
}

export const DocCardList = (props: DocCardListProps) => {
  return (
    <UnorderedList markers={false}>
      {(props.items || []).map((page) => {
        let heading, description, href, lang;

        if (isNavigationItem(page)) {
          heading = page.label;
          description = page.description;
          href = page.href;
          lang = page.lang;
        }

        if (isNavigationGroup(page)) {
          heading = page.label;
          description = page?.index?.description;
          href = page.href;
          lang = page?.index?.lang;
        }

        if (page.labelLang) {
          heading = <span lang={page.labelLang}>{heading}</span>;
        }
        if (page.descriptionLang) {
          description = <span lang={page.descriptionLang}>{description}</span>;
        }

        const metadata = (page as { metadata?: string })?.metadata;

        return (
          <UnorderedList.Item key={href}>
            <Card
              heading={heading}
              headingLevel={props.cardHeadingLevel}
              description={description}
              href={href}
              metadata={metadata}
              lang={lang}
            />
          </UnorderedList.Item>
        );
      })}
    </UnorderedList>
  );
};
