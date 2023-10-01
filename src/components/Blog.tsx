import React, { HTMLAttributes } from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import {
  BadgeList,
  DataBadge,
  HTMLContent,
  Heading,
  Heading2,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';
import parse from 'html-react-parser';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';
import { Card, CardContent, CardGroup } from '@site/src/components/CardGroup';
import clsx from 'clsx';
import style from './Blog.module.css';
import { IconCalendar, IconUser } from '@tabler/icons-react';

interface BlogCardProps extends HTMLAttributes<HTMLElement> {
  uuid: string;
  title: string;
  content: string;
  creator: string;
  headingLevel: 2 | 3 | 4 | 5 | 6;
  isoDate: string;
  path: string;
}

export const BlogCard = ({ uuid, creator, title, path, content, headingLevel, isoDate }: BlogCardProps) => {
  return (
    <Card key={uuid} appearance="large" className={style['blog-card']}>
      <CardContent>
        <Heading level={headingLevel}>
          <Link to={path} className={clsx('utrecht-link', style['blog-card__header-link'])}>
            {title}
          </Link>
        </Heading>
        <HTMLContent>{parse(content)}</HTMLContent>
        <BadgeList>
          <DataBadge className={clsx(style['blog-card__badge'], style['blog-card__badge--author'])}>
            <Icon role="presentational">
              <IconUser />
            </Icon>
            <span className="visually-hidden">auteur:</span>
            {creator}
          </DataBadge>
          <DataBadge className={clsx(style['blog-card__badge'], style['blog-card__badge--date'])}>
            <Icon role="presentational">
              <IconCalendar />
            </Icon>
            <span className="visually-hidden">publicatie datum:</span>
            <time dateTime={isoDate}>{new Intl.DateTimeFormat('nl-NL').format(new Date(isoDate))}</time>
          </DataBadge>
        </BadgeList>
      </CardContent>
    </Card>
  );
};

export const Blog = () => {
  const globalData = useGlobalData();
  const blogItems = globalData['rss-blog']['default']['blogItems'];
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - blog overzicht`}>
      <div className={clsx('container container--narrow padding-top--md padding-bottom--lg')}>
        <Breadcrumbs breadcrumbs={[{ label: 'Project', href: '/project' }, { label: 'Blog' }]} />
        <CardGroup appearance="large">
          {blogItems.map((item) => {
            return <BlogCard {...item} key={item.uuid} headingLevel={2} />;
          })}
        </CardGroup>
      </div>
    </Layout>
  );
};

export default Blog;
