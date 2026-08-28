import type { HTMLAttributes } from 'react';
import { Heading, type HeadingLevel } from '@nl-design-system-candidate/heading-react';
import clsx from 'clsx';
import './RelayModel.css';

export const RelayModel = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className="ma-relay-model-container">
    <div className="ma-relay-model" {...props}>
      {children || (
        <>
          <div className="ma-relay-model__cell ma-relay-model__cell--help-wanted">
            <p className="ma-relay-model__label">Help Wanted</p>
          </div>
          <div className="ma-relay-model__cell ma-relay-model__cell--community">
            <p className="ma-relay-model__label">Community</p>
          </div>
          <div className="ma-relay-model__cell ma-relay-model__cell--candidate">
            <p className="ma-relay-model__label">Candidate</p>
          </div>
          <div className="ma-relay-model__cell ma-relay-model__cell--hall-of-fame">
            <p className="ma-relay-model__label">Hall of Fame</p>
          </div>
        </>
      )}
    </div>
  </div>
);

interface RelaySectionProps extends HTMLAttributes<HTMLElement> {
  headingLevel: HeadingLevel;
  relayLevel: 'help-wanted' | 'community' | 'candidate' | 'hall-of-fame';
}

export const RelaySection = ({ children, headingLevel, relayLevel, ...props }: RelaySectionProps) => {
  const headingMap: Record<RelaySectionProps['relayLevel'], string> = {
    'help-wanted': 'Help Wanted',
    community: 'Community',
    candidate: 'Candidate',
    'hall-of-fame': 'Hall of Fame',
  };
  return (
    <section className={clsx('ma-relay-model__cell', `ma-relay-model__cell--${relayLevel}`, 'ma-flow')} {...props}>
      <Heading className="ma-relay-model__label" level={headingLevel}>
        {headingMap[relayLevel]}
      </Heading>
      {children}
    </section>
  );
};
