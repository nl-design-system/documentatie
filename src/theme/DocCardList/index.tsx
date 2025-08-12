/* eslint-disable @typescript-eslint/no-explicit-any */
import { filterDocCardListItems, useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCard from '@theme/DocCard';
import clsx from 'clsx';
import type { ReactElement } from 'react';

function DocCardListForCurrentSidebarCategory({ className }: any) {
  const category: any = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: any): ReactElement {
  const { items, className } = props;

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems: any = filterDocCardListItems(items);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className="col col--12 margin-bottom--lg doc-card-list">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
