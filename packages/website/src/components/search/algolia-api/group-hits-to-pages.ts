import type { AlgoliaHit, SearchResult } from '../types.js';
import type { FetchResult, SearchError } from './fetch-results';

export type RecordMap = Map<string, AlgoliaHit[]>;

type GroupFailed = [SearchError | GroupError, null];
type GroupSuccess = [null, SearchResult[]];
type GroupResult = GroupSuccess | GroupFailed;

export class GroupError extends Error {}

export function groupHitsToPages(result: FetchResult): GroupResult {
  if (result[0]) return result;

  const hits = result[1].hits.filter((hit: AlgoliaHit) => hit.hierarchy.lvl0);
  const hitsPerPage: RecordMap = new Map();
  const searchResults: SearchResult[] = [];

  for (const hit of hits) {
    const pageTitle = hit.hierarchy.lvl0;
    const existing = hitsPerPage.get(pageTitle);
    if (existing) {
      existing.push(hit);
    } else {
      hitsPerPage.set(pageTitle, [hit]);
    }
  }

  hitsPerPage.forEach((records: AlgoliaHit[]) => {
    const snippets: string[] = [];

    records.forEach((record) => {
      if (record._snippetResult?.content?.value) {
        snippets.push(record._snippetResult.content.value);
      }
    });

    const page: SearchResult = {
      snippets,
      title: records[0]._highlightResult?.hierarchy?.lvl0?.value || records[0].hierarchy.lvl0,
      url: records[0].url_without_anchor,
    };
    searchResults.push(page);
  });

  return [null, searchResults];
}
