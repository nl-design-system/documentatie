import { describe, expect, test } from 'vitest';
import { formatTitle } from './format.ts';

describe('Formatting of document title', () => {
  test('uses only the website when there is no page title', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      title: '',
    });

    expect(titleText).toBe('Website Name');
  });

  test('uses only the page title when there is no website name', () => {
    const titleText = formatTitle({
      siteTitle: '',
      title: 'Page Title',
    });

    expect(titleText).toBe('Page Title');
  });

  test('prefers the short page title over the default page title', () => {
    const titleText = formatTitle({
      siteTitle: '',
      title: 'Page Title',
      titleSm: 'Page',
    });

    expect(titleText).toBe('Page');
  });

  test('prefers the short page title over the default page title, and combines it with separator and the website name', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      siteTitleSeparator: '·',
      title: 'Page Title',
      titleSm: 'Page',
    });

    expect(titleText).toBe('Page · Website Name');
  });

  test('appends the website name to the page title', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      title: 'Page Title',
    });

    expect(titleText).toBe('Page Title - Website Name');
  });

  test('renders a configurable separator between the website name to the page title', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      siteTitleSeparator: '·',
      title: 'Page Title',
    });

    expect(titleText).toBe('Page Title · Website Name');
  });

  test('ignores leading and trailing whitespace in the configurable separator', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      siteTitleSeparator: '    |    ',
      title: 'Page Title',
    });

    expect(titleText).toBe('Page Title | Website Name');
  });

  test('merges the page title and website name when they are identical, typically on the homepage', () => {
    const titleText = formatTitle({
      siteTitle: 'Website Name',
      title: 'Website Name',
    });

    expect(titleText).toBe('Website Name');
  });
});
