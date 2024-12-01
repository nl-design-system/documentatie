import { ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocSidebarItem/Html';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function DocSidebarItemHtml({ item, level, index }: Props): ReactElement {
  const { value, defaultStyle, className } = item;
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        defaultStyle && ['menuHtmlItem', 'menu__list-item'],
        className,
      )}
      key={index}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
