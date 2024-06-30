import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/theme-common/internal';
import componentProgress from '@nl-design-system/component-progress/dist/index.json';
import React from 'react';
import { CardGroup } from './CardGroup';
import { ComponentCard } from './ComponentCard';
import { COMPONENT_STATES } from '../utils';
interface ComponentOverviewProps {
  headingLevel: number;
}

export const ComponentOverview = (_props: ComponentOverviewProps) => {
  const category = useCurrentSidebarCategory();

  const components = category.items
    .filter((item: any) => item.docId !== 'componenten/README')
    .map((item: any) => ({ ...item, ...useDocById(item.docId) }))
    .filter((item: any) => componentProgress.find(({ title }) => title === item.title));

  return (
    <CardGroup appearance="large">
      {components.map(({ title, id, href, customProps, description }) => {
        const component = componentProgress.find((item) => {
          return item.title === title;
        });

        const relayStep = component && COMPONENT_STATES[component.relayStep];

        return (
          <ComponentCard
            illustration={customProps?.illustration}
            name={title}
            headingLevel={2}
            href={href}
            description={description}
            key={id}
            relayStep={relayStep}
          />
        );
      })}
    </CardGroup>
  );
};
