import remarkCustomHeaderId from 'remark-custom-header-id';
import remarkDirective from 'remark-directive';
import { remarkAdmonitions } from './admonitions.ts';
import { nldsComponentsPlugin } from './rehype-nlds-components/index.ts';
import { addTrailingSlashPlugin } from './rehype-trailing-slash/index.ts';
import { removeH1FromMarkdown } from './remark-remove-h1/index.ts';
import { remarkUndoInlineDirectives } from './remark-undo-inline-directives/index.ts';
import { remarkUnwrapParagraph } from './remark-unwrap-paragraph/index.ts';

/**
 * The remark/rehype plugins shared by the Astro markdown and MDX pipelines and
 * the `Markdown` component that renders markdown partials.
 */
export function createSharedPlugins({ siteUrl }: { siteUrl: string | URL | undefined }) {
  if (!siteUrl) {
    throw new Error('createSharedPlugins: `siteUrl` is required, set `site` in the Astro config');
  }

  const plugins = {
    addTrailingSlashPlugin: addTrailingSlashPlugin({
      siteUrl: String(siteUrl),
      stripExtensions: ['.md', '.mdx'],
      stripOrigin: true,
    }),
    nldsComponentsPlugin,
    remarkAdmonitions,
    remarkCustomHeaderId,
    remarkDirective,
    remarkUndoInlineDirectives,
    remarkUnwrapParagraph,
    removeH1FromMarkdown: removeH1FromMarkdown(),
  };

  return {
    plugins,
    rehypePlugins: [plugins.nldsComponentsPlugin, plugins.addTrailingSlashPlugin],
    remarkPlugins: [
      plugins.remarkCustomHeaderId,
      plugins.remarkDirective,
      plugins.remarkUndoInlineDirectives,
      plugins.remarkAdmonitions,
      plugins.remarkUnwrapParagraph,
      plugins.removeH1FromMarkdown,
    ],
  };
}
