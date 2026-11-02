import { describe, expect, test } from 'vitest';
import { addTrailingSlash } from './index.ts';

const siteURL = new URL('https://example.com');

const testCases: Array<[string, string, { stripOrigin?: boolean; stripExtensions?: string[] }?]> = [
  // Handle urls
  ['https://example.com/foo/bar', 'https://example.com/foo/bar/'],
  // Handle pathnames
  ['/foo/bar', '/foo/bar/'],
  // Handle relative pathnames
  ['foo/bar', 'foo/bar/'],
  // Handle pathnames with hashes
  ['/foo/bar#hash', '/foo/bar/#hash'],
  // Handle pathnames with search queries
  ['/foo/bar?query=value', '/foo/bar/?query=value'],
  // Strip the origin when option is set
  ['https://example.com/foo/bar', '/foo/bar/', { stripOrigin: true }],
  ['/foo/bar', '/foo/bar/', { stripOrigin: true }],
  // Treat .md / .mdx as pages and strip the extensions
  ['/foo/bar.md', '/foo/bar/', { stripOrigin: false, stripExtensions: ['.md', '.mdx'] }],
  ['/foo/bar.mdx', '/foo/bar/', { stripExtensions: ['.md', '.mdx'] }],
  ['/foo/bar.md#baz', '/foo/bar/#baz', { stripExtensions: ['.md', '.mdx'] }],
  ['/foo/bar.mdx#baz', '/foo/bar/#baz', { stripExtensions: ['.md', '.mdx'] }],
  // Do not touch in page links
  ['#hash', '#hash'],
  // Do not touch external urls
  ['https://external.com/foo/bar', 'https://external.com/foo/bar'],
  // Do not touch other protocols
  ['mailto:foo@example.com', 'mailto:foo@example.com'],
  ['ftp://example.com/foo/bar', 'ftp://example.com/foo/bar'],
  // Do not touch files with extensions
  ['/foo/bar.txt', '/foo/bar.txt'],
  ['/foo/bar.html', '/foo/bar.html'],
  ['/foo/bar.pdf', '/foo/bar.pdf'],
  ['/foo/bar.pdf/foo', '/foo/bar.pdf/foo/'], // is not a valid url, but it proves only the last part is considerd
  ['/foo/bar?foo=bar.baz', '/foo/bar/?foo=bar.baz'], // dots in other parts of the url are ignored
  // Make sure wcag pages are still processed
  ['/wcag/1.2.3', '/wcag/1.2.3/'],
  ['/wcag/2.4.1', '/wcag/2.4.1/'],
];

describe('addTrailingSlash', () => {
  test.each(testCases)('%s → %s', (input, expectedResult, options = {}) => {
    expect(addTrailingSlash(input, { siteURL, ...options })).toBe(expectedResult);
  });
});
