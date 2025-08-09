import type { PropSidebarItem, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useHistory } from '@docusaurus/router';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/plugin-content-docs/client';
import componentProgress from '@nl-design-system/component-progress/dist/index.json';
import { AccordionProvider, Fieldset, Paragraph, PrimaryActionButton } from '@utrecht/component-library-react';
import { Checkbox, FormField, FormLabel } from '@utrecht/component-library-react/dist/css-module';
import { useEffect, useState } from 'react';
import {
  COMPONENT_STATES,
  getAllFrameworkNames,
  getComponentFrameworkNames,
  hasFramework,
  normalizeName,
  type Component,
} from '../utils';
import { CardGroup } from './CardGroup';
import { ComponentCard } from './ComponentCard';
import { EstafetteBadge } from './EstafetteBadge';

export const ComponentOverview = () => {
  const SEARCH_PARAM_FRAMEWORK = 'framework';
  const SEARCH_PARAM_STATUS = 'status';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const category: any = useCurrentSidebarCategory();
  const { location, replace } = useHistory();

  const params = new URLSearchParams(location.search);

  const getComponent = (item: PropSidebarItemLink): Component =>
    item['title'] &&
    (componentProgress as Component[]).find(
      ({ title }) => title && normalizeName(title) === normalizeName(item['title']),
    );

  const isPropSidebarItemLink = (item: PropSidebarItem): item is PropSidebarItemLink =>
    !!item && typeof item['docId'] === 'string';

  const components = category.items
    .filter(isPropSidebarItemLink)
    .filter((item) => item.docId !== 'componenten/README')
    .map((item) => ({ ...item, ...useDocById(item.docId) }))
    .filter(getComponent)
    .map((item) => ({ ...item, ...getComponent(item) }));

  const [filteredComponents, setFilteredComponents] = useState(components);
  const [showStatuses, setShowStatuses] = useState(params.get(SEARCH_PARAM_STATUS)?.split(',') || []);
  const [showFrameworks, setShowFrameworks] = useState(params.get(SEARCH_PARAM_FRAMEWORK)?.split(',') || []);

  const showAllComponents = () => {
    // Reset the filter and reload the page to show all components
    window.location.search = '';
  };

  const toggleShowStatus = (isChecked: boolean, status: string) => {
    setShowStatuses((prev) => (isChecked ? [...prev, status] : prev.filter((name) => name !== status)));
  };

  const toggleShowFramework = (isChecked: boolean, frameworkName: string) => {
    setShowFrameworks((prev) => (isChecked ? [...prev, frameworkName] : prev.filter((name) => name !== frameworkName)));
  };

  const selectedStatusOptions = {
    HELP_WANTED: 'Help Wanted',
    COMMUNITY: 'Community',
    CANDIDATE: 'Candidate',
    HALL_OF_FAME: 'Hall of Fame',
  };

  const selectedFrameworkOptions = getAllFrameworkNames(components);

  useEffect(() => {
    setFilteredComponents(
      components
        .filter(
          // Show this component if no status is selected or if this component has any of the selected statuses
          (c) => !showStatuses.length || showStatuses.some((status) => c.relayStep === status),
        )
        .filter(
          // Show this component if no framework is selected or if this component supports any of the selected frameworks
          (c) => !showFrameworks.length || showFrameworks.some((frameworkName) => hasFramework(c, frameworkName)),
        ),
    );

    if (showStatuses.length) {
      params.set(SEARCH_PARAM_STATUS, showStatuses.join(','));
    } else {
      params.delete(SEARCH_PARAM_STATUS);
    }

    if (showFrameworks.length) {
      params.set(SEARCH_PARAM_FRAMEWORK, showFrameworks.join(','));
    } else {
      params.delete(SEARCH_PARAM_FRAMEWORK);
    }

    replace({ ...location, search: params.toString() });
  }, [showStatuses, showFrameworks]);

  return (
    <>
      <AccordionProvider
        sections={[
          {
            headingLevel: 2,
            expanded: params.size > 0,

            // TODO: Make Pull Request for Utrecht Accordion to allow `ReactNode`
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            label: (<span id="filter-results-label">Filter componenten</span>) as any,
            body: (
              <>
                <Fieldset aria-describedby="filter-results" aria-labelledby="filter-results-label">
                  <h3 className="utrecht-heading-6">Status</h3>
                  {Object.entries(selectedStatusOptions).map(([key, status]) => (
                    <FormField key={key} type="checkbox">
                      <Checkbox
                        defaultChecked={showStatuses.includes(key)}
                        id={key}
                        onChange={(event) => toggleShowStatus(event.target.checked, key)}
                      />
                      <FormLabel htmlFor={key}>
                        <EstafetteBadge state={status} />
                      </FormLabel>
                    </FormField>
                  ))}
                </Fieldset>
                {selectedFrameworkOptions.length > 0 && (
                  <Fieldset aria-describedby="filter-results" aria-labelledby="filter-results-label">
                    <h3 className="utrecht-heading-6">Implementatie</h3>
                    {selectedFrameworkOptions.map((frameworkName) => (
                      <FormField key={frameworkName} type="checkbox">
                        <Checkbox
                          defaultChecked={showFrameworks.includes(frameworkName)}
                          id={frameworkName}
                          onChange={(event) => toggleShowFramework(event.target.checked, frameworkName)}
                        />
                        <FormLabel htmlFor={frameworkName}>{frameworkName}</FormLabel>
                      </FormField>
                    ))}
                  </Fieldset>
                )}
              </>
            ),
          },
        ]}
      ></AccordionProvider>

      <Paragraph role="status" id="filter-results">
        {filteredComponents.length} van {components.length} componenten zichtbaar
      </Paragraph>

      {filteredComponents.length === 0 && (
        <Paragraph>
          <PrimaryActionButton onClick={() => showAllComponents()}>Toon alle componenten</PrimaryActionButton>
        </Paragraph>
      )}

      <CardGroup appearance="large">
        {filteredComponents.map(({ title, id, href, description }) => {
          const component = (componentProgress as Component[]).find((item) => {
            return item.title === title;
          });

          const relayStep = component && COMPONENT_STATES[component.relayStep];
          const frameworkNames = getComponentFrameworkNames(component);

          return (
            <ComponentCard
              name={title}
              headingLevel={2}
              href={href}
              description={description}
              key={id}
              relayStep={relayStep}
              frameworkNames={frameworkNames}
            />
          );
        })}
      </CardGroup>
    </>
  );
};
