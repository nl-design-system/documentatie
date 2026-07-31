import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { markdownToText } from './markdown-to-text.mjs';

test('separates list items with newlines instead of running them together', () => {
  assert.equal(markdownToText('- a\n- b\n- c'), 'a\nb\nc');
});

test('keeps inline emphasis as plain text', () => {
  assert.equal(markdownToText('Some **bold** and _em_ text'), 'Some bold and em text');
});

test('drops raw HTML such as license comments', () => {
  assert.equal(markdownToText('<!-- @license CC0-1.0 -->\n\nHello'), 'Hello');
});

test('separates paragraphs with a newline', () => {
  assert.equal(markdownToText('First paragraph.\n\nSecond paragraph.'), 'First paragraph.\nSecond paragraph.');
});

test('preserves fenced code block content', () => {
  assert.equal(markdownToText('```\nconst x = 1;\n```'), 'const x = 1;');
});

test('trims surrounding whitespace', () => {
  assert.equal(markdownToText('\n\n  Trimmed  \n\n'), 'Trimmed');
});
