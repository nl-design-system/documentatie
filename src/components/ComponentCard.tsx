import { Link } from '@site/src/components/Link';
import { BadgeList, DataBadge, Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { Card, CardContent, CardIllustration } from './CardGroup';
import { ComponentIllustration } from './ComponentIllustration';
import { EstafetteBadge } from './EstafetteBadge';
import './ComponentCard.css';

interface ComponentCardProps {
  illustration?: string;
  name: string;
  relayStep?: string;
  headingLevel?: number;
  description?: string;
  href?: string;
  frameworkNames?: string[];
}

export const ComponentCard = ({
  name,
  description,
  relayStep,
  headingLevel = 2,
  href,
  frameworkNames,
}: PropsWithChildren<ComponentCardProps>) => {
  return (
    <Card
      appearance="large"
      className={clsx('component-card', !relayStep && 'component-card--suggestion')}
      component="section"
    >
      <CardIllustration>
        <ComponentIllustration relayStep={relayStep} description={`Schets van de ${name} component`} name={name} />
      </CardIllustration>
      <CardContent>
        <div>
          <Heading level={headingLevel} className="component-card__title">
            {name}
          </Heading>
          {relayStep && (
            <p>
              <EstafetteBadge state={relayStep} />
            </p>
          )}
          {description && <Paragraph>{description}</Paragraph>}
          {frameworkNames?.length ? (
            <BadgeList>
              {frameworkNames.map((frameworkName) => (
                <DataBadge key={frameworkName}>{frameworkName}</DataBadge>
              ))}
            </BadgeList>
          ) : (
            ''
          )}
        </div>
        {href && (
          <Paragraph>
            <Link className="utrecht-link" to={href}>
              Bekijk <span className="w">{name}</span> component
            </Link>
          </Paragraph>
        )}
      </CardContent>
    </Card>
  );
};
