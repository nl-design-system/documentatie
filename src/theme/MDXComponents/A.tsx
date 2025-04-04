import type { Props } from '@theme/MDXComponents/A';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import type { ReactElement } from 'react';

export default function MDXA({ href, hrefLang, className, children }: Props): ReactElement {
  return (
    <Link href={href} hrefLang={hrefLang} className={className}>
      {children}
    </Link>
  );
}
