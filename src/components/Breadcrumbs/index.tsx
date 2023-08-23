import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';
import { IconChevronLeft, IconSlash } from '@tabler/icons-react';

export type Breadcrumb = { href: string; label: string };

export interface BreadcrumbsProps {
   breadcrumbs: Breadcrumb[]
   mobileCrumb: Breadcrumb
}

export default function Breadcrumbs({ breadcrumbs, mobileCrumb }: BreadcrumbsProps): JSX.Element | null {
  console.log(breadcrumbs)
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
