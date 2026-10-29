import type { SearchResult } from './types.js';
import { UnorderedList } from '../unordered-list/unordered-list';
import { Card } from '../card/card';
import DOMPurify from 'dompurify';
import { Heading } from '@nl-design-system-candidate/heading-react';

export interface SearchResultsProps {
  results: SearchResult;
  siteBaseUrl?: string;
}

interface SearchResultItem {
  heading: string;
  description?: string;
  href: URL;
  linkLabel: string | false;
  url: string;
}

export function SearchResults({ results, siteBaseUrl = '' }: SearchResultsProps) {
  return Object.entries(results).map(([lvl0, hits]) => (
    <>
      <Heading level={2}>{lvl0}</Heading>
      <UnorderedList markers={false}>
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
