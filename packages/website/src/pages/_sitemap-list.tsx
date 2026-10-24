import type {
  NavigationElementResolved,
  NavigationGroupResolved,
} from '@nl-design-system-community/documentation-index/src/navigation';
import { Heading } from '@nl-design-system-community/documentation-components/src/heading/heading';
import { Link } from '@nl-design-system-community/documentation-components/src/link/link';
import { Paragraph } from '@nl-design-system-community/documentation-components/src/paragraph/paragraph';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/css-module';
import '@utrecht/unordered-list-css/dist/index.css';

export interface SitemapListProps {
  navigationGroup: NavigationElementResolved;
}

function getAllSubItems(navigationGroup: NavigationGroupResolved, list: NavigationElementResolved[] = []) {
  navigationGroup.items.forEach((item) => {
    if (item.type === 'group') {
      if (item.index && !item.index.unlisted) {
        list.push(item.index);
      }
      getAllSubItems(item, list);
    } else {
      if (!item.unlisted) {
        list.push(item);
      }
    }
  });
  return list.flat();
}

export const SitemapList = ({ navigationGroup }: SitemapListProps) => {
  if (navigationGroup.type !== 'group') throw new Error('navigationGroup is not the proper type');

  const allSubItems = getAllSubItems(navigationGroup);

  return (
    <>
      <Heading level={2}>
        {navigationGroup.index?.href ? (
          <Link href={navigationGroup?.index?.href} lang={navigationGroup?.index?.lang}>
            {navigationGroup.label}
          </Link>
        ) : (
          <span lang={navigationGroup.lang}>{navigationGroup.label}</span>
        )}
      </Heading>
      <Paragraph>{allSubItems.length} pagina's</Paragraph>
      <SitemapListGroup items={navigationGroup.items} />
    </>
  );
};

export interface SitemapListGroupProps {
  items: NavigationElementResolved[];
}

export const SitemapListGroup = ({ items }: SitemapListGroupProps) => {
  return (
    <UnorderedList>
      {items.map(
        (item, index) =>
          !item.unlisted && (
            <UnorderedListItem key={`item-${index}`}>
              {item.href ? (
                <Link href={item.href} lang={item.lang}>
                  {item.label}
                </Link>
              ) : (
                <span lang={item.lang}>{item.label}</span>
              )}
              {item.type === 'group' && <SitemapListGroup items={item.items} />}
            </UnorderedListItem>
          ),
      )}
    </UnorderedList>
  );
};
