import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import { Breadcrumb } from '../../components/Breadcrumbs';

interface BlogBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function BlogBreadcrumbs({ breadcrumbs = [] }: BlogBreadcrumbsProps) {
  const homeHref = useBaseUrl('/');
  const { pathname } = useLocation();

  const homeCrumb = {
    href: homeHref,
    label: 'Home',
  };

  const allBreadcrumbs = [
    homeCrumb,
    {
      href: '/blog',
      label: 'Blog',
    },
    ...breadcrumbs,
  ];

  const parentCrumb = allBreadcrumbs.length > 2 && allBreadcrumbs[allBreadcrumbs.length - 2];
  const mobileCrumb = parentCrumb && parentCrumb.href !== pathname ? parentCrumb : homeCrumb;

  return (
    <div className="container margin-vert--sm">
      <div className="row">
        <div className="col">
          <Breadcrumbs breadcrumbs={allBreadcrumbs} mobileCrumb={mobileCrumb} />
        </div>
      </div>
    </div>
  );
}
