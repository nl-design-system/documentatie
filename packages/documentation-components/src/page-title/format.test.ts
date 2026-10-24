import { describe, expect, test } from 'vitest';
import { formatTitle } from './format';

describe('Formatting of document title', () => {
  test('uses only the website when there is no page title', () => {
    const titleText = formatTitle({
      title: '',
      siteTitle: 'Website Name',
    });

    expect(titleText).toBe('Website Name');
  });

  test('uses only the page title when there is no website name', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      siteTitle: '',
    });

    expect(titleText).toBe('Page Title');
  });

  test('prefers the short page title over the default page title', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      titleSm: 'Page',
      siteTitle: '',
    });

    expect(titleText).toBe('Page');
  });

  test('prefers the short page title over the default page title, and combines it with separator and the website name', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      titleSm: 'Page',
      siteTitle: 'Website Name',
      siteTitleSeparator: '·',
    });

    expect(titleText).toBe('Page · Website Name');
  });

  test('appends the website name to the page title', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      siteTitle: 'Website Name',
    });

    expect(titleText).toBe('Page Title - Website Name');
  });

  test('renders a configurable separator between the website name to the page title', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      siteTitle: 'Website Name',
      siteTitleSeparator: '·',
    });

    expect(titleText).toBe('Page Title · Website Name');
  });

  test('ignores leading and trailing whitespace in the configurable separator', () => {
    const titleText = formatTitle({
      title: 'Page Title',
      siteTitle: 'Website Name',
      siteTitleSeparator: '    |    ',
    });

    expect(titleText).toBe('Page Title | Website Name');
  });

  test('merges the page title and website name when they are identical, typically on the homepage', () => {
    const titleText = formatTitle({
      title: 'Website Name',
      siteTitle: 'Website Name',
    });

    expect(titleText).toBe('Website Name');
  });
});
