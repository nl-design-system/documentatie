import React from 'react';
import clsx from 'clsx';

import style from './StatusVisual.module.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx(style['status-visual'])}>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--help-wanted'])}>
        <dt className={clsx(style['status-visual__title'])}>Help Wanted</dt>
        <dd className={clsx(style['status-visual__description'])}>
          Klaar om van de{' '}
          <a href="http://github.com/nl-design-system/backlog/issues" className={clsx(style['status-visual__link'])}>
            backlog
          </a>{' '}
          opgepakt te worden
        </dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--community'])}>
        <dt className={clsx(style['status-visual__title'])}>Community</dt>
        <dd className={clsx(style['status-visual__description'])}>
          Door de community gebouwd volgens NLDS richtlijnen
        </dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--unstable'])}>
        <dt className={clsx(style['status-visual__title'])}>Candidate</dt>
        <dd className={clsx(style['status-visual__description'])}>NLDS component, maar is nog in ontwikkeling</dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--stable'])}>
        <dt className={clsx(style['status-visual__title'])}>Hall of Fame</dt>
        <dd className={clsx(style['status-visual__description'])}>NLDS component volgens onze Definition of Done</dd>
      </div>
    </dl>
  );
};
