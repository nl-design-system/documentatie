import React from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItems';
import { Card, CardContent, CardGroup } from '@site/src/components/CardGroup';
import { BadgeList, DataBadge, Heading2, Icon } from '@utrecht/component-library-react';
import style from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { IconCalendar, IconUser } from '@tabler/icons-react';

export default function BlogPostItems({ items }: Props): JSX.Element {
  return (
    <CardGroup appearance="large">
      {items.map(({ content }) => {
        return (
          <BlogPostProvider key={content.metadata.permalink} content={content}>
            <Card appearance="large" className={style['blog-card']}>
              <CardContent>
                <Heading2>
                  <Link
                    to={content.metadata.permalink}
                    className={clsx('utrecht-link', style['blog-card__header-link'])}
                  >
                    {content.metadata.title}
                  </Link>
                </Heading2>
                <div>{content.metadata.description}</div>
                <BadgeList>
                  {content.metadata.authors.map((author) => (
                    <DataBadge
                      key={author.name}
                      className={clsx(style['blog-card__badge'], style['blog-card__badge--author'])}
                    >
                      <Icon role="presentational">
                        <IconUser />
                      </Icon>
                      <span className="visually-hidden">auteur:</span> {author.name}
                    </DataBadge>
                  ))}
                  <DataBadge className={clsx(style['blog-card__badge'], style['blog-card__badge--date'])}>
                    <Icon role="presentational">
                      <IconCalendar />
                    </Icon>
                    <span className="visually-hidden">publicatie datum:</span>{' '}
                    <time dateTime={content.metadata.date}>{content.metadata.formattedDate}</time>
                  </DataBadge>
                </BadgeList>
              </CardContent>
            </Card>
          </BlogPostProvider>
        );
      })}
    </CardGroup>
  );
}
