import { componentIndex } from '@nl-design-system/component-index';
import React from 'react';
import { CardGroup } from './CardGroup';
import { ComponentCard } from './ComponentCard';

interface ComponentOverviewProps {
  headingLevel: number;
}

export const ComponentOverview = ({ headingLevel }: ComponentOverviewProps) => (
  <CardGroup appearance="large">
    {componentIndex
      .sort((a, b) => (a.name >= b.name ? 1 : -1))
      .map((component) => {
        return <ComponentCard {...component} headingLevel={headingLevel} key={component.id} />;
      })}
  </CardGroup>
);
