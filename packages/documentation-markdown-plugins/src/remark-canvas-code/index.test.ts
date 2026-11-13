import type { Root } from 'mdast';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import { VFile } from 'vfile';
import { describe, expect, test } from 'vitest';
import { remarkCanvasCode } from './index.ts';

const canvas = (attributes: MdxJsxAttribute[], lang: string | null = 'html'): MdxJsxFlowElement => ({
  name: 'Canvas',
  attributes,
  children: [{ lang, type: 'code', value: '<p>Hallo</p>' }],
  type: 'mdxJsxFlowElement',
});

const run = (node: MdxJsxFlowElement) => {
  remarkCanvasCode()({ children: [node], type: 'root' } as Root, new VFile());
  return node;
};

const attr = (name: string, value: string): MdxJsxAttribute => ({ name, type: 'mdxJsxAttribute', value });

describe('remarkCanvasCode', () => {
  test('moves the code block into the `code` and `language` props', () => {
    const node = run(canvas([]));

    expect(node.attributes).toEqual([attr('code', '<p>Hallo</p>'), attr('language', 'html')]);
    expect(node.children).toEqual([]);
  });

  test('keeps an explicit `language` attribute', () => {
    const node = run(canvas([attr('language', 'css')]));

    expect(node.attributes).toEqual([attr('language', 'css'), attr('code', '<p>Hallo</p>')]);
  });

  test('fails when the Canvas also has a `code` attribute', () => {
    expect(() => run(canvas([attr('code', '<p>Ook</p>')]))).toThrow('both a `code` attribute and a code block');
  });

  test('fails when the code block has no language', () => {
    expect(() => run(canvas([], null))).toThrow('Add a language');
  });

  test('leaves a Canvas with only a `code` attribute alone', () => {
    const attributes = [attr('code', '<p>Hallo</p>')];
    const node: MdxJsxFlowElement = { name: 'Canvas', attributes, children: [], type: 'mdxJsxFlowElement' };

    expect(run(node).attributes).toEqual(attributes);
  });

  test('fails when the Canvas has neither a code block nor a `code` attribute', () => {
    const node: MdxJsxFlowElement = { name: 'Canvas', attributes: [], children: [], type: 'mdxJsxFlowElement' };

    expect(() => run(node)).toThrow('needs a code block');
  });
});
