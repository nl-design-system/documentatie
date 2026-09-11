import { siteBaseUrl } from 'src/seo.config';

import { remarkAdmonitions } from './admonitions';
import { nldsComponentsPlugin } from './rehype-nlds-components';
import { addTrailingSlashPlugin } from './rehype-trailing-slash';
import { removeH1FromMarkdown } from './remark-remove-h1';
import { remarkUnwrapDiv } from './remark-unwrap-div';
import { remarkUndoInlineDirectives } from './remark-undo-inline-directives';
import { remarkUnwrapParagraph } from './remark-unwrap-paragraph';
import remarkCustomHeaderId from 'remark-custom-header-id';
import remarkDirective from 'remark-directive';

export const sharedPlugins = {
  remarkPlugins: [
    remarkUnwrapDiv,
    remarkCustomHeaderId,
    remarkDirective,
    remarkUndoInlineDirectives,
    remarkAdmonitions,
    remarkUnwrapParagraph,
    removeH1FromMarkdown(),
  ],

  rehypePlugins: [
    nldsComponentsPlugin,
    addTrailingSlashPlugin({ siteUrl: siteBaseUrl, stripOrigin: true, stripExtensions: ['.md', '.mdx'] }),
  ],
};
