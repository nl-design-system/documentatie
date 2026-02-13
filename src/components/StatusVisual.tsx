import clsx from 'clsx';
import { ArrowDown } from './Icons';
import './StatusVisual.css';

export const StatusVisual = () => {
  return (
    <dl className={clsx('status-visual')}>
      <dt className={clsx('status-visual__title', 'status-visual__status--help-wanted')}>Help Wanted</dt>
      <dd className={clsx('status-visual__description', 'status-visual__status--help-wanted')}>
        Voorkomt misverstanden door informatie te verzamelen zoals naam, beschrijving en voorbeelden. Zo heb je het
        altijd over hetzelfde.
      </dd>

      <dt className={clsx('status-visual__title', 'status-visual__status--community')}>
        <ArrowDown className={clsx('status-visual__connector')} /> Community
      </dt>
      <dd className={clsx('status-visual__description', 'status-visual__status--community')}>
        Voorkomt dubbel werk doordat de ene organisatie beschikbaar maakt wat ze zelf nodig hebben en andere
        organisaties dit hergebruiken en verbeteren.
      </dd>

      <dt className={clsx('status-visual__title', 'status-visual__status--unstable')}>
        <ArrowDown className={clsx('status-visual__connector')} /> Candidate
      </dt>
      <dd className={clsx('status-visual__description', 'status-visual__status--unstable')}>
        Zorgt voor draagvlak door feedback te vragen op een voorstel op basis van de bijdragen uit de community.
      </dd>

      <dt className={clsx('status-visual__title', 'status-visual__status--stable')}>
        <ArrowDown className={clsx('status-visual__connector')} /> Hall of Fame
      </dt>
      <dd className={clsx('status-visual__description', 'status-visual__status--stable')}>
        Bewezen en stabiel, toegankelijk, gebruiksvriendelijk en herbruikbaar.
      </dd>
    </dl>
  );
};
