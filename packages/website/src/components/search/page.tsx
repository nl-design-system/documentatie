import { Grid } from '@components/grid/grid';
import { Heading } from '@components/heading/heading';
import { Paragraph } from '@components/paragraph/paragraph';
import { SearchForm } from '@components/search/form';
import { updateDocumentTitle } from '@utils/document-title';
import { useEffect, useState } from 'react';
import type { SearchResult } from './types';
import { fetchResults, SearchError as SearchErrorClass } from './algolia-api/fetch-results';
import { groupHitsToPages, type GroupError } from './algolia-api/group-hits-to-pages';
import { SearchError } from './error';
import { SearchResults } from './results';
import './page.css';

function pageTitle(query?: string | null) {
  return query ? `Zoeken naar: "${query}"` : 'Zoeken';
}

function updateUrlParameter(name: string, value?: string | null) {
  const url = new URL(window.location.href);
  if (value) {
    url.searchParams.set(name, value);
  } else {
    url.searchParams.delete(name);
  }

  const newPageTitle = pageTitle(value);
  updateDocumentTitle(newPageTitle);
  window.history.pushState({}, '', url.toString());
}

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult>();
  const [error, setError] = useState<SearchErrorClass | GroupError | undefined>();
  const [autoFocus, setAutoFocus] = useState<boolean>(false);
  const [autoFocusKnown, setAutoFocusKnown] = useState<boolean>(false);

  useEffect(() => {
    const url = new URL(document.URL);
    const query = url.searchParams.get('query');

    setSearchQuery(query);
    setAutoFocus(Boolean(query) === false);
    setAutoFocusKnown(true);
  }, []);

  useEffect(() => {
    updateUrlParameter('query', searchQuery);
    setError(undefined);
    setResults(undefined);

    if (searchQuery) {
      setLoading(true);
      fetchResults(searchQuery)
        .then(groupHitsToPages)
        .then(([searchError, searchResults]) => {
          if (searchError) setError(searchError);
          if (searchResults) setResults(searchResults);
        })
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  return (
    autoFocusKnown && (
      <Grid>
        <Grid.Cell span="all">
          <Heading level={1}>{pageTitle(searchQuery)}</Heading>
        </Grid.Cell>

        <Grid.Cell span="all">
          <SearchForm autoFocus={autoFocus} value={searchQuery} onChange={(value) => setSearchQuery(value)} />
        </Grid.Cell>

        <Grid.Cell span="all" className="ma-flow">
          {!searchQuery && <Paragraph>Gebruik het zoekveld om te zoeken in nldesignsystem.nl</Paragraph>}
          {loading && <Paragraph role="status">Aan het zoeken</Paragraph>}
          {results && <SearchResults results={results} />}
          {error && <SearchError error={error} />}
        </Grid.Cell>
      </Grid>
    )
  );
};
