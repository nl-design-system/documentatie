import React, { Fragment } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Breadcrumbs.module.css';
import clsx from 'clsx';
import { IconChevronLeft } from '@tabler/icons-react';
import {
  BreadcrumbNav as UtrechtBreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
  ButtonGroup,
} from '@utrecht/component-library-react/dist/css-module';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export interface BreadcrumbNavProps {
  breadcrumbs: {
    label: string;
    href: string;
    rel?: string;
  }[];
}

export const BreadcrumbNav = ({ breadcrumbs, ...restProps }) => {
  const homeHref = useBaseUrl('/');
  const links = [{ href: homeHref, label: 'Home', rel: 'home' }, ...breadcrumbs];
  const { pathname } = useLocation();

  // findLast didn't have fantastic support yet, reverse the array instead
  const up = [...links].reverse().find((link) => link.href !== pathname);

  return (
    <>
      <div className={clsx(styles['breadcrumbs'], styles['breadcrumbs--desktop'])}>
        <UtrechtBreadcrumbNav {...restProps}>
          {links.map(({ label, href, rel }, index, { length }) => (
            <Fragment key={index}>
              <BreadcrumbNavLink
                href={href}
                current={index === length - 1}
                disabled={index === length - 1}
                rel={clsx(rel, { up: index === length - 2 })}
              >
                {label}
              </BreadcrumbNavLink>
              {index < length - 1 && <BreadcrumbNavSeparator>/</BreadcrumbNavSeparator>}
            </Fragment>
          ))}
        </UtrechtBreadcrumbNav>
      </div>
      {up && (
        <div className={clsx(styles['breadcrumbs'], styles['breadcrumbs--mobile'])}>
          <ButtonGroup>
            <Link href={up.href} rel={up.rel} className="utrecht-link utrecht-link--html-a">
              <Icon>
                <IconChevronLeft />
              </Icon>
              {up.label}
            </Link>
          </ButtonGroup>
        </div>
      )}
    </>
  );
};
