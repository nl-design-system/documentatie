import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/theme-common/internal';
import componentProgress from '@nl-design-system/component-progress/dist/index.json';
import { AccordionProvider, Fieldset, FormToggle, Paragraph } from '@utrecht/component-library-react';
import { Checkbox, FormField, FormLabel } from '@utrecht/component-library-react/dist/css-module';
import React, { useEffect, useState } from 'react';
import { CardGroup } from './CardGroup';
import { ComponentCard } from './ComponentCard';
import style from './ComponentOverview.module.css';
import { EstafetteBadge } from './EstafetteBadge';
import { COMPONENT_STATES, normalizeName, relayProjectIds } from '../utils';

export const ComponentOverview = () => {
  const category = useCurrentSidebarCategory();

  const getComponent = (item: any) =>
    componentProgress.find(({ title }) => normalizeName(title) === normalizeName(item.title));

  const components = category.items
    .filter((item: any) => item.docId !== 'componenten/README')
    .map((item: any) => ({ ...item, ...useDocById(item.docId) }))
    .filter(getComponent)
    .map((item: any) => ({ ...item, ...getComponent(item) }));

  const [filteredComponents, setFilteredComponents] = useState(components);
  const [showTodo, setShowTodo] = useState(true);
  const [showHelpWanted, setShowHelpWanted] = useState(true);
  const [showCommunity, setShowCommunity] = useState(true);
  const [showCandidate, setShowCandidate] = useState(true);
  const [showHallOfFame, setShowHallOfFame] = useState(true);
  const [showImplemented, setShowImplemented] = useState(false);

  useEffect(() => {
    setFilteredComponents(() =>
      components
        .filter((c) => {
          return (
            (showTodo && c.relayStep === 'UNKNOWN') ||
            (showHelpWanted && c.relayStep === 'HELP_WANTED') ||
            (showCommunity && c.relayStep === 'COMMUNITY') ||
            (showCandidate && c.relayStep === 'CANDIDATE') ||
            (showHallOfFame && c.relayStep === 'HALL_OF_FAME')
          );
        })
        .filter((c) => (showImplemented ? c.projects.filter((p) => !relayProjectIds.includes(p.id)).length > 0 : true)),
    );
  }, [showTodo, showHelpWanted, showCommunity, showCandidate, showHallOfFame, showImplemented]);

  const todo = components.filter((c) => c.relayStep === 'UNKNOWN');
  const helpWanted = components.filter((c) => c.relayStep === 'HELP_WANTED');
  const community = components.filter((c) => c.relayStep === 'COMMUNITY');
  const candidate = components.filter((c) => c.relayStep === 'CANDIDATE');
  const hallOfFame = components.filter((c) => c.relayStep === 'HALL_OF_FAME');
  const implemented = components.filter((c) => c.projects?.filter((p) => !relayProjectIds.includes(p.id)).length);

  return (
    <>
      <AccordionProvider
        sections={[
          {
            className: style['utrecht-accordion--nlds-subtle'],
            headingLevel: 2,
            expanded: false,
            label: (<span id="filter-results-label">Filter componenten</span>) as any,
            body: (
              <Fieldset aria-describedby="filter-results" aria-labelledby="filter-results-label">
                {!!todo.length && (
                  <FormField type="checkbox">
                    <Checkbox defaultChecked={showTodo} id="TODO" onChange={() => setShowTodo((checked) => !checked)} />
                    <FormLabel htmlFor="TODO">
                      <EstafetteBadge state="Todo" />
                    </FormLabel>
                  </FormField>
                )}
                {!!helpWanted.length && (
                  <FormField type="checkbox">
                    <Checkbox
                      defaultChecked={showHelpWanted}
                      id="HELP_WANTED"
                      onChange={() => setShowHelpWanted((checked) => !checked)}
                    />
                    <FormLabel htmlFor="HELP_WANTED">
                      <EstafetteBadge state="Help Wanted" />
                    </FormLabel>
                  </FormField>
                )}
                {!!community.length && (
                  <FormField type="checkbox">
                    <Checkbox
                      defaultChecked={showCommunity}
                      id="COMMUNITY"
                      onChange={() => setShowCommunity((checked) => !checked)}
                    />
                    <FormLabel htmlFor="COMMUNITY">
                      <EstafetteBadge state="Community" />
                    </FormLabel>
                  </FormField>
                )}
                {!!candidate.length && (
                  <FormField type="checkbox">
                    <Checkbox
                      defaultChecked={showCandidate}
                      id="CANDIDATE"
                      onChange={() => setShowCandidate((checked) => !checked)}
                    />
                    <FormLabel htmlFor="CANDIDATE">
                      <EstafetteBadge state="Candidate" />
                    </FormLabel>
                  </FormField>
                )}
                {!!hallOfFame.length && (
                  <FormField type="checkbox">
                    <Checkbox
                      defaultChecked={showHallOfFame}
                      id="HALL_OF_FAME"
                      onChange={() => setShowHallOfFame((checked) => !checked)}
                    />
                    <FormLabel htmlFor="HALL_OF_FAME">
                      <EstafetteBadge state="Hall of Fame" />
                    </FormLabel>
                  </FormField>
                )}
                {!!implemented.length && (
                  <FormField type="checkbox" className={style['utrecht-form-field--nlds-switch']}>
                    <FormToggle
                      defaultChecked={showImplemented}
                      id="IMPLEMENTED"
                      onChange={() => setShowImplemented((checked) => !checked)}
                    />
                    <FormLabel htmlFor="IMPLEMENTED">Toon alleen beschikbare componenten</FormLabel>
                  </FormField>
                )}
              </Fieldset>
            ),
          },
        ]}
      ></AccordionProvider>
      <Paragraph role="status" id="filter-results">
        {filteredComponents.length} van {components.length} componenten zichtbaar
      </Paragraph>
      <CardGroup appearance="large">
        {filteredComponents.map(({ title, id, href, customProps, description }) => {
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
    </>
  );
};
