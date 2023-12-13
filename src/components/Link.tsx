import DocusaurusLink from '@docusaurus/Link';
import React, { PropsWithChildren } from 'react';

export const Link = ({ children }: PropsWithChildren<{}>) => (
  <DocusaurusLink className="utrecht-link utrecht-link--html-a">{children}</DocusaurusLink>
);
