import type { Props } from '@theme/Navbar/Search';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function NavbarSearch({ children, className, ...props }: Props): ReactElement {
  return (
    <div className={clsx(className, 'nav-search-bar')} {...props}>
      {children}
    </div>
  );
}
