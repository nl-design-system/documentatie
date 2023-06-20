import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import { Heading2 } from '@utrecht/component-library-react';
import parse from 'html-react-parser';
import NotFound from '@theme/NotFound';
import Layout from '@theme/Layout';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';
import { useLocation } from '@docusaurus/router';

export const BlogPost = () => {
  const globalData = useGlobalData();
  const { pathname } = useLocation();
  const uuid = pathname.split('/').pop();
  const blogItems = globalData['rss-blog']['default']['blogItems'];
  const item = blogItems.find((item) => item.uuid === uuid);
  if (!item) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container container--narrow padding-top--md padding-bottom--lg">
        <Breadcrumbs
          breadcrumbs={[
            { href: '/project', label: 'Project' },
            { href: '/project/blog', label: 'Blog' },
            { label: item.title },
          ]}
        />
        <Heading2>{item.title}</Heading2>
        <div>{parse(item['content:encoded'])}</div>
      </div>
    </Layout>
  );
};

export default BlogPost;
