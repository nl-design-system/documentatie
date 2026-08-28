import type { HTMLAttributes, ReactNode } from 'react';
import './Estafettemodel.css';
import { Heading, type HeadingLevel } from '@nl-design-system-candidate/heading-react';

interface EstafettemodelProps extends HTMLAttributes<HTMLDivElement> {
  HelpWantedSection?: ReactNode;
  CommunitySection?: ReactNode;
  CandidateSection?: ReactNode;
  HallOfFameSection?: ReactNode;
  headingLevel?: HeadingLevel;
}

export const Estafettemodel = ({
  HelpWantedSection,
  CommunitySection,
  CandidateSection,
  HallOfFameSection,
  headingLevel = 2,
  ...props
}: EstafettemodelProps) => (
  <div className="ma-estafettemodel-container">
    <div className="ma-estafettemodel" {...props}>
      {HelpWantedSection ? (
        <section className="ma-estafettemodel__cell ma-estafettemodel__cell--help-wanted">
          <Heading className="ma-estafettemodel__label" level={headingLevel}>
            {/* Help Wanted icon */}
            Help Wanted
          </Heading>
          {HelpWantedSection}
        </section>
      ) : (
        <div className="ma-estafettemodel__cell ma-estafettemodel__cell--help-wanted">
          {/* Help Wanted icon */}
          <p className="ma-estafettemodel__label">Help Wanted</p>
        </div>
      )}

      {CommunitySection ? (
        <section className="ma-estafettemodel__cell ma-estafettemodel__cell--community">
          <Heading className="ma-estafettemodel__label" level={headingLevel}>
            {/* Community icon */}
            Community
          </Heading>
          {CommunitySection}
        </section>
      ) : (
        <div className="ma-estafettemodel__cell ma-estafettemodel__cell--community">
          {/* Community icon */}
          <p className="ma-estafettemodel__label">Community</p>
        </div>
      )}

      {CandidateSection ? (
        <section className="ma-estafettemodel__cell ma-estafettemodel__cell--candidate">
          <Heading className="ma-estafettemodel__label" level={headingLevel}>
            {/* Candidate icon */}
            Candidate
          </Heading>
          {CandidateSection}
        </section>
      ) : (
        <div className="ma-estafettemodel__cell ma-estafettemodel__cell--candidate">
          {/* Candidate icon */}
          <p className="ma-estafettemodel__label">Candidate</p>
        </div>
      )}

      {HallOfFameSection ? (
        <section className="ma-estafettemodel__cell ma-estafettemodel__cell--hall-of-fame">
          <Heading className="ma-estafettemodel__label" level={headingLevel}>
            {/* Hall of Fame icon */}
            Hall of Fame
          </Heading>
          {HallOfFameSection}
        </section>
      ) : (
        <div className="ma-estafettemodel__cell ma-estafettemodel__cell--hall-of-fame">
          {/* Hall of Fame icon */}
          <p className="ma-estafettemodel__label">Hall of Fame</p>
        </div>
      )}
    </div>
  </div>
);
