import clsx from 'clsx';
import { ArrowDown } from './Icons';
import './StatusVisual.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx('ma-status-visual')}>
      <dt className={clsx('ma-status-visual__title', 'ma-status-visual--help-wanted')}>Help Wanted</dt>
      <dd className={clsx('ma-status-visual__description', 'ma-status-visual--help-wanted')}>
        Voorkomt misverstanden door informatie te verzamelen zoals naam, beschrijving en voorbeelden. Zo heb je het
        altijd over hetzelfde.
      </dd>

      <dt className={clsx('ma-status-visual__title', 'ma-status-visual--community')}>
        <div className="ma-status-visual__connector-wrapper">
          <ArrowDown className={clsx('ma-status-visual__connector')} />
        </div>
        <div className="ma-status-visual__title-text">Community</div>
      </dt>
      <dd className={clsx('ma-status-visual__description', 'ma-status-visual--community')}>
        Voorkomt dubbel werk doordat de ene organisatie beschikbaar maakt wat ze zelf nodig hebben en andere
        organisaties dit hergebruiken en verbeteren.
      </dd>

      <dt className={clsx('ma-status-visual__title', 'ma-status-visual--unstable')}>
        <div className="ma-status-visual__connector-wrapper">
          <ArrowDown className={clsx('ma-status-visual__connector')} />
        </div>
        <div className="ma-status-visual__title-text">Candidate</div>
      </dt>
      <dd className={clsx('ma-status-visual__description', 'ma-status-visual--unstable')}>
        Zorgt voor draagvlak door feedback te vragen op een voorstel op basis van de bijdragen uit de community.
      </dd>

      <dt className={clsx('ma-status-visual__title', 'ma-status-visual--stable')}>
        <div className="ma-status-visual__connector-wrapper">
          <ArrowDown className={clsx('ma-status-visual__connector')} />
        </div>
        <div className="ma-status-visual__title-text">Hall of Fame</div>
      </dt>
      <dd className={clsx('ma-status-visual__description', 'ma-status-visual--stable')}>
        Bewezen en stabiel, toegankelijk, gebruiksvriendelijk en herbruikbaar.
      </dd>
    </dl>
  );
};
