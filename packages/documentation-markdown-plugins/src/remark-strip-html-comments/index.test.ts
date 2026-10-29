import { remark } from 'remark';
import { describe, expect, test } from 'vitest';
import { remarkStripHtmlComments } from './index';

const process = (markdown: string) => String(remark().use(remarkStripHtmlComments).processSync(markdown)).trim();

describe('remarkStripHtmlComments', () => {
  test('removes the license comment every documentation file starts with', () => {
    expect(process('<!-- @license CC0-1.0 -->\n\nHallo')).toBe('Hallo');
  });

  test('removes editorial comments meant for the authors', () => {
    expect(process('<!-- Verplaatsen naar Strong? -->\n\nHallo')).toBe('Hallo');
  });

  test('removes a comment spanning multiple lines', () => {
    expect(process('<!--\n  Nog te doen\n-->\n\nHallo')).toBe('Hallo');
  });

  test('keeps raw HTML that is not a comment', () => {
    expect(process('<figure>\n  <img src="a.png" alt="" />\n</figure>')).toBe(
      '<figure>\n  <img src="a.png" alt="" />\n</figure>',
    );
  });

  test('keeps markdown around the comment intact', () => {
    expect(process('<!-- @license CC0-1.0 -->\n\n- een\n- twee')).toBe('* een\n* twee');
  });
});
