import { useHistory } from '@docusaurus/router';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/theme-common/internal';
import componentProgress from '@nl-design-system/component-progress/dist/index.json';
import { AccordionProvider, Fieldset, FormToggle, Paragraph } from '@utrecht/component-library-react';
import { Checkbox, FormField, FormLabel } from '@utrecht/component-library-react/dist/css-module';
import React, { useEffect, useState } from 'react';
import { CardGroup } from './CardGroup';
import { ComponentCard } from './ComponentCard';
import './ComponentOverview.css';
import { EstafetteBadge } from './EstafetteBadge';
import { COMPONENT_STATES, normalizeName, relayProjectIds } from '../utils';

export const ComponentOverview = () => {
  const SEARCH_PARAM = 'filter';
  const SEARCH_VALUES = {
    TODO: 'todo',
    HELP_WANTED: 'helpWanted',
    COMMUNITY: 'community',
    CANDIDATE: 'candidate',
    HALL_OF_FAME: 'hallOfFame',
    ONLY_IMPLEMENTED: 'geenImplementatie',
  };

  const category = useCurrentSidebarCategory();
  const { location, push } = useHistory();

  const params = new URLSearchParams(location.search);

  const getComponent = (item: any) =>
    item.title && componentProgress.find(({ title }) => title && normalizeName(title) === normalizeName(item.title));

  const components = category.items
    .filter((item: any) => item.docId !== 'componenten/README')
    .map((item: any) => ({ ...item, ...useDocById(item.docId) }))
    .filter(getComponent)
    .map((item: any) => ({ ...item, ...getComponent(item) }));

  const [filteredComponents, setFilteredComponents] = useState(components);
  const [showTodo, setShowTodo] = useState(!params.has(SEARCH_PARAM, SEARCH_VALUES.TODO));
  const [showHelpWanted, setShowHelpWanted] = useState(!params.has(SEARCH_PARAM, SEARCH_VALUES.HELP_WANTED));
  const [showCommunity, setShowCommunity] = useState(!params.has(SEARCH_PARAM, SEARCH_VALUES.COMMUNITY));
  const [showCandidate, setShowCandidate] = useState(!params.has(SEARCH_PARAM, SEARCH_VALUES.CANDIDATE));
  const [showHallOfFame, setShowHallOfFame] = useState(!params.has(SEARCH_PARAM, SEARCH_VALUES.HALL_OF_FAME));
  const [showOnlyImplemented, setshowOnlyImplemented] = useState(
    params.has(SEARCH_PARAM, SEARCH_VALUES.ONLY_IMPLEMENTED),
  );

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
        .filter((c) =>
          showOnlyImplemented ? c.projects.filter((p) => !relayProjectIds.includes(p.id)).length > 0 : true,
        ),
    );

    if (showTodo) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.TODO);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.TODO)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.TODO);
    }

    if (showHelpWanted) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.HELP_WANTED);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.HELP_WANTED)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.HELP_WANTED);
    }

    if (showCommunity) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.COMMUNITY);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.COMMUNITY)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.COMMUNITY);
    }

    if (showCandidate) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.CANDIDATE);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.CANDIDATE)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.CANDIDATE);
    }

    if (showHallOfFame) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.HALL_OF_FAME);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.HALL_OF_FAME)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.HALL_OF_FAME);
    }

    if (!showOnlyImplemented) {
      params.delete(SEARCH_PARAM, SEARCH_VALUES.ONLY_IMPLEMENTED);
    } else if (!params.has(SEARCH_PARAM, SEARCH_VALUES.ONLY_IMPLEMENTED)) {
      params.append(SEARCH_PARAM, SEARCH_VALUES.ONLY_IMPLEMENTED);
    }

    push({ ...location, search: params.toString() });
  }, [showTodo, showHelpWanted, showCommunity, showCandidate, showHallOfFame, showOnlyImplemented]);

  const todo = components.filter((c) => c.relayStep === 'UNKNOWN');
  const helpWanted = components.filter((c) => c.relayStep === 'HELP_WANTED');
  const community = components.filter((c) => c.relayStep === 'COMMUNITY');
  const candidate = components.filter((c) => c.relayStep === 'CANDIDATE');
  const hallOfFame = components.filter((c) => c.relayStep === 'HALL_OF_FAME');
  const onlyImplemented = components.filter((c) =>
    c.projects?.filter((p) => {
      const results = !relayProjectIds.includes(p.id);
      return results;
    }),
  );

  return (
    <>
      <AccordionProvider
        sections={[
          {
            className: 'utrecht-accordion--nlds-subtle',
            headingLevel: 2,
            expanded: false,
            label: (<span id="filter-results-label">Filter componenten</span>) as any,
            body: (
              <>
                <Fieldset aria-describedby="filter-results" aria-labelledby="filter-results-label">
                  {!!todo.length && (
                    <FormField type="checkbox">
                      <Checkbox
                        defaultChecked={showTodo}
                        id="TODO"
                        onChange={() => setShowTodo((checked) => !checked)}
                      />
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
                  <Paragraph style={{ '--utrecht-paragraph-margin-block-end': '1rem' }}>
                    <b>Tip</b>: Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen
                    beschikbare componenten te tonen.
                  </Paragraph>
                  {!!onlyImplemented.length && (
                    <>
                      <FormField type="checkbox" className="utrecht-form-field--nlds-switch">
                        <FormToggle
                          defaultChecked={showOnlyImplemented}
                          id="ONLY_IMPLEMENTED"
                          onChange={() => setshowOnlyImplemented((checked) => !checked)}
                        />
                        <FormLabel htmlFor="ONLY_IMPLEMENTED">Toon alleen beschikbare componenten</FormLabel>
                      </FormField>
                    </>
                  )}
                </Fieldset>
              </>
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
