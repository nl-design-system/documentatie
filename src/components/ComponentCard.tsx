import React, { PropsWithChildren } from 'react';
import style from './ComponentCard.module.css';
import { Link } from '@docusaurus/router';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ExternalLink } from './ExternalLink';
import { COMPONENT_STATES } from '@site/src/utils';

interface ComponentCardProps {
  title: string;
  status: string;
  doc?: string;
  preview?: string;
  communityLink?: string;
}

const mapClassName = (status) => {
  switch (status) {
    case COMPONENT_STATES.TODO:
      return 'help-wanted';
    case COMPONENT_STATES.COMMUNITY:
      return 'community';
    case COMPONENT_STATES.NL_UNSTABLE:
      return 'unstable';
    case COMPONENT_STATES.NL_STABLE:
      return 'stable';
  }
};

export const ComponentCard = ({ title, status, doc, preview }: ComponentCardProps) => (
  <div className={clsx(style['component-card'], style[`component-card--${mapClassName(status)}`])}>
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
      ) : (
        <p className={style['component-card__title']}>{title}</p>
      )}
      <div className={clsx(style['component-card__status'], style[`component-card__status--${mapClassName(status)}`])}>
        {status}
      </div>
    </div>
  </div>
);

export const ComponentCards = ({ children }: PropsWithChildren<{}>) => (
  <div className={style['component-cards']}>{children}</div>
);
