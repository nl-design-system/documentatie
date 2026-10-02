import type { SearchResult } from './types.js';
import { UnorderedList } from '@components/unordered-list/unordered-list';
import { Card } from '@components/card/card';
import DOMPurify from 'dompurify';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { siteBaseUrl } from '../../seo.config';

export interface SearchResultsProps {
  results: SearchResult;
}

interface SearchResultItem {
  heading: string;
  description?: string;
  href: URL;
  linkLabel: string | false;
  url: string;
}

export function SearchResults({ results }: SearchResultsProps) {
  return Object.entries(results).map(([lvl0, hits]) => (
    <>
      <Heading level={2}>{lvl0}</Heading>
      <UnorderedList markers={false} role="list">
        {hits
          .filter((hit) => hit.type === 'lvl1' || hit.type === 'lvl2' || hit.type === 'content')
          .map((hit) => {
            const heading =
              hit._highlightResult?.hierarchy?.[hit.type]?.value ||
              (hit.type === 'content' && hit.hierarchy.lvl1) ||
              undefined;
            const description = hit._snippetResult?.content?.value;
            const linkLabel = hit.type !== 'lvl1' && hit.type !== 'content' && hit.hierarchy.lvl1;
            const href = new URL(hit.url, siteBaseUrl);
            const url = hit.url;

            const item: Partial<SearchResultItem> = { heading, description, href, linkLabel, url };
            return item;
          })
          .filter((item): item is SearchResultItem => item.heading !== undefined)
          .map(({ heading, description, href, linkLabel, url }) => (
            <UnorderedList.Item key={url}>
              <>
                <Card
                  heading={<span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(heading) }} />}
                  headingLevel={3}
                  description={
                    description && <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
                  }
                  href={href.toString().replace(siteBaseUrl, '')}
                  linkLabel={linkLabel || undefined}
                />
              </>
            </UnorderedList.Item>
          ))}
      </UnorderedList>
    </>
  ));
}
