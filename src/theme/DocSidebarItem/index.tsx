import type { Props } from '@theme/DocSidebarItem';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import type { ReactElement } from 'react';

export default function DocSidebarItem({ item, ...props }: Props): ReactElement | null {
  switch (item.type) {
    case 'category':
      return <DocSidebarItemCategory item={item} {...props} />;
    case 'html':
      return <DocSidebarItemHtml item={item} {...props} />;
    case 'link':
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
}
