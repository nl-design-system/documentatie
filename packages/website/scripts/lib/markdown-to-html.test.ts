import { describe, expect, test } from 'vitest';
import { markdownToHtml } from './markdown-to-html';

describe('markdownToHtml', () => {
  test('drops the license comment every documentation file starts with', async () => {
    expect(await markdownToHtml('<!-- @license CC0-1.0 -->\n\nHallo')).toBe('<p class="nl-paragraph">Hallo</p>');
  });

  test('drops editorial comments meant for the authors', async () => {
    expect(await markdownToHtml('<!-- Verplaatsen naar Strong? -->\n\nHallo')).toBe(
      '<p class="nl-paragraph">Hallo</p>',
    );
  });

  test('renders a paragraph as an NL Design System paragraph', async () => {
    expect(await markdownToHtml('Pas de kleur aan.')).toBe('<p class="nl-paragraph">Pas de kleur aan.</p>');
  });

  test('renders a bullet list as an NL Design System unordered list', async () => {
    expect(await markdownToHtml('- een\n- twee')).toBe(
      '<ul class="ams-unordered-list" role="list">\n' +
        '<li class="ams-unordered-list__item">een</li>\n' +
        '<li class="ams-unordered-list__item">twee</li>\n' +
        '</ul>',
    );
  });

  test('renders inline code as NL Design System code', async () => {
    expect(await markdownToHtml('Gebruik `lang`.')).toBe(
      '<p class="nl-paragraph">Gebruik <code class="nl-code" dir="ltr" translate="no">lang</code>.</p>',
    );
  });

  test('turns a link to the website into an absolute url', async () => {
    expect(await markdownToHtml('[Contrast](/richtlijnen/stijl/kleuren/contrast-tekst/)')).toBe(
      '<p class="nl-paragraph">' +
        '<a href="https://nldesignsystem.nl/richtlijnen/stijl/kleuren/contrast-tekst/" class="nl-link">Contrast</a>' +
        '</p>',
    );
  });

  // The website strips the origin from its own links, this pipeline must not.
  test('leaves an absolute link to the website untouched', async () => {
    expect(await markdownToHtml('[Contrasttool](https://nldesignsystem.nl/contrast/)')).toBe(
      '<p class="nl-paragraph"><a href="https://nldesignsystem.nl/contrast/" class="nl-link">Contrasttool</a></p>',
    );
  });

  // The website removes the `h1` because its page layout renders the title, a
  // documentation snippet has no layout to render it.
  test('keeps a heading', async () => {
    expect(await markdownToHtml('# Kop')).toBe('<h1 class="nl-heading nl-heading--level-1" id="kop">Kop</h1>');
  });

  // `4,5:1` must not be mistaken for a directive, and `:` must stay as typed.
  test('keeps a contrast ratio as written', async () => {
    expect(await markdownToHtml('4,5:1 voor de overige tekst.')).toBe(
      '<p class="nl-paragraph">4,5:1 voor de overige tekst.</p>',
    );
  });

  // Syntax highlighting is off, so no Shiki class names or inline styles leak
  // into the published HTML.
  test('renders a code block without syntax highlighting', async () => {
    const html = await markdownToHtml('```html\n<p>Hallo</p>\n```');

    expect(html).not.toContain('astro-code');
    expect(html).not.toContain('style=');
    expect(html).toBe(
      '<pre class="nl-code-block" dir="ltr" translate="no" tabindex="0">' +
        '<code class="language-html nl-code-block__code">&#x3C;p>Hallo&#x3C;/p>\n' +
        '</code></pre>',
    );
  });
});
