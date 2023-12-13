import clsx from 'clsx';
import React from 'react';
import { ArrowDown } from './Icons';
import style from './StatusVisual.module.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx(style['status-visual'])}>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--help-wanted'])}>
        <dt className={clsx(style['status-visual__title'])}>Help Wanted</dt>
        <dd className={clsx(style['status-visual__description'])}>Klaar om van de backlog opgepakt te worden</dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--community'])}>
        <ArrowDown className={clsx(style['status-visual__connector'])} />
        <dt className={clsx(style['status-visual__title'])}>Community</dt>
        <dd className={clsx(style['status-visual__description'])}>
          Door de community gebouwd volgens NLDS richtlijnen
        </dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--unstable'])}>
        <ArrowDown className={clsx(style['status-visual__connector'])} />
        <dt className={clsx(style['status-visual__title'])}>Candidate</dt>
        <dd className={clsx(style['status-visual__description'])}>NLDS component, maar is nog in ontwikkeling</dd>
      </div>
      <div className={clsx(style['status-visual__status'], style['status-visual__status--stable'])}>
        <ArrowDown className={clsx(style['status-visual__connector'])} />
        <dt className={clsx(style['status-visual__title'])}>Hall of Fame</dt>
        <dd className={clsx(style['status-visual__description'])}>NLDS component volgens onze Definition of Done</dd>
      </div>
    </dl>
  );
};
