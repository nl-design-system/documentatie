import type { PropsWithChildren } from 'react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ComponentIllustration } from '../component-illustration/component-illustration.tsx';
import { Heading } from '../heading/heading.tsx';
import { Link } from '../link/link.tsx';
import { Paragraph } from '../paragraph/paragraph.tsx';
import { Card, CardContent, CardIllustration } from './CardGroup.tsx';
import { EstafetteBadge } from './EstafetteBadge.tsx';
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

function appendTrailingSlash(string: string) {
  return typeof string === 'string' && string.endsWith('/') === false ? `${string}/` : string;
}

export const ComponentCard = ({
  name,
  description,
  frameworkNames,
  headingLevel = 2,
  href,
  relayStep,
}: PropsWithChildren<ComponentCardProps>) => {
  return (
    <Card
      appearance="large"
      className={clsx('ma-component-card', !relayStep && 'ma-component-card--suggestion')}
      component="section"
    >
      <CardIllustration>
        <ComponentIllustration relayStep={relayStep} description={`Schets van de ${name} component`} name={name} />
      </CardIllustration>
      <CardContent>
        <div>
          <Heading level={headingLevel as 1 | 2 | 3 | 4 | 5 | 6} className="ma-component-card__title">
            {name}
          </Heading>
          {relayStep && (
            <p>
              <EstafetteBadge state={relayStep} />
            </p>
          )}
          {description && <Paragraph>{description}</Paragraph>}
          {frameworkNames && (
            <BadgeList>
              {frameworkNames.map((frameworkName) => (
                <DataBadge key={frameworkName}>{frameworkName}</DataBadge>
              ))}
            </BadgeList>
          )}
        </div>
        {href && (
          <Paragraph>
            <Link href={appendTrailingSlash(href)}>
              Bekijk <span className="w">{name}</span> component
            </Link>
          </Paragraph>
        )}
      </CardContent>
    </Card>
  );
};
