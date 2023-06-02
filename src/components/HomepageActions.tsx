import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Heading2, Paragraph } from '@utrecht/component-library-react';
import Link from '@docusaurus/Link';
import style from './HomepageActions.module.css';

interface Action {
  title: string;
  description: string;
  href: string;
}
interface HomepageActionsProps {
  actions: Action[];
}
export const HomepageActions = ({ actions }: HomepageActionsProps) => (
  <div className={clsx(style['homepage-actions'], 'container')}>
    {actions.map(({ title, description, href }) => (
      <div className={clsx(style['homepage-actions__action'])}>
        <div>
          <Heading2>{title}</Heading2>
          <Paragraph>{description}</Paragraph>
        </div>
        <Paragraph>
          <Link to={href} className={clsx('utrecht-link')}>
            Bekijk de {title}
          </Link>
        </Paragraph>
      </div>
    ))}
  </div>
);
