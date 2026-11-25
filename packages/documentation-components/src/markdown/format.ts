/**
 * This component is used to render markdown partials inside another markdown file.
 * This is done by accepting an raw markdown string as content, applying a
 * remark / rehype transformation on it and rendering the output.
 * The remark / rehype plugins added mirror the markdown pipeline from Astro 6.2.2.
 * The `sharedPlugins` contains all remark/rehype plugins also included in the
 * Astro config. The `shiftHeadings` plugin is introduced here since it only
 * makes sense in this context, and not in the general Astro config
 */

import { rehypePrism, rehypeHeadingIds } from '@astrojs/markdown-remark';
import { createSharedPlugins } from '@nl-design-system-community/documentation-markdown-plugins/src/shared-plugins.ts';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import { shiftHeadings } from './shift-headings.ts';

export interface MarkdownProps {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  omitH1?: boolean;
  content?: string;
  siteUrl: string;
  sync?: boolean;
}

export const createMarkdownProcessor = ({ headingLevel = 1, omitH1, siteUrl, sync }: MarkdownProps) => {
  const sharedPlugins = createSharedPlugins({ siteUrl });

  const remarkPlugins = sharedPlugins.remarkPlugins
    // filter out the `removeH1FromMarkdown` plugin because `shiftHeadings` already does that
    .filter((plugin) => plugin !== sharedPlugins.plugins.removeH1FromMarkdown);

  return (
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkSmartypants)
      .use(shiftHeadings({ headingLevel, omitH1 }))
      .use(remarkPlugins)
      .use(remarkRehype, { allowDangerousHtml: true, passThrough: [] })
      // TODO: Support Prism when running synchronously
      .use(sync ? [] : [rehypePrism])
      .use(sharedPlugins.rehypePlugins)
      .use(rehypeRaw)
      .use(rehypeHeadingIds)
      .use(rehypeStringify, { allowDangerousHtml: true })
  );
};

export const formatMarkdown = async ({ content, headingLevel = 1, omitH1, siteUrl }: MarkdownProps) => {
  return String(await createMarkdownProcessor({ headingLevel, omitH1, siteUrl }).process(content));
};

export const formatMarkdownSync = ({ content, headingLevel = 1, omitH1, siteUrl }: MarkdownProps) => {
  const proc = createMarkdownProcessor({ headingLevel, omitH1, siteUrl, sync: true });

  return String(proc.processSync(content));
};
