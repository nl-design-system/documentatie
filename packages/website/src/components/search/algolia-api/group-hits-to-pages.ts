import type { AlgoliaHit, SearchResult } from '../types';
import type { FetchResult, SearchError } from './fetch-results';

export type RecordMap = Map<string, AlgoliaHit[]>;

type GroupFailed = [SearchError | GroupError, null];
type GroupSuccess = [null, SearchResult];
type GroupResult = GroupSuccess | GroupFailed;

export class GroupError extends Error {}

export function groupHitsToPages(result: FetchResult): GroupResult {
  if (result[0]) return result;

  const map: Record<string, AlgoliaHit[]> = {};

  result[1].hits.forEach((hit: AlgoliaHit) => {
    if (!map[hit.hierarchy.lvl0]) {
      map[hit.hierarchy.lvl0] = [];
    }

    if (hit.hierarchy.lvl0 && hit) {
      map[hit.hierarchy.lvl0].push(hit);
    }
  });

  return [null, map];
}
