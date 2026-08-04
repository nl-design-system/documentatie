import { describe, expect, test } from 'vitest';
import { markdownToText } from './markdown-to-text.mjs';

describe('markdownToText', () => {
  test('separates list items with newlines instead of running them together', () => {
    expect(markdownToText('- a\n- b\n- c')).toBe('a\nb\nc');
  });

  test('keeps inline emphasis as plain text', () => {
    expect(markdownToText('Some **bold** and _em_ text')).toBe('Some bold and em text');
  });

  test('drops raw HTML such as license comments', () => {
    expect(markdownToText('<!-- @license CC0-1.0 -->\n\nHello')).toBe('Hello');
  });

  test('separates paragraphs with a newline', () => {
    expect(markdownToText('First paragraph.\n\nSecond paragraph.')).toBe('First paragraph.\nSecond paragraph.');
  });

  test('preserves fenced code block content', () => {
    expect(markdownToText('```\nconst x = 1;\n```')).toBe('const x = 1;');
  });

  test('trims surrounding whitespace', () => {
    expect(markdownToText('\n\n  Trimmed  \n\n')).toBe('Trimmed');
  });
});
