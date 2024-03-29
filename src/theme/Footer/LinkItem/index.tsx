import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/LinkItem';
import clsx from 'clsx';
import React from 'react';

export default function FooterLinkItem({ item }: Props): React.Element {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link className={clsx('utrecht-link')} href={prependBaseUrlToHref ? normalizedHref : href} to={toUrl} {...props}>
      {label}
    </Link>
  );
}
