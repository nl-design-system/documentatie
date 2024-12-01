import clsx from 'clsx';
import { ArrowDown } from './Icons';
import './StatusVisual.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx('status-visual')}>
      <div className={clsx('status-visual__status', 'status-visual__status--help-wanted')}>
        <dt className={clsx('status-visual__title')}>Help Wanted</dt>
        <dd className={clsx('status-visual__description')}>Klaar om van de backlog opgepakt te worden</dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--community')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Community</dt>
        <dd className={clsx('status-visual__description')}>
          Door de community gebouwd volgens NL Design System richtlijnen
        </dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--unstable')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Candidate</dt>
        <dd className={clsx('status-visual__description')}>NL Design System component, maar is nog in ontwikkeling</dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--stable')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Hall of Fame</dt>
        <dd className={clsx('status-visual__description')}>
          NL Design System component volgens onze Definition of Done
        </dd>
      </div>
    </dl>
  );
};
