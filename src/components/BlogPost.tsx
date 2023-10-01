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
} from '@utrecht/component-library-react/dist/css-module';
import parse from 'html-react-parser';
import NotFound from '@theme/NotFound';
import Layout from '@theme/Layout';
import { Breadcrumbs } from '@site/src/components/Breadcrumbs';
import { useLocation } from '@docusaurus/router';
import { v4 } from 'uuid';

import styles from './BlogPost.module.css';
import clsx from 'clsx';
import { Card, CardContent } from './CardGroup';

const trimTrailingSlash = (path: string) => path.replace(/\/$/, '');

// Only trimTrailingSlash for now, but could contain more normalizing steps
const normalizePath = (path: string) => trimTrailingSlash(path);

export const BlogPost = () => {
  const globalData = useGlobalData();
  const { pathname } = useLocation();
  const blogItems = globalData['rss-blog']['default']['blogItems'];
  const item = blogItems.find((item) => normalizePath(item.path) === normalizePath(pathname));
  const headingID = v4();

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
        <Heading1 id={headingID}>{item.title}</Heading1>
        <HTMLContent className={clsx(styles['blog-post__html-content'])}>{parse(item['content:encoded'])}</HTMLContent>
        <footer aria-labelledby={headingID} className={styles['blog-post__footer']}>
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
