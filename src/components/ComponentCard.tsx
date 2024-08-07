import Link from '@docusaurus/Link';
import { Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Card, CardContent, CardIllustration } from './CardGroup';
import style from './ComponentCard.module.css';
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
      className={clsx(style['component-card'], !relayStep && style['component-card--suggestion'])}
      component="section"
    >
      <CardIllustration>
        <ComponentIllustration relayStep={relayStep} description={`Schets van de ${name} component`} name={name} />
      </CardIllustration>
      <CardContent>
        <div>
          <Heading level={headingLevel} className={clsx(style['component-card__title'])}>
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
              Bekijk <span className={clsx(style['w'])}>{name}</span> component
            </Link>
          </Paragraph>
        )}
      </CardContent>
    </Card>
  );
};
