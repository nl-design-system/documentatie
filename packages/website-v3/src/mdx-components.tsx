import {
  Blockquote,
  Code,
  CodeBlock,
  Emphasis,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Link,
  OrderedList,
  Paragraph,
  Separator,
  Strong,
  UnorderedList,
} from '@utrecht/component-library-react';

export const mdxComponents = {
  code: Code,
  a: Link,
  em: Emphasis,
  pre: CodeBlock,
  //   details: MDXDetails,
  ul: ({ children }) => {
    return <UnorderedList className="utrecht-unordered-list--html-content">{children}</UnorderedList>;
  },
  ol: ({ children }) => {
    return <OrderedList className="utrecht-ordered-list--html-content">{children}</OrderedList>;
  },
  img: Image,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  blockquote: Blockquote,
  strong: Strong,
  hr: Separator,
};
