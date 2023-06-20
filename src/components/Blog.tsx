import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import { HTMLContent, Heading2 } from '@utrecht/component-library-react';
import parse from 'html-react-parser';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';
import { Card, CardContent, CardGroup } from '@site/src/components/CardGroup';
import clsx from 'clsx';
import style from './Blog.module.css';

export const BlogCard = ({ uuid, title, content }) => (
  <Card key={uuid} appearance="large">
    <CardContent>
      <Heading2>
        <Link to={`/project/blog/${uuid}`} className={clsx('utrecht-link', style['blog__header-link'])}>
          {title}
        </Link>
      </Heading2>
      <HTMLContent>{parse(content)}</HTMLContent>
    </CardContent>
  </Card>
);

export const Blog = () => {
  const globalData = useGlobalData();
  const blogItems = globalData['rss-blog']['default']['blogItems'];
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - blog overzicht`}>
      <div className="container container--narrow padding-top--md padding-bottom--lg">
        <Breadcrumbs breadcrumbs={[{ label: 'Project', href: '/project' }, { label: 'Blog' }]} />
        <CardGroup appearance="large">
          {blogItems.map((item) => {
            return <BlogCard {...item} key={item.uuid} />;
          })}
        </CardGroup>
      </div>
    </Layout>
  );
};

export default Blog;
