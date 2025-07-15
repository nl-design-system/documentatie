import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import { BreadcrumbNav } from '@site/src/components/BreadcrumbNav';
import type { ReactElement } from 'react';

export default function DocBreadcrumbs(): ReactElement | null {
  const sidebarBreadcrumbs = useSidebarBreadcrumbs()?.map((item) => ({ href: item.href, label: item.label })) || [];
  return <BreadcrumbNav breadcrumbs={sidebarBreadcrumbs} className={ThemeClassNames.docs.docBreadcrumbs} />;
}
