import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import style from './HomepageHero.module.css';

interface HomepageHeroProps {
	title: string;
	ctaLink: string;
	cta: string;
}

export const HomepageHero = ({title, ctaLink, cta, children}: PropsWithChildren<HomepageHeroProps>) => {
  return (
    <div className={clsx(style['homepage-hero'])}>
		  <div className={clsx(style["homepage-hero__description"])}>
			<h1 className={clsx(style["homepage-hero__title"])}>{title}</h1>
			{children}
		  </div>
		  <div className={clsx(style['homepage-hero__images'])}>
			  <img className={clsx(style['homepage-hero__image'])} src="/img/angela-300x300.png"/>
			  <img className={clsx(style['homepage-hero__image'])} src="/img/robbert-300x300.png"/>
			  <img className={clsx(style['homepage-hero__image'])} src="/img/rogier-300x300.png"/>
			  <img className={clsx(style['homepage-hero__image'])} src="/img/yolijn-300x300.png"/>
		  </div>
        <div className={clsx(style['homepage-hero__call-to-action'])}>
			  <Link
				  className={clsx('button', 'button--secondary')}
            to={ctaLink}>
            {cta}
          </Link>
        </div>
      </div>
  );
}

export default HomepageHero;
