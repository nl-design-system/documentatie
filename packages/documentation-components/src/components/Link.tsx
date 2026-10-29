import { Link as LinkComponent, type LinkProps } from '../link/link';
import { hasFileExtension } from '../utils';
import type { PropsWithChildren } from 'react';

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

export const Link = (props: PropsWithChildren<LinkProps>) => {
  return <LinkComponent {...props} {...improveLinkProps(props)} />;
};
