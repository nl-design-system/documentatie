import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export const options = {
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
};
