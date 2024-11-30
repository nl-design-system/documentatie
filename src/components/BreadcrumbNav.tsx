import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { IconChevronLeft } from '@tabler/icons-react';
import {
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonGroup,
  Icon,
  BreadcrumbNav as UtrechtBreadcrumbNav,
} from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import './Breadcrumbs.css';

export interface BreadcrumbNavProps {
  breadcrumbs: {
    label: string;
    href: string;
    rel?: string;
  }[];
}

export const BreadcrumbNav = ({ breadcrumbs, ...restProps }: BreadcrumbNavProps) => {
  const homeHref = useBaseUrl('/');
  const links = [{ href: homeHref, label: 'Home', rel: 'home' }, ...breadcrumbs];
  const { pathname } = useLocation();

  // findLast didn't have fantastic support yet, reverse the array instead
  const up = [...links].reverse().find((link) => link.href !== pathname);

  return (
    <>
      <div className={clsx('breadcrumbs', 'breadcrumbs--desktop')}>
        <UtrechtBreadcrumbNav {...restProps} label="breadcrumb">
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
        <div className={clsx('breadcrumbs', 'breadcrumbs--mobile')}>
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
