import { MDXProvider } from '@mdx-js/react';
import Admonition from '@theme/Admonition';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHead from '@theme/MDXComponents/Head';
import MDXPre from '@theme/MDXComponents/Pre';
import type { Props } from '@theme/MDXContent';
import Mermaid from '@theme/Mermaid';
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
import React from 'react';

export default function MDXContent({ children }: Props): React.Element {
  return (
    <MDXProvider
      components={{
        head: MDXHead,
        code: Code,
        a: Link,
        em: Emphasis,
        pre: MDXPre,
        details: MDXDetails,
        img: Image,
        ol: OrderedList,
        ul: UnorderedList,
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        admonition: Admonition,
        mermaid: Mermaid,
      }}
    >
      {children}
    </MDXProvider>
  );
}
