import {
  AccordionProvider,
  Heading,
  Link,
  LinkList,
  LinkListLink,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { BrandIcon } from './BrandIcon';
import { Card, CardContent, CardGroup } from './CardGroup';
import { ComponentProgress } from './ComponentProgress';
import { EstafetteBadge } from './EstafetteBadge';
import { InlineHeadingGroup } from './InlineHeadingGroup';
import { TaskList, TaskListItem } from './TaskList';
import { COMPONENT_STATES, getRelayBoardDescription, relayProjectIds, toKebabCase } from '../utils';
import './ComponentPage.css';

type RELAY_STEP = 'HELP_WANTED' | 'COMMUNITY' | 'CANDIDATE' | 'HALL_OF_FAME' | 'UNKNOWN';
type PROJECT_ID =
  | 'HELP_WANTED'
  | 'COMMUNITY'
  | 'CANDIDATE'
  | 'HALL_OF_FAME'
  | 'UTRECHT'
  | 'AMSTERDAM'
  | 'RVO'
  | 'LOGIUS'
  | 'DEN_HAAG';
interface Component {
  relayStep: RELAY_STEP;
  title: string;
  backlog: string;
  projects: {
    title: string;
    number: number;
    id: PROJECT_ID;
    url: string;
    tasks: {
      dataType: string;
      name: string;
      id: string;
      value: string;
      checked: boolean;
    }[];
    done: boolean;
    progress: {
      value: number;
      max: number;
    };
  }[];
}

interface ComponentPageSectionProps {
  component: Component;
  headingLevel: number;
}

interface FrameworkTask {
  name: string;
  id: string;
  description: string;
  brand?: string;
  value: string;
}

interface FrameworkInfo {
  frameworkName: string;
  tasks: FrameworkTask[];
}

export const DefinitionOfDone = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const relayProjects = component && component.projects.filter((project) => relayProjectIds.includes(project.id));
  const relayOrderedProjects =
    relayProjects && relayProjectIds.map((id) => relayProjects.find((project) => project.id === id)).filter(Boolean);

  return (
    component && (
      <AccordionProvider
        appearance=""
        sections={relayOrderedProjects.map((project) => ({
          className: clsx('definition-of-done', project && `definition-of-done--${toKebabCase(project.title)}`),
          headingLevel: headingLevel,
          expanded: false,
          label: project ? `${project.title} - ${project.progress.value} van ${project.progress.max}` : '',
          body: project && (
            <>
              <TaskList>
                {project.tasks.map(({ checked, name, id }) => (
                  <TaskListItem
                    headingLevel={headingLevel + 1}
                    checked={checked}
                    title={name}
                    key={id}
                    description={getRelayBoardDescription(id)}
                  />
                ))}
              </TaskList>
              <Paragraph>
                <Link href={`${project.url}?filterQuery=${component.title}`}>
                  {project.title} projectbord op GitHub
                </Link>
              </Paragraph>
            </>
          ),
        }))}
      />
    )
  );
};

export const Implementations = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const implementations = component && component.projects.filter((project) => !relayProjectIds.includes(project.id));
  return component && implementations.length ? (
    <CardGroup appearance="large" className="implementation-card-group">
      {implementations
        .sort((a, b) => {
          const aTodo = a.progress.max - a.progress.value;
          const bTodo = b.progress.max - b.progress.value;

          return aTodo === bTodo ? a.title.localeCompare(b.title) : aTodo - bTodo;
        })
        .map((project) => {
          const task = project.tasks.find(({ name }) => name === 'Naam');

          const alias = task?.value;

          // Get the tasks (GitHub, NPM, etc) grouped by framework (CSS, HTML, React, etc)
          // [
          //   { frameworkName: 'CSS', tasks: [ ... ] },
          //   { frameworkName: 'HTML', tasks: [ ... ] },
          //   ...
          // ]
          // First get the unique frameworks this community component has links for
          const frameworkRx = / URL \((\w+)\)/;
          const frameworkNames = Array.from(
            new Set<string>(
              project.tasks
                .filter(({ name, value }) => value !== '' && frameworkRx.test(name))
                .map(({ name }) => frameworkRx.exec(name)?.[1]),
            ),
          );

          // Then group the tasks for each framework
          // { brand:'github', name: 'GitHub URL (CSS)', id: '...', value: '...', description: '...' }
          const frameworks: FrameworkInfo[] = frameworkNames.map((frameworkName) => {
            const tasks = project.tasks
              .filter(({ name, value }) => value !== '' && name.includes(frameworkName))
              .map(({ name, id, value }) => {
                const brand = name.split(' ')[0];
                const description =
                  brand === 'Storybook'
                    ? `${alias} (${frameworkName}) in Storybook van ${project.title}`
                    : `${alias} (${frameworkName}) op ${brand}`;
                return {
                  brand: brand.toLowerCase(),
                  name,
                  id,
                  value,
                  description,
                };
              });
            return {
              frameworkName,
              tasks,
            };
          });

          const urlMap = new Map([
            ['Figma URL', { brand: 'figma', desciption: `${alias} in Figma` }],
            ['Theme Storybook URL', { brand: 'storybook', desciption: `${alias} voor visuele regressie tests` }],
          ]);

          const links = project.tasks.filter(
            ({ name, value }) => urlMap.has(name) && URL.canParse(value) && new URL(value).protocol === 'https:',
          );

          return (
            <Card key={project.title} className="implementation-card">
              <CardContent>
                <Heading level={headingLevel}>{project.title}</Heading>
                <Paragraph>
                  <ComponentProgress
                    checked={project.progress.value}
                    unchecked={project.progress.max - project.progress.value}
                  />
                  {project.progress.value} van {project.progress.max} stappen gedocumenteerd op het{' '}
                  <Link href={project.url}>{project.title} projectbord</Link>
                </Paragraph>
                {(links.length > 0 || frameworks.length > 0) && (
                  <Heading level={headingLevel + 1}>Component gebruiken?</Heading>
                )}
                {links.length > 0 && (
                  <>
                    <LinkList>
                      {links.map((item) => {
                        const url = urlMap.get(item.name);
                        return url ? (
                          <LinkListLink key={item.id} href={item.value}>
                            <BrandIcon brand={url.brand} /> {url.desciption}
                          </LinkListLink>
                        ) : (
                          <></>
                        );
                      })}
                    </LinkList>
                  </>
                )}
                {frameworks.length > 0 && (
                  <>
                    {frameworks.map(({ frameworkName, tasks }) => (
                      <>
                        <Heading level={headingLevel + 2}>
                          {alias} in {frameworkName}
                        </Heading>
                        <LinkList>
                          {tasks.map((frameworkTask) => (
                            <LinkListLink key={frameworkTask.id} href={frameworkTask.value}>
                              <BrandIcon brand={frameworkTask.brand} /> {frameworkTask.description}
                            </LinkListLink>
                          ))}
                        </LinkList>
                      </>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
    </CardGroup>
  ) : (
    <Paragraph>Er zijn nog geen implementaties</Paragraph>
  );
};

export const HelpImproveComponent = ({ component }: ComponentPageSectionProps) => {
  const DISCUSSION_URL_COLUMN_ID = 'PVTF_lADOBGdlVM4AdX8lzgcig7o';
  const project = component?.projects.find((project) => project.id === 'HELP_WANTED');
  const DiscussionUrl = project?.tasks.find((task) => task.id === DISCUSSION_URL_COLUMN_ID).value;

  return (
    component && (
      <>
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

interface IntroductionProps extends ComponentPageSectionProps {
  description?: string;
  illustration?: string;
}

export const Introduction = ({ component, headingLevel, description }: IntroductionProps) => {
  const relayStep = component && COMPONENT_STATES[component.relayStep];

  return (
    component && (
      <>
        <InlineHeadingGroup level={headingLevel} suffix={relayStep && <EstafetteBadge state={relayStep} />}>
          {component.title}
        </InlineHeadingGroup>
        <Paragraph lead>{description}</Paragraph>
      </>
    )
  );
};
