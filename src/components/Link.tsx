import React from 'react';
import DocusaurusLink from '@docusaurus/Link';

export const Link = ({ children, ...restProps }) => (
  <DocusaurusLink className="utrecht-link utrecht-link--html-a">{children}</DocusaurusLink>
);
