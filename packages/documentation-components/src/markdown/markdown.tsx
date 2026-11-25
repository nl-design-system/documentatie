import { HTMLAttributes, PropsWithChildren } from 'react';
import { formatMarkdownSync } from './format';

export const Markdown = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  // TODO: Do not use fake `siteUrl`, or make the processing of `siteUrl` optional in `formatMarkdownSync`
  const html = formatMarkdownSync({ content: String(children), headingLevel: 1, siteUrl: 'https://example.com/' });
  return <div {...restProps} dangerouslySetInnerHTML={{ __html: html }} />;
};
