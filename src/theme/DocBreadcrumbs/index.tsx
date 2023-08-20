import React from 'react';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import Breadcrumbs from '../Breadcrumbs';

export default function DocBreadcrumbs(): JSX.Element | null {
  const sidebarBreadcrumbs =
    useSidebarBreadcrumbs()?.map((item) => {
      if (item.type === 'category') {
        return { ...item, ...item.items.find((i) => i.type === 'link'), label: item.label };
      }
      return item;
    }) || [];

  const homeHref = useBaseUrl('/');
  const { pathname } = useLocation();
  const homeCrumb = { href: homeHref, label: 'Home' };

  const breadcrumbs = [homeCrumb, ...sidebarBreadcrumbs];
  const parentCrumb = (breadcrumbs.length > 2 && breadcrumbs[breadcrumbs.length - 2]) || homeCrumb;
  const mobileCrumb = parentCrumb.href !== pathname ? parentCrumb : homeCrumb;

  if (!breadcrumbs) {
    return null;
  }
  return (
    <Breadcrumbs breadcrumbs={breadcrumbs} mobileCrumb={mobileCrumb}></Breadcrumbs>
  );
}
