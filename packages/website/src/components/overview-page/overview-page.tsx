import { isNavigationGroup, isNavigationItem, type NavigationElement } from '../../navigation';
import { Card } from '@rijkshuisstijl-community/card-react';
import '@rijkshuisstijl-community/card-css';
import { UnorderedList } from '@amsterdam/design-system-react';
import '@amsterdam/design-system-css/dist/unordered-list/unordered-list.css';

export interface OverviewPageProps {
  pages: NavigationElement[];
}

export const OverviewPage = (props: OverviewPageProps) => {
  return (
    <UnorderedList markers={false}>
      {(props.pages || []).map((page) => {
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

        return (
          <UnorderedList.Item key={href}>
            <Card heading={heading} description={description} href={href} />
          </UnorderedList.Item>
        );
      })}
    </UnorderedList>
  );
};
