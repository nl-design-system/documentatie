import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import style from './HomepageActions.module.css';
import { Link } from '@docusaurus/router';

interface HomepageActionProps {
	title: string;
	href: string
}

export const HomepageActions = ({ children }: PropsWithChildren<{}>) =>  (
	<div className={clsx(style['homepage-actions'], 'container')}>
		{children}
	</div>
)

export const HomepageAction = ({ title, href, children }: PropsWithChildren<HomepageActionProps>) => (
	<div className={clsx(style['homepage-actions__action'], style['homepage-action'])}>
		<Link to={href} className={clsx(style['homepage-action__link'])}>
			<h2 className={clsx(style['homepage-action__title'])}>{title}</h2>
			<div className={clsx(style['homepage-action__description'])}>{children}</div>
		</Link>
	</div>
)
