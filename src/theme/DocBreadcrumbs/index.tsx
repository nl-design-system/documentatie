import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';

export default function DocBreadcrumbs(): JSX.Element | null {
  const sidebarBreadcrumbs =
    useSidebarBreadcrumbs()?.map((item) => {
      if (item.type === 'category') {
        return { ...item, ...item.items.find((i) => i.type === 'link'), label: item.label };
      }
      return { href: item.href, label: item.label };
    }) || [];

  return <Breadcrumbs breadcrumbs={sidebarBreadcrumbs} className={ThemeClassNames.docs.docBreadcrumbs} />;
}
