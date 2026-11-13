import { UnorderedList } from '../unordered-list/unordered-list.tsx';
import { Card } from '../card/card.tsx';
import {
  isNavigationGroup,
  isNavigationItem,
  type NavigationElement,
} from '@nl-design-system-community/documentation-index/src/navigation/index.ts';

export interface DocCardListProps {
  cardHeadingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  items: (NavigationElement & { labelLang?: string; descriptionLang?: string })[];
  excludeDocIDs?: string[];
}

export const DocCardList = (props: DocCardListProps) => {
  const docIDs = props.excludeDocIDs || [];

  const filteredItems = (props.items || []).filter((page) => {
    const filePath = page?.filePath?.replace('../../docs/', '')?.replace(/\.mdx?$/, '');
    return Boolean(filePath && docIDs.includes(filePath)) === false;
  });

  return (
    <UnorderedList markers={false}>
      {filteredItems.map((page) => {
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
