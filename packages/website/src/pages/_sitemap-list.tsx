import type { NavigationElementResolved } from '../navigation';
import { Heading } from '@components/heading/heading';
import { Link } from '@components/link/link';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/css-module';
import '@utrecht/unordered-list-css/dist/index.css';

export interface SitemapListProps {
  navigationGroup: NavigationElementResolved;
}

export const SitemapList = ({ navigationGroup }: SitemapListProps) => {
  if (navigationGroup.type !== 'group') throw new Error('navigationGroup is not the proper type');

  return (
    <>
      <Heading level={2}>
        {navigationGroup.index?.href ? (
          <Link href={navigationGroup?.index?.href}>{navigationGroup.label}</Link>
        ) : (
          navigationGroup.label
        )}
      </Heading>
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
              {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
              {item.type === 'group' && <SitemapListGroup items={item.items} />}
            </UnorderedListItem>
          ),
      )}
    </UnorderedList>
  );
};
