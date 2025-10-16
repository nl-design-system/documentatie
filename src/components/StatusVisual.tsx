import clsx from 'clsx';
import { ArrowDown } from './Icons';
import './StatusVisual.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx('status-visual')}>
      <div className={clsx('status-visual__status', 'status-visual__status--help-wanted')}>
        <dt className={clsx('status-visual__title')}>Help Wanted</dt>
        <dd className={clsx('status-visual__description')}>
          Voorkomt misverstanden door informatie te verzamelen zoals naam, beschrijving en voorbeelden. Zo heb je het
          altijd over hetzelfde.
        </dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--community')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Community</dt>
        <dd className={clsx('status-visual__description')}>
          Voorkomt dubbel werk doordat de ene organisatie beschikbaar maakt wat ze zelf nodig hebben en andere
          organisaties dit hergebruiken en verbeteren.
        </dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--unstable')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Candidate</dt>
        <dd className={clsx('status-visual__description')}>
          Zorgt voor draagvlak door feedback te vragen op een voorstel op basis van de bijdragen uit de community.
        </dd>
      </div>
      <div className={clsx('status-visual__status', 'status-visual__status--stable')}>
        <ArrowDown className={clsx('status-visual__connector')} />
        <dt className={clsx('status-visual__title')}>Hall of Fame</dt>
        <dd className={clsx('status-visual__description')}>
          Bewezen en stabiel, toegankelijk, gebruiksvriendelijk en herbruikbaar.
        </dd>
      </div>
    </dl>
  );
};
