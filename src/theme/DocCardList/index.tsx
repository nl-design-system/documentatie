// import { filterDocCardListItems } from '@docusaurus/theme-common';
// import DocCard from '@theme/DocCard';
// import { filterDocCardListItems } from '@docusaurus/theme-common';

import type { Props } from '@theme/DocCardList';
import clsx from 'clsx';
import type { ReactElement } from 'react';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  // const category = useCurrentSidebarCategory();
  const category = { items: [] };

  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: Props): ReactElement {
  const DocCard = ({ item: _ }) => null;
  return null;
  const { items, className } = props;

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  // const filteredItems = filterDocCardListItems(items);
  const filteredItems = [];
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
