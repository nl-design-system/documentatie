import DocusaurusLink from '@docusaurus/Link';
import React from 'react';

export const Link = ({ children, ...restProps }) => (
  <DocusaurusLink className="utrecht-link utrecht-link--html-a">{children}</DocusaurusLink>
);
