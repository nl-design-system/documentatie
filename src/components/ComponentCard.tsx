import React, { PropsWithChildren } from 'react';
import style from './ComponentCard.module.css';
import { Link } from '@docusaurus/router';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ExternalLink } from './ExternalLink';

enum Status {
  'help-wanted' = 'Help Wanted',
  'community' = 'Community',
  'unstable' = 'Unstable',
  'stable' = 'Stable',
}

interface ComponentCardProps {
  title: string;
  status: string;
  doc?: string;
  preview?: string;
  communityLink?: string;
}

export const ComponentCard = ({ title, status, doc, preview, communityLink }: ComponentCardProps) => (
  <div
    className={clsx(
      style['component-card'],
      style[`component-card--${status}`],
      !doc && communityLink && style['component-card--undocumented'],
    )}
  >
    <div className={style['component-card__header']}>
      {preview && (
        <div className={style['component-card__image-wrapper']}>
          <img className={style['component-card__image']} src={useBaseUrl(preview)} alt={`${title} voorbeeld`} />
        </div>
      )}
    </div>
    <div className={style['component-card__body']}>
      {doc ? (
        <Link to={doc} className={clsx(style['component-card__title'], style['component-card__title--link'])}>
          {title}
        </Link>
      ) : communityLink ? (
        <ExternalLink
          href={communityLink}
          className={clsx(style['component-card__title'], style['component-card__title--link'])}
        >
          {title}
        </ExternalLink>
      ) : (
        <p className={style['component-card__title']}>{title}</p>
      )}
      <div className={clsx(style['component-card__status'], style[`component-card__status--${status}`])}>
        {Status[status]}
      </div>
    </div>
  </div>
);

export const ComponentCards = ({ children }: PropsWithChildren<{}>) => (
  <div className={style['component-cards']}>{children}</div>
);
