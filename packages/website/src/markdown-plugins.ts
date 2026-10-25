import { siteBaseUrl } from '../src/seo.config.ts';

import { remarkAdmonitions } from '@nl-design-system-community/documentation-markdown-plugins/src/admonitions.ts';
import { nldsComponentsPlugin } from '@nl-design-system-community/documentation-markdown-plugins/src/rehype-nlds-components/index.ts';
import { addTrailingSlashPlugin } from '@nl-design-system-community/documentation-markdown-plugins/src/rehype-trailing-slash/index.ts';
import { removeH1FromMarkdown } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-remove-h1/index.ts';
import { remarkUnwrapDiv } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-unwrap-div/index.ts';
import { remarkUndoInlineDirectives } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-undo-inline-directives/index.ts';
import { remarkUnwrapParagraph } from '@nl-design-system-community/documentation-markdown-plugins/src/remark-unwrap-paragraph/index.ts';
import remarkCustomHeaderId from 'remark-custom-header-id';
import remarkDirective from 'remark-directive';

export const plugins = {
  remarkUnwrapDiv,
  remarkCustomHeaderId,
  remarkDirective,
  remarkUndoInlineDirectives,
  remarkAdmonitions,
  remarkUnwrapParagraph,
  removeH1FromMarkdown: removeH1FromMarkdown(),
  nldsComponentsPlugin,
  addTrailingSlashPlugin: addTrailingSlashPlugin({
    siteUrl: siteBaseUrl,
    stripOrigin: true,
    stripExtensions: ['.md', '.mdx'],
  }),
};

export const sharedPlugins = {
  remarkPlugins: [
    plugins.remarkUnwrapDiv,
    plugins.remarkCustomHeaderId,
    plugins.remarkDirective,
    plugins.remarkUndoInlineDirectives,
    plugins.remarkAdmonitions,
    plugins.remarkUnwrapParagraph,
    plugins.removeH1FromMarkdown,
  ],

  rehypePlugins: [plugins.nldsComponentsPlugin, plugins.addTrailingSlashPlugin],
};
