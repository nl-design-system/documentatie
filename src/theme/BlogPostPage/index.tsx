import type { BlogSidebar } from '@docusaurus/plugin-content-blog';
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common';
import { BlogPostProvider, useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
import type { Props } from '@theme/BlogPostPage';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import TOC from '@theme/TOC';
import clsx from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import BlogLayout from '../BlogLayout';

function BlogPostPageContent({ sidebar, children }: { sidebar: BlogSidebar; children: ReactNode }): ReactElement {
  const { metadata, toc } = useBlogPost();
  const { nextItem, prevItem, frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: metadata.title, href: '#' },
      ]}
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC toc={toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
        ) : undefined
      }
    >
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />}
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): ReactElement {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
