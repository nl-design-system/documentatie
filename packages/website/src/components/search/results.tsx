import type { SearchResult } from './types.js';
import { UnorderedList } from '@components/unordered-list/unordered-list';
import { Card } from '@components/card/card';
import DOMPurify from 'dompurify';

export interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults(props: SearchResultsProps) {
  return (
    <UnorderedList markers={false}>
      {props.results.map((result) => (
        <UnorderedList.Item key={result.url}>
          <Card
            heading={<span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(result.title) }} />}
            href={result.url}
            description={
              <>
                {result.snippets?.map((snippet) => (
                  <span key={snippet}>{DOMPurify.sanitize(snippet)}</span>
                ))}
              </>
            }
          />
        </UnorderedList.Item>
      ))}
    </UnorderedList>
  );
}
