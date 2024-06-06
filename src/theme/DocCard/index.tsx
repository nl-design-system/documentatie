import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { findFirstSidebarItemLink, useDocById } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocCard';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { PropsWithChildren, type ReactNode } from 'react';
import { ArrowNarrowRight } from 'tabler-icons-react';
import styles from './styles.module.css';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { randomUUID } from 'crypto';

function CardLayout({
  href,
  icon = '',
  title,
  description,
  linkDescription,
  children,
}: PropsWithChildren<{
  href?: string;
  linkDescription?: string;
  icon?: ReactNode;
  title: string;
  description?: string;
}>): React.Element {
  return (
    <div className={clsx('card', styles.card)}>
      <h2 className={clsx(styles.cardTitle)}>
        {icon} {title}
      </h2>
      {description && <p className={clsx(styles.cardDescription)}>{description}</p>}
      {children}
      {href && linkDescription && (
        <Link href={href} className={clsx(styles.cardLink)}>
          {linkDescription}{' '}
          <Icon>
            <ArrowNarrowRight />
          </Icon>
        </Link>
      )}
    </div>
  );
}

function CardCategory({ item }: { item: PropSidebarItemCategory }): React.Element | null {
  return (
    <CardLayout title={item.label} description={item.description}>
      <UnorderedList>
        {item.items
          .filter((listItem) => listItem.type === 'link' || listItem.type === 'category')
          .map((listItem, index) => (
            <UnorderedListItem key={index}>
              {listItem.type === 'link' ? (
                <Link to={listItem.href}>{listItem.label}</Link>
              ) : listItem.type === 'category' ? (
                <Link to={listItem.href}>
                  {listItem.items.length} pagina's voor {listItem.label}
                </Link>
              ) : (
                <></>
              )}
            </UnorderedListItem>
          ))}
      </UnorderedList>
    </CardLayout>
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }): React.Element {
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

export default function DocCard({ item }: Props): React.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
