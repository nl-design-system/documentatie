import Link from '@docusaurus/Link';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import style from './HomepageHero.module.css';

interface HomepageHeroProps {
  title: string;
  ctaLink: string;
  cta: string;
}

export const HomepageHero = ({ title, ctaLink, cta, children }: PropsWithChildren<HomepageHeroProps>) => (
  <div className={clsx(style['homepage-hero'])}>
    <div className={clsx('container', style['homepage-hero__container'])}>
      <Heading1 className={clsx(style['homepage-hero__title'])}>{title}</Heading1>
      <div className={clsx(style['homepage-hero__description'])}>{children}</div>
      <Paragraph className={clsx(style['homepage-hero__call-to-action'])}>
        <Link className={clsx('utrecht-link', style['homepage-hero__call-to-action-link'])} to={ctaLink}>
          {cta}
          <IconChevronRight
            className={clsx('utrecht-icon', style['homepage-hero__call-to-action-icon'])}
            style={{ verticalAlign: 'middle' }}
          />
        </Link>
      </Paragraph>
    </div>
  </div>
);

export default HomepageHero;
