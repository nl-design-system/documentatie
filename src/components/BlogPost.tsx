import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  HTMLContent,
  Heading1,
  Heading2,
  Link,
} from '@utrecht/component-library-react';
import parse from 'html-react-parser';
import NotFound from '@theme/NotFound';
import Layout from '@theme/Layout';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';
import { useLocation } from '@docusaurus/router';

import styles from './BlogPost.module.css';
import clsx from 'clsx';
import { Card, CardContent } from './CardGroup';

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
      <div
        className={clsx(styles['blog-post'], 'container', 'container--narrow padding-top--md', 'padding-bottom--lg')}
      >
        <Breadcrumbs
          breadcrumbs={[
            { href: '/project', label: 'Project' },
            { href: '/project/blog', label: 'Blog' },
            { label: item.title },
          ]}
        />
        <Heading1 id="b53e1d37-b010-40b6-b481-80128fcc2c70">{item.title}</Heading1>
        <HTMLContent className={clsx(styles['blog-post__html-content'])}>{parse(item['content:encoded'])}</HTMLContent>
        <footer aria-labelledby="b53e1d37-b010-40b6-b481-80128fcc2c70" className={styles['blog-post__footer']}>
          <Card component="section">
            <CardContent>
              <Heading2>Over dit artikel</Heading2>
              <DataList>
                <DataListItem>
                  <DataListKey>Auteur</DataListKey>
                  <DataListValue>{item.creator}</DataListValue>
                </DataListItem>
                <DataListItem>
                  <DataListKey>Datum</DataListKey>
                  <DataListValue>
                    <time dateTime={item.isoDate}>
                      {new Intl.DateTimeFormat('nl-NL', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }).format(new Date(item.isoDate))}
                    </time>
                  </DataListValue>
                </DataListItem>
                {item.link && (
                  <DataListItem>
                    <DataListKey>Oorspronkelijke publicatie</DataListKey>
                    <DataListValue>
                      <Link href={item.link}>{new URL(item.link).hostname}</Link>
                    </DataListValue>
                  </DataListItem>
                )}
              </DataList>
            </CardContent>
          </Card>
        </footer>
      </div>
    </Layout>
  );
};

export default BlogPost;
