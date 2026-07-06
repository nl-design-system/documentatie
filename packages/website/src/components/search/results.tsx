import type { SearchResult } from './types.js';
import { UnorderedList } from '@components/unordered-list/unordered-list';
import { Card } from '@components/card/card';
import DOMPurify from 'dompurify';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { siteBaseUrl } from 'src/seo.config.js';

export interface SearchResultsProps {
  results: SearchResult;
}

export function SearchResults({ results }: SearchResultsProps) {
  return Object.entries(results).map(([lvl0, hits]) => (
    <>
      <Heading level={2}>{lvl0}</Heading>
      <UnorderedList markers={false}>
        {hits
          .filter((hit) => hit.type === 'lvl1' || hit.type === 'lvl2' || hit.type === 'content')
          .map((hit) => {
            const heading =
              hit._highlightResult?.hierarchy?.[hit.type]?.value || (hit.type === 'content' && hit.hierarchy.lvl1);
            const description = hit._snippetResult?.content?.value;
            const linkLabel = hit.type !== 'lvl1' && hit.type !== 'content' && hit.hierarchy.lvl1;
            const href = new URL(hit.url, siteBaseUrl);

            return (
              <UnorderedList.Item key={hit.url}>
                <>
                  <Card
                    heading={heading && <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(heading) }} />}
                    description={
                      description && <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
                    }
                    href={href.toString().replace(siteBaseUrl, '')}
                    linkLabel={linkLabel || undefined}
                  />
                </>
              </UnorderedList.Item>
            );
          })}
      </UnorderedList>
    </>
  ));
}
