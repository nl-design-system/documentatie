import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { IconChevronLeft, IconSlash } from '@tabler/icons-react';

export default function DocBreadcrumbs(): JSX.Element | null {
  const sidebarBreadcrumbs = useSidebarBreadcrumbs() || [];

  const homeHref = useBaseUrl('/');
  const { pathname } = useLocation();
  const homeCrumb = { href: homeHref, label: 'Home' };

  const breadcrumbs = [homeCrumb, ...sidebarBreadcrumbs];
  const parentCrumb = (breadcrumbs.length > 2 && breadcrumbs[breadcrumbs.length - 2]) || homeCrumb;
  const mobileCrumb = parentCrumb.href !== pathname ? parentCrumb : homeCrumb;

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
      <ul
        className={clsx(styles['breadcrumbs'], styles['breadcrumbs--desktop'])}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs?.map(({ href, label }, i, all) => {
          const isLast = all.length - 1 === i;
          return (
            <Fragment key={label}>
              <li className={clsx(styles['breadcrumbs__item'], isLast && styles['breadcrumbs__item--last'])}>
                {isLast ? (
                  label
                ) : (
                  <Link className={clsx(styles['breadcrumbs__link'], 'utrecht-link')} href={href}>
                    {label}
                  </Link>
                )}
              </li>
              {!isLast && <IconSlash className={clsx(styles['breadcrumbs__separator'])} />}
            </Fragment>
          );
        })}
      </ul>
      <div className={clsx(styles['breadcrumbs'], styles['breadcrumbs--mobile'])}>
        <IconChevronLeft />
        <Link className={clsx(styles['breadcrumbs__link'], 'utrecht-link')} href={mobileCrumb.href}>
          {mobileCrumb.label}
        </Link>
      </div>
    </nav>
  );
}
