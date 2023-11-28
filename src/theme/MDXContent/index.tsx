import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXHead from '@theme/MDXComponents/Head';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
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
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';

export default function MDXContent({ children }: Props): JSX.Element {
  return (
    <MDXProvider
      components={{
        head: MDXHead,
        code: Code,
        a: Link,
        em: Emphasis,
        pre: MDXPre,
        details: MDXDetails,
        ul: UnorderedList,
        li: UnorderedListItem,
        img: Image,
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
