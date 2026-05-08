import type { Props } from '@docusaurus/Link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

/**
 * Link component with stable trailing slash and target
 * @private - Only to be used in this file and ButtonLink
 */
export const BareLink = ({ children, ...props }: PropsWithChildren<Props>) => {
  const { to, href, ..._props } = props;
  let dest = to || href;

  const url = new URL(dest, 'https://nldesignsystem.nl');

  // Internal link
  if (url.origin === 'https://nldesignsystem.nl') {
    // add trailing slash
    url.pathname = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;

    // keep internal links relative
    dest = url.toString().replace('https://nldesignsystem.nl', '');
  }

  // Exteral link
  else {
    _props.target = '_blank';
    _props.rel = 'noopener noreferrer';
  }

  return (
    <a href={dest} {..._props}>
      {children}
    </a>
  );
};

export const Link = ({ className, ...props }: PropsWithChildren<Props>) => {
  return <BareLink className={clsx('utrecht-link', 'utrecht-link--html-a', className)} {...props} />;
};
