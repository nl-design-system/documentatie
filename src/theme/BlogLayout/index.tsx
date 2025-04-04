import { BreadcrumbNav } from '@site/src/components/BreadcrumbNav';
import type { Props } from '@theme/BlogLayout';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { PropsWithChildren, ReactElement } from 'react';

interface BlogLayoutProps extends Props {
  breadcrumbs: { label: string; href: string; rel?: string }[];
}

export default function BlogLayout(props: PropsWithChildren<BlogLayoutProps>): ReactElement {
  const { sidebar, toc, breadcrumbs = [], children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--md">
        <div className="row">
          <div className="col col--9 col--offset-1">
            <BreadcrumbNav breadcrumbs={breadcrumbs} />
          </div>
          <main
            className={clsx('utrecht-document', 'utrecht-html', 'col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
