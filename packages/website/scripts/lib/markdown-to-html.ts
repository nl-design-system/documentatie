import { readFile } from 'node:fs/promises';
import { createMarkdownProcessor, type MarkdownRenderer } from '@astrojs/markdown-remark';
import { rehypeAbsoluteUrls } from '../../markdown-plugins/rehype-absolute-urls';
import { nldsComponentsPlugin } from '../../markdown-plugins/rehype-nlds-components';
import { remarkStripHtmlComments } from '../../markdown-plugins/remark-strip-html-comments';

const siteUrl = 'https://nldesignsystem.nl';

/**
 * The website renders markdown with a longer plugin list (see `astro.config.ts`).
 * Documentation snippets are fragments rather than pages, so a few of those
 * plugins are left out on purpose:
 *
 * - `removeH1FromMarkdown`: the website drops the `h1` because the page layout
 *   renders the title. A snippet has no layout, so dropping it loses content.
 * - `addTrailingSlashPlugin`: it strips the origin from links, which is exactly
 *   wrong for HTML rendered outside of the website. `rehypeAbsoluteUrls` does the
 *   opposite instead.
 * - `remarkDirective`, `remarkAdmonitions` and `remarkUndoInlineDirectives`: no
 *   documentation snippet uses `:::` directives yet. Add the three together when
 *   one does, `remarkDirective` on its own changes how plain text is parsed.
 * - `remarkUnwrapDiv`, `remarkUnwrapParagraph`, `remarkCanvasFix` and
 *   `clientLoadPlugin`: these all act on MDX nodes, which plain markdown never
 *   produces.
 * - `remarkCustomHeaderId`: only does something for headings.
 *
 * `syntaxHighlight` is turned off explicitly: the default is Shiki, which adds
 * inline `style` attributes and its own class names to the published HTML. With
 * it off the `pre` and `code` transforms still apply NL Design System class
 * names.
 */
async function createProcessor(): Promise<MarkdownRenderer> {
  return createMarkdownProcessor({
    remarkPlugins: [remarkStripHtmlComments],
    rehypePlugins: [nldsComponentsPlugin, rehypeAbsoluteUrls({ siteUrl })],
    syntaxHighlight: false,
  });
}

// Creating a processor is expensive, so all files share a single one.
let processor: Promise<MarkdownRenderer> | undefined;

/**
 * Convert a markdown string to HTML that uses NL Design System components.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  processor ??= createProcessor();

  const instance = await processor;
  const { code } = await instance.render(markdown);

  return code.trim();
}

/**
 * Read a markdown file and return its content as HTML that uses NL Design System
 * components.
 */
export async function readMarkdownAsHtml(file: string): Promise<string> {
  return markdownToHtml(await readFile(file, 'utf8'));
}
