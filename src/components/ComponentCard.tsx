import { Link } from '@site/src/components/Link';
import { Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { Card, CardContent, CardIllustration } from './CardGroup';
import { ComponentIllustration } from './ComponentIllustration';
import { EstafetteBadge } from './EstafetteBadge';

interface ComponentCardProps {
  illustration?: string;
  name: string;
  relayStep?: string;
  headingLevel?: number;
  description?: string;
  href?: string;
}

export const ComponentCard = ({
  name,
  description,
  relayStep,
  headingLevel = 2,
  href,
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
