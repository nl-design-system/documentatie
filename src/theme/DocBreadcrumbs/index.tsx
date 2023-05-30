import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { matchPath, useLocation } from '@docusaurus/router';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { IconChevronLeft, IconSlash } from '@tabler/icons-react';

export default function DocBreadcrumbs(): JSX.Element | null {
  const sidebarBreadcrumbs =
    useSidebarBreadcrumbs()?.map((item) => {
      if (item.type === 'category') {
        return { ...item, ...item.items.find((i) => i.type === 'link'), label: item.label };
      }
      return item;
    }) || [];

  const homeHref = useBaseUrl('/');
  const mobileSidebar = useNavbarMobileSidebar();

  const breadcrumbs = [{ href: homeHref, label: 'Home' }, ...sidebarBreadcrumbs];
  const mobileBreadcrumb = breadcrumbs[breadcrumbs.length - 1] || breadcrumbs[0];

  if (!breadcrumbs) {
    return null;
  }
  return (
    <nav
      className={clsx(ThemeClassNames.docs.docBreadcrumbs, styles.breadcrumbsContainer)}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      {mobileSidebar.shouldRender ? (
        <div className={clsx(styles['breadcrumbs'])}>
          <IconChevronLeft /> <Link href={mobileBreadcrumb.href}>{mobileBreadcrumb.label}</Link>
        </div>
      ) : (
        <ul className={clsx(styles['breadcrumbs'])} itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs?.map(({ href, label }, i, all) => {
            const isLast = all.length - 1 === i;
            return (
              <Fragment key={label}>
                <li className={clsx(styles['breadcrumbs__item'], isLast && styles['breadcrumbs__item--last'])}>
                  {isLast ? (
                    label
                  ) : (
                    <Link className={clsx(styles['breadcrumbs__link'])} href={href}>
                      {label}
                    </Link>
                  )}
                </li>
                {!isLast && <IconSlash className={clsx(styles['breadcrumbs__separator'])} />}
              </Fragment>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
