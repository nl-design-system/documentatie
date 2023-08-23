import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import BlogBreadcrumbs from '../BlogBreadcrumbs';

import type {Props} from '@theme/BlogLayout';

interface BlogLayoutProps extends Props {
  pageTitle?: string
}

export default function BlogLayout(props: BlogLayoutProps): JSX.Element {
  const {pageTitle, sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--sm">
        <div className="row">
          <BlogBreadcrumbs breadcrumbs={pageTitle && [{href: '#', label: pageTitle}]}/>
        </div>
      </div>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', { 
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
