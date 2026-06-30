import type { AlgoliaResponse } from '../types.js';

export type FetchSuccess = [null, AlgoliaResponse];
export type FetchFailed = [SearchError, null];
export type FetchResult = FetchSuccess | FetchFailed;

export class SearchError extends Error {
  status?: number;

  constructor(message?: string, status?: number) {
    super(message);
    this.status = status;
  }
}

// const appId = 'HS7BGF6EOX';
// const appKey = '6a3cb6cceb6d6ea24586bbeec98719f0';
// const index = 'nldesignsystem';

const appId = 'HWYTAR8XU5';
const appKey = '74627f8933dc6059f68f48ee8fbecaa9';
const index = 'gebruikersonderzoek';

const headers: HeadersInit = {
  'x-algolia-application-id': appId,
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-algolia-api-key': appKey,
};

const highlightTags = {
  highlightPostTag: '</mark>',
  highlightPreTag: '<mark class="nl-mark">',
};

const isError = (response: AlgoliaResponse) => response.message;

export async function fetchResults(query: string): Promise<FetchResult> {
  if (!query) throw new SearchError('No query provided', 400);

  let error = new SearchError('Could not load search results');
  let result = null;

  await fetch(`https://${appId}.algolia.net/1/indexes/${index}/query`, {
    body: JSON.stringify({
      ...highlightTags,
      query,
    }),
    headers,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((response: AlgoliaResponse) => {
      if (isError(response)) {
        error = new SearchError(response['message'], response['status']);
      } else if (response.hits.length === 0) {
        error = new SearchError('No search results', 404);
      } else {
        result = response;
      }
    });

  return result ? [null, result] : [error, null];
}
