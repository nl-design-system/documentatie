import { PageMetadata, useCurrentSidebarCategory } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocCardList from '@theme/DocCardList';
import type { Props } from '@theme/DocCategoryGeneratedIndexPage';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import Heading from '@theme/Heading';
import type { ReactElement } from 'react';
import './styles.css';

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }: Props): ReactElement {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }: Props): ReactElement {
  const category = useCurrentSidebarCategory();
  return (
    <div className="generatedIndexPage">
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className="title">
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && <p>{categoryGeneratedIndex.description}</p>}
      </header>
      <article className="margin-top--lg">
        <DocCardList items={category.items} className="list" />
      </article>
      <footer className="margin-top--lg">
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactElement {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
