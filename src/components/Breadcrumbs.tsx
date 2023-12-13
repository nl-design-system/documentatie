import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { IconChevronLeft, IconSlash } from '@tabler/icons-react';
import clsx from 'clsx';
import React, { Fragment, HTMLAttributes } from 'react';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  breadcrumbs?: BreadcrumbItem[];
}

export const Breadcrumbs = ({ breadcrumbs = [], className }: BreadcrumbsProps) => {
  const homeHref = useBaseUrl('/');
  const { pathname } = useLocation();
  const homeCrumb = { href: homeHref, label: 'Home' };

  const parentCrumb = (breadcrumbs.length > 2 && breadcrumbs[breadcrumbs.length - 2]) || homeCrumb;
  const mobileCrumb = parentCrumb.href !== pathname ? parentCrumb : homeCrumb;
  const desktopCrumbs = [homeCrumb, ...breadcrumbs];

  return (
    <nav
      className={clsx(className, styles.breadcrumbsContainer)}
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
        {desktopCrumbs.map(({ href, label }, i, all) => {
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
};
