import type { Props } from '@theme/NavbarItem/HtmlNavbarItem';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function HtmlNavbarItem({
  value,
  className,
  mobile = false,
  isDropdownItem = false,
}: Props): ReactElement {
  const Comp = isDropdownItem ? 'li' : 'div';
  return (
    <Comp
      className={clsx(
        {
          navbar__item: !mobile && !isDropdownItem,
          'menu__list-item': mobile,
        },
        className,
      )}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
