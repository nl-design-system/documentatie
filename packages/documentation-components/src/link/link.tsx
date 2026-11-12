import { Link as CandidateLink, type LinkProps as CandidateLinkProps } from '@nl-design-system-candidate/link-react';
import { hasFileExtension } from '../utils.ts';
import type { PropsWithChildren } from 'react';

import '@nl-design-system-candidate/link-css/link.css';

// `href` is optional on `<a>` elements. This change allows us to use Link
// as override component on markdown rendered content. (`components={{ a: Link }}`).
// which otherwise would throw a type error
export type LinkProps = Omit<CandidateLinkProps, 'href'> & { href?: CandidateLinkProps['href'] };

export const improveLinkProps = ({ href }: Partial<LinkProps>) => {
  const _props: Partial<LinkProps> = {};

  if (typeof href !== 'string') {
    return _props;
  }

  const url = new URL(href, 'https://nldesignsystem.nl');

  // Internal link
  if (url.origin === 'https://nldesignsystem.nl') {
    // guarantee trailing slash if it is a pathname without file extension
    // (e.g. /docs/index/ or /docs/index vs /docs/index.html or /docs/file.ics)
    if (!url.pathname.endsWith('/') && !hasFileExtension(url.pathname)) {
      url.pathname = `${url.pathname}/`;
    }

    // keep internal links relative
    _props.href = url.toString().replace('https://nldesignsystem.nl', '');
  }

  // Exteral link
  else {
    _props.target = '_blank';
    _props.rel = 'noopener noreferrer';
  }

  return _props;
};

export const Link = ({ href, ...props }: PropsWithChildren<LinkProps>) => {
  return <CandidateLink href={href} {...props} {...improveLinkProps({ href })} />;
};
