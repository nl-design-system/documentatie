import { Link } from '@site/src/components/Link';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import './HomepageHero.css';

interface HomepageHeroProps {
  title: string;
  ctaLink: string;
  cta: string;
}

export const HomepageHero = ({ title, ctaLink, cta, children }: PropsWithChildren<HomepageHeroProps>) => (
  <div className="homepage-hero">
    <div className={clsx('container', 'homepage-hero__container')}>
      <Heading1 className="homepage-hero__title">{title}</Heading1>
      <div className="homepage-hero__description">{children}</div>
      <Paragraph className="homepage-hero__call-to-action">
        <Link className={clsx('utrecht-link', 'homepage-hero__call-to-action-link')} to={ctaLink}>
          {cta}
          <IconChevronRight
            className={clsx('utrecht-icon', 'homepage-hero__call-to-action-icon')}
            style={{ verticalAlign: 'middle' }}
          />
        </Link>
      </Paragraph>
    </div>
  </div>
);

export default HomepageHero;
