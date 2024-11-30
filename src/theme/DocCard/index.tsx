import Link from '@docusaurus/Link';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useDocById } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocCard';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { PropsWithChildren, type ReactNode } from 'react';
import './styles.css';

function CardLayout({
  href,
  icon = '',
  title,
  description,
  children,
}: PropsWithChildren<{
  href?: string;
  icon?: ReactNode;
  title: string;
  description?: string;
}>) {
  return (
    <div className="card">
      {href ? (
        <Link href={href} className={clsx('cardLink', 'utrecht-link')}>
          <h2 className="cardTitle">
            {icon} {title}
          </h2>
        </Link>
      ) : (
        <h2 className="cardTitle">
          {icon} {title}
        </h2>
      )}
      {description && <p className="cardDescription">{description}</p>}
      {children}
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
      linkDescription={item.label}
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
