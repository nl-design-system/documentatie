import { getContainerRenderer as reactContainerRenderer } from '@astrojs/react';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { loadRenderers } from 'astro:container';
import { beforeAll, describe, expect, test } from 'vitest';
import TableOfContent from './table-of-content.astro';

describe('table-of-content.astro', () => {
  let container: AstroContainer;

  beforeAll(async () => {
    // The component embeds React islands (Heading, UnorderedList), so the React
    // renderer has to be registered before the container can render it.
    const renderers = await loadRenderers([reactContainerRenderer()]);
    container = await AstroContainer.create({ renderers });
  });

  test('renders the custom element scoped to the main heading level', async () => {
    const result = await container.renderToString(TableOfContent);

    expect(result).toContain('<ma-table-of-contents');
    expect(result).toContain('scope="main"');
    expect(result).toContain('heading-level="2"');
  });

  test('renders the labelled "Inhoudsopgave" heading', async () => {
    const result = await container.renderToString(TableOfContent);

    expect(result).toContain('Inhoudsopgave');
    expect(result).toContain('id="toc-label"');
  });
});
