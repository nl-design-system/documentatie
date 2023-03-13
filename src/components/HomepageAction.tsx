import React, { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import style from './HomepageAction.module.css';
import Link from '@docusaurus/Link';
import { Heading2 } from '@utrecht/component-library-react';

interface HomepageActionsProps {
  title: string;
  href: string;
  icon?: ReactNode;
}

export const HomepageAction = ({ title, href, icon, children }: PropsWithChildren<HomepageActionsProps>) => (
  <div className={clsx(style['homepage-action'])}>
    <Link to={href} className={clsx(style['homepage-action__link'])}>
      <div className={clsx(style['homepage-action__icon'])}>{icon}</div>
      <Heading2 className={clsx(style['homepage-action__title'])}>{title}</Heading2>
      <div className={clsx(style['homepage-action__description'])}>{children}</div>
    </Link>
  </div>
);
