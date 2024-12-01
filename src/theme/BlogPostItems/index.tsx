import { Link } from '@site/src/components/Link';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import { Card, CardContent, CardGroup } from '@site/src/components/CardGroup';
import { IconCalendar, IconUser } from '@tabler/icons-react';
import type { Props } from '@theme/BlogPostItems';
import { BadgeList, DataBadge, Heading2, Icon } from '@utrecht/component-library-react';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function BlogPostItems({ items }: Props): ReactElement {
  return (
    <CardGroup appearance="large">
      {items.map(({ content }) => {
        return (
          <BlogPostProvider key={content.metadata.permalink} content={content}>
            <Card appearance="large" className="blog-card">
              <CardContent>
                <Heading2>
                  <Link to={content.metadata.permalink} className={clsx('utrecht-link', 'blog-card__header-link')}>
                    {content.metadata.title}
                  </Link>
                </Heading2>
                <div>{content.metadata.description}</div>
                <BadgeList>
                  {content.metadata.authors.map((author) => (
                    <DataBadge key={author.name} className={clsx('blog-card__badge', 'blog-card__badge--author')}>
                      <Icon>
                        <IconUser />
                      </Icon>
                      <span className="visually-hidden">auteur:</span> {author.name}
                    </DataBadge>
                  ))}
                  <DataBadge className={clsx('blog-card__badge', 'blog-card__badge--date')}>
                    <Icon>
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
