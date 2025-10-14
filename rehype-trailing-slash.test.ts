import { addTrailingSlash } from './rehype-trailing-slash';

const siteURL = new URL('https://example.com');
let exitCode = 0;

function test(input, expectedResult, options = {}) {
  const result = addTrailingSlash(input, { siteURL, ...options });
  if (result !== expectedResult) {
    console.log('---');
    console.log('input:', input);
    console.error(`${result} !== ${expectedResult}`);
    console.log('');
    exitCode = 1;
  }
}

// Handle urls
test('https://example.com/foo/bar', 'https://example.com/foo/bar/');

// Handle pathnames
test('/foo/bar', '/foo/bar/');

// Handle relative pathnames
test('foo/bar', 'foo/bar/');

// Handle pathnames with hashes
test('/foo/bar#hash', '/foo/bar/#hash');

// Handle pathnames with search queries
test('/foo/bar?query=value', '/foo/bar/?query=value');

// Strip the origin when option is set
test('https://example.com/foo/bar', '/foo/bar/', { stripOrigin: true });
test('/foo/bar', '/foo/bar/', { stripOrigin: true });

// Do not touch in page links
test('#hash', '#hash');

// Do not touch external urls
test('https://external.com/foo/bar', 'https://external.com/foo/bar');

// Do not touch other protocols
test('mailto:foo@example.com', 'mailto:foo@example.com');
test('ftp://example.com/foo/bar', 'ftp://example.com/foo/bar');

// Do not touch files with extensions
test('/foo/bar.txt', '/foo/bar.txt');
test('/foo/bar.html', '/foo/bar.html');
test('/foo/bar.pdf', '/foo/bar.pdf');
test('/foo/bar.pdf/foo', '/foo/bar.pdf/foo/'); // is not a valid url, but it proves only the last part is considerd
test('/foo/bar?foo=bar.baz', '/foo/bar/?foo=bar.baz'); // dots in other parts of the url are ignored
test('/wcag/1.2.3', '/wcag/1.2.3/'); // Make sure wcag pages are still processed

process.exit(exitCode);
