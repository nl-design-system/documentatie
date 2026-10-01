import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { describe, expect, test } from 'vitest';
import { rehypeAbsoluteUrls } from './index';

const siteUrl = 'https://nldesignsystem.nl';

const process = (html: string) =>
  String(
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeAbsoluteUrls({ siteUrl }))
      .use(rehypeStringify)
      .processSync(html),
  );

describe('rehypeAbsoluteUrls', () => {
  test('turns a root-relative link into an absolute url', () => {
    expect(process('<a href="/richtlijnen/stijl/">Stijl</a>')).toBe(
      '<a href="https://nldesignsystem.nl/richtlijnen/stijl/">Stijl</a>',
    );
  });

  test('leaves an absolute link untouched', () => {
    expect(process('<a href="https://example.com/a/">A</a>')).toBe('<a href="https://example.com/a/">A</a>');
  });

  test('leaves a fragment link untouched', () => {
    expect(process('<a href="#kop">Kop</a>')).toBe('<a href="#kop">Kop</a>');
  });

  test('turns a root-relative image source into an absolute url', () => {
    expect(process('<img src="/afbeelding.png" alt="">')).toBe(
      '<img src="https://nldesignsystem.nl/afbeelding.png" alt="">',
    );
  });

  test('leaves elements without a url untouched', () => {
    expect(process('<p>Zonder link</p>')).toBe('<p>Zonder link</p>');
  });
});
