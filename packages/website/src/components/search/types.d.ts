import type { SearchResponse, Hit, HighlightResultOption, SnippetResultOption } from 'algoliasearch';

export type NLDSHierarchyLevel = 'lvl0' | 'lvl1' | 'lvl2' | 'lvl3' | 'lvl4' | 'lvl5' | 'content';

export type NLDSRecord = {
  url: string;
  url_without_anchor: string;
  anchor: string;
  content: string;
  type: NLDSHierarchyLevel;
  hierarchy: Record<NLDSHierarchyLevel, string>;
};

export type AlgoliaHit = Hit<NLDSRecord> & {
  _snippetResult?: Record<'content', SnippetResultOption>;
  _highlightResult?: { hierarchy?: Record<NLDSHierarchyLevel, HighlightResultOption> };
};

export type AlgoliaResponse = SearchResponse<NLDSRecord> & { hits: AlgoliaHit[] };

export type SearchResult = Record<string, AlgoliaHit[]>;
