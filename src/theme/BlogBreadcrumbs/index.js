import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';

export default function BlogBreadcrumbs(props) {
  const homeHref = useBaseUrl('/');
  const { pathname } = useLocation();
  const blogPaths = [
    {
      href: homeHref,
      label: 'Home'
    },
    {
      href: '/blog',
      label: 'Blog'
    }
  ];
  const currentPost = { href: '#', label: 'Current post' };

  const breadcrumbs = [...blogPaths, currentPost];
  const parentCrumb = (breadcrumbs.length > 2 && breadcrumbs[breadcrumbs.length - 2]) || blogPaths;
  const mobileCrumb = parentCrumb.href !== pathname ? parentCrumb : blogPaths;

  return (
    <div className="container margin-vert--sm">
      <div className="row">
        <div className="col">
          <Breadcrumbs breadcrumbs={breadcrumbs} mobileCrumb={mobileCrumb} />
        </div>
      </div>
    </div>
  );
}
