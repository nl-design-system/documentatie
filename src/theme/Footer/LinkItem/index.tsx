import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/LinkItem';
import clsx from 'clsx';

export default function FooterLinkItem({ item }: Props): JSX.Element {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link className={clsx('utrecht-link')} href={prependBaseUrlToHref ? normalizedHref : href} to={toUrl} {...props}>
      {label}
    </Link>
  );
}
