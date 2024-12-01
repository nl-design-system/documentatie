/*
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
// import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import DocCardList from '../theme/DocCardList';

interface OverviewPageProps extends HTMLAttributes<HTMLDivElement> {
  excludeDocIDs: string[];
  className: string;
}

const excludeRecusively = (items: PropSidebarItem[], excludeDocIDs: string[]) =>
  items.reduce((items, item) => {
    if (item.type === 'link') {
      if (excludeDocIDs.includes(item.docId as string)) {
        return items;
      }
      return [...items, item];
    }
    if (item.type === 'category') {
      return [...items, { ...item, items: excludeRecusively(item.items, excludeDocIDs) }];
    }
    return items;
  }, []);

export const OverviewPage = ({ excludeDocIDs = [], className, ...restProps }: OverviewPageProps) => {
  // const category = useCurrentSidebarCategory();
  const category = { items: [] };

  return (
    <div {...restProps} className={clsx('margin-top--lg', className)}>
      <DocCardList items={excludeRecusively(category.items, excludeDocIDs)} />
    </div>
  );
};
*/

export const OverviewPage = () => {
  return <div></div>;
};
