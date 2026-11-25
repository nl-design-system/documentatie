import type { PropsWithChildren } from 'react';
import { Link as CandidateLink, type LinkProps as CandidateLinkProps } from '@nl-design-system-candidate/link-react';
import { URLData } from '@utrecht/component-library-react';
import '@nl-design-system-candidate/link-css/link.css';
import { hasFileExtension } from '../utils.ts';

// `href` is optional on `<a>` elements. This change allows us to use Link
// as override component on markdown rendered content. (`components={{ a: Link }}`).
// which otherwise would throw a type error
export type LinkProps = Omit<CandidateLinkProps, 'href'> & {
  external?: boolean;
  href?: CandidateLinkProps['href'];
  printable?: boolean;
};

export const improveLinkProps = ({ href }: Partial<LinkProps>) => {
  const _props: Partial<LinkProps> = {};

  if (typeof href !== 'string') {
    return _props;
  }

  if (href.startsWith('#')) {
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

export const Link = ({ external, href, printable, ...props }: PropsWithChildren<LinkProps>) => {
  const link = (
    <CandidateLink
      href={href}
      rel={external ? 'external noopener noreferrer' : undefined}
      {...props}
      {...improveLinkProps({ href })}
    />
  );

  if (printable) {
    return (
      <>
        {link}
        <URLData className="ma-print-url" hidden>
          {href}
        </URLData>
      </>
    );
  }
  return link;
};
