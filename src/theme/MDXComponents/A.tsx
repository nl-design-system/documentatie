import { Link, type LinkProps } from '@utrecht/component-library-react/dist/css-module';
import type { ReactElement } from 'react';

export default function MDXA({ href, hrefLang, className, children }: LinkProps): ReactElement {
  return (
    <Link href={href} hrefLang={hrefLang} className={className}>
      {children}
    </Link>
  );
}
