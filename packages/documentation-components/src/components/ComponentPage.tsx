import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { LinkList } from '../link-list/link-list.tsx';
import { Link } from '../link/link.tsx';
import { Heading, HeadingProps } from '../heading/heading.tsx';
import { Paragraph } from '../paragraph/paragraph.tsx';
import clsx from 'clsx';
import { BrandIcon } from './BrandIcon.tsx';
import { CardGroup } from './CardGroup.tsx';
import { Card } from '../card/card.tsx';
import { ComponentProgress } from './ComponentProgress.tsx';
import { TaskList, TaskListItem } from '@nl-design-system-community/ma-task-list-react/dist/ma-task-list.mjs';
import '@nl-design-system-community/ma-task-list-css/dist/ma-task-list.css';
import '@nl-design-system-candidate/heading-css/heading.css';
import {
  getProjectFrameworks,
  getRelayBoardDescription,
  relayProjectIds,
  toKebabCase,
  type ComponentPageSectionProps,
} from '../utils.ts';
import './ComponentPage.css';
import relationMap from './relations.json';
import { Accordion, AccordionSection } from '../accordion/accordion.tsx';
import '../accordion/accordion.css';

export const DefinitionOfDone = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const relayProjects = component && component.projects.filter((project) => relayProjectIds.includes(project.id));
  const relayOrderedProjects =
    relayProjects && relayProjectIds.map((id) => relayProjects.find((project) => project.id === id)).filter(Boolean);

  return (
    component && (
      <Accordion>
        {relayOrderedProjects.map((project) => (
          <AccordionSection
            key={project.title}
            className={clsx('ma-definition-of-done', project && `ma-definition-of-done--${toKebabCase(project.title)}`)}
            heading={project ? `${project.title} - ${project.progress.value} van ${project.progress.max}` : ''}
            headingLevel={headingLevel}
            headingApperance="level-5"
          >
            <>
              <TaskList>
                {project.tasks.map(({ checked, name, id }) => (
                  <TaskListItem checked={checked} title={name} key={id} description={getRelayBoardDescription(id)} />
                ))}
              </TaskList>
              <Paragraph>
                <Link href={`${project.url}?filterQuery=${component.title}`}>
                  {project.title} projectbord op GitHub
                </Link>
              </Paragraph>
            </>
          </AccordionSection>
        ))}
      </Accordion>
    )
  );
};

export const Implementations = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const implementations = component && component.projects.filter((project) => !relayProjectIds.includes(project.id));
  return component && implementations.length ? (
    <CardGroup appearance="large" className="ma-implementation-card-group">
      {implementations
        .sort((a, b) => {
          const aTodo = a.progress.max - a.progress.value;
          const bTodo = b.progress.max - b.progress.value;

          return aTodo === bTodo ? a.title.localeCompare(b.title) : aTodo - bTodo;
        })
        .map((project) => {
          const task = project.tasks.find(({ name }) => name === 'Naam');

          const alias = task?.value;
          const frameworks = getProjectFrameworks(project);
          const urlMap = new Map([
            ['Figma URL', { brand: 'figma', desciption: `${alias} in Figma` }],
            ['Theme Storybook URL', { brand: 'storybook', desciption: `${alias} voor visuele regressie tests` }],
          ]);

          const links = project.tasks.filter(
            ({ name, value }) => urlMap.has(name) && URL.canParse(value) && new URL(value).protocol === 'https:',
          );

          return (
            <Card
              key={project.title}
              heading={project.title.replace(/^Community/i, '')}
              headingLevel={headingLevel}
              description={
                <div className="ma-flow">
                  <Paragraph>
                    <ComponentProgress
                      checked={project.progress.value}
                      unchecked={project.progress.max - project.progress.value}
                    />
                    {project.progress.value} van {project.progress.max} stappen gedocumenteerd op het{' '}
                    <Link href={project.url}>{project.title} projectbord</Link>
                  </Paragraph>
                  <div>
                    {(links.length > 0 || frameworks.length > 0) && (
                      <Heading level={Math.min(headingLevel + 1, 6) as HeadingProps['level']}>Snel aan de slag</Heading>
                    )}
                    {links.length > 0 && (
                      <LinkList
                        links={links
                          .filter((item) => !!urlMap.get(item.name))
                          .map((item) => {
                            const url = urlMap.get(item.name);
                            return {
                              children: url.desciption,
                              icon: <BrandIcon brand={url.brand} />,
                              href: item.value,
                            };
                          })}
                      />
                    )}
                  </div>
                  {frameworks.length > 0 &&
                    frameworks.map(({ frameworkName, tasks }) => (
                      <section key={frameworkName}>
                        <Heading level={Math.min(headingLevel + 2, 6) as HeadingProps['level']}>
                          {alias} in {frameworkName}
                        </Heading>
                        <LinkList
                          links={tasks.map((frameworkTask) => ({
                            children: frameworkTask.description,
                            icon: <BrandIcon brand={frameworkTask.brand} />,
                            href: frameworkTask.value,
                          }))}
                        />
                      </section>
                    ))}
                </div>
              }
            />
          );
        })}
    </CardGroup>
  ) : (
    <Paragraph>Er zijn nog geen implementaties</Paragraph>
  );
};

export const HelpImproveComponent = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const DISCUSSION_URL_COLUMN_ID = 'PVTF_lADOBGdlVM4AdX8lzgcig7o';
  const project = component?.projects.find((project) => project.id === 'HELP_WANTED');
  const DiscussionUrl = project?.tasks.find((task) => task.id === DISCUSSION_URL_COLUMN_ID)?.value;

  return (
    component && (
      <>
        <Heading id="help-component-verbeteren" level={headingLevel}>
          Help om deze component te verbeteren
        </Heading>
        <Paragraph>
          We vinden het belangrijk dat de component {component.title} goed te gebruiken is door iedereen. Help je mee?
        </Paragraph>
        <UnorderedList>
          {DiscussionUrl ? (
            <UnorderedListItem>
              Vul de <Link href={DiscussionUrl}>GitHub Discussion</Link> aan met de eisen en wensen voor jouw project of
              organisatie.
            </UnorderedListItem>
          ) : (
            <UnorderedListItem>
              <Link href="https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions">
                Start een GitHub Discussion voor {component.title}
              </Link>{' '}
              en voeg de eisen en wensen voor jouw project of organisatie toe.
            </UnorderedListItem>
          )}
          <UnorderedListItem>
            Draag bij aan de voortgang van {component.title} door te zorgen dat deze aan meer checkpoints van de{' '}
            <Link href="#definition-of-done">Definition of Done</Link> voldoet. Deze houden we bij in de projectborden
            bij de <Link href={component.backlog}>publieke GitHub Backlog</Link>.{' '}
          </UnorderedListItem>
        </UnorderedList>
      </>
    )
  );
};

export const Related = ({ component }: ComponentPageSectionProps) => {
  const relatedComponents = (component && relationMap[component.title]) || [];
  return (
    relatedComponents.length > 0 && (
      <Paragraph>
        Gerelateerde componenten:{' '}
        {relatedComponents.map((relatedComponent, index) => (
          <>
            {relatedComponent.slug ? (
              <Link href={`/${relatedComponent.slug}/`}>{relatedComponent.name}</Link>
            ) : (
              relatedComponent.name
            )}
            {index < relatedComponents.length - 1 ? ', ' : '.'}
          </>
        ))}
      </Paragraph>
    )
  );
};
