import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import DocCardList from '../theme/DocCardList';

interface OverviewPageProps extends HTMLAttributes<HTMLDivElement> {
  excludeDocIDs: string[];
  className: string;
}

const filterRecursively = (items: PropSidebarItem[], excludeDocIDs: string[]) =>
  items.reduce((items, item) => {
    if (item.type === 'link') {
      if (excludeDocIDs.includes(item.docId as string)) {
        return items;
      }
      return [...items, item];
    }
    if (item.type === 'category') {
      return [...items, { ...item, items: filterRecursively(item.items, excludeDocIDs) }];
    }
    return items;
  }, []);

export const OverviewPage = ({ excludeDocIDs = [], className, ...restProps }: OverviewPageProps) => {
  const category = useCurrentSidebarCategory();

  return (
    <div {...restProps} className={clsx('margin-top--lg', className)}>
      <DocCardList items={filterRecursively(category.items, excludeDocIDs)} />
    </div>
  );
};
