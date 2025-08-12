import { MDXProvider } from '@mdx-js/react';
import {
  Code,
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
  UnorderedList,
} from '@utrecht/component-library-react/dist/css-module';
import type { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MDXContent({ children }: any): ReactElement {
  return (
    <MDXProvider
      components={{
        code: Code,
        a: Link,
        em: Emphasis,
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
      }}
    >
      {children}
    </MDXProvider>
  );
}
