import React, { PropsWithChildren } from 'react';
import style from './ComponentCard.module.css';
import clsx from 'clsx';
import { Card, CardContent, CardIllustration } from './CardGroup';
import { COMPONENT_STATES, DesignSystemComponent } from '@nl-design-system/component-index';
import { ComponentIllustration } from './ComponentIllustration';
import { Paragraph, Heading } from '@utrecht/component-library-react';
import { EstafetteBadge } from './EstafetteBadge';
import Link from '@docusaurus/Link';

const getStateModifier = (stateModifier: COMPONENT_STATES) => {
  switch (stateModifier) {
    case COMPONENT_STATES.TODO:
      return 'help-wanted';
    case COMPONENT_STATES.COMMUNITY:
      return 'community';
    case COMPONENT_STATES.NL_UNSTABLE:
      return 'candidate';
    case COMPONENT_STATES.NL_STABLE:
      return 'hall-of-fame';
  }
};

interface ComponentCardProps extends DesignSystemComponent {
  headingLevel?: number;
}

export const ComponentCard = ({ id, name, state, headingLevel = 2 }: PropsWithChildren<ComponentCardProps>) => {
  const stateModifier = getStateModifier(state);

  return (
    <Card appearance="large" className={clsx(style['component-card'])} component="section">
      <CardIllustration>
        <ComponentIllustration
          id={id}
          stateModifier={stateModifier}
          description={`Schets van de ${name} component met de ${state} kleur`}
        />
      </CardIllustration>
      <CardContent>
        <div>
          <Heading level={headingLevel} className={clsx(style['component-card__title'])}>
            {name}
          </Heading>
          <Paragraph>
            <EstafetteBadge stateModifier={stateModifier} state={state} />
          </Paragraph>
        </div>
        <Paragraph>
          <Link className="utrecht-link" to={`/${id}`}>
            Bekijk <span className={clsx(style['w'])}>{name}</span> component
          </Link>
        </Paragraph>
      </CardContent>
    </Card>
  );
};
