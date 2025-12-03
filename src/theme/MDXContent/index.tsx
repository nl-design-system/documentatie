import { MDXProvider } from '@mdx-js/react';
import Admonition from '@theme-original/Admonition';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXPre from '@theme/MDXComponents/Pre';
import type { Props } from '@theme/MDXContent';
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

export default function MDXContent({ children }: Props): ReactElement {
  return (
    <MDXProvider
      components={{
        code: Code,
        a: Link,
        em: Emphasis,
        pre: MDXPre,
        details: MDXDetails,
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
        admonition: Admonition,
      }}
    >
      {children}
    </MDXProvider>
  );
}
