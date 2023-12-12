import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { findFirstSidebarItemLink, useDocById } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocCard';
import { ArrowNarrowRight } from 'tabler-icons-react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import styles from './styles.module.css';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';

function CardLayout({
  href,
  icon = '',
  title,
  description,
  linkDescription,
}: {
  href: string;
  linkDescription: string;
  icon?: ReactNode;
  title: string;
  description?: string;
}): JSX.Element {
  return (
    <div className={clsx('card', styles.card)}>
      <h2 className={clsx(styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p className={clsx(styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
      <Link href={href} className={clsx(styles.cardLink)}>
        {linkDescription}{' '}
        <Icon>
          <ArrowNarrowRight />
        </Icon>
      </Link>
    </div>
  );
}

function CardCategory({ item }: { item: PropSidebarItemCategory }): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      title={item.label}
      linkDescription={`Bekijk ${item.label.toLowerCase()} overzicht`}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length },
        )
      }
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const doc = useDocById(item.docId);
  return (
    <CardLayout
      linkDescription={doc?.title || item.label}
      href={item.href}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
