import { Link } from '@site/src/components/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/DocSidebarItem/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import './styles.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index: _,
  ...props
}: Props): ReactElement {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}
    >
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && 'menuExternalLink',
          {
            'menu__link--active': isActive,
          },
          'utrecht-link',
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
