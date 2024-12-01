import DocusaurusLink from '@docusaurus/Link';
import type { PropsWithChildren } from 'react';

export const Link = ({ children }: PropsWithChildren<object>) => (
  <DocusaurusLink className="utrecht-link utrecht-link--html-a">{children}</DocusaurusLink>
);
