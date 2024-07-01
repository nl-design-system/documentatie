import { AccordionProvider, Heading, Link, LinkList, LinkListLink, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import { BrandIcon } from './BrandIcon';
import { Card, CardContent, CardGroup } from './CardGroup';
import style from './ComponentPage.module.css';
import { ComponentProgress } from './ComponentProgress';
import { EstafetteBadge } from './EstafetteBadge';
import { TaskList, TaskListItem } from './TaskList';
import { COMPONENT_STATES, getRelayBoardDescription, toKebabCase } from '../utils';

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

const previousRelayStep = {
  HELP_WANTED: 'UNKNOWN',
  COMMUNITY: 'HELP_WANTED',
  CANDIDATE: 'COMMUNITY',
  HALL_OF_FAME: 'CANDIDATE',
};

const relayProjectIds = Object.keys(previousRelayStep);

interface ComponentPageSectionProps {
  component: Component;
  headingLevel: number;
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
          className: clsx(style['definition-of-done'], style[`definition-of-done--${toKebabCase(project.title)}`]),
          headingLevel: headingLevel,
          expanded: false,
          label: `${project.title} - ${project.progress.value} van ${project.progress.max}`,
          body: (
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
          ),
        }))}
      />
    )
  );
};

export const Implementations = ({ component, headingLevel }: ComponentPageSectionProps) => {
  const implementations = component && component.projects.filter((project) => !relayProjectIds.includes(project.id));
  return component && implementations.length ? (
    <CardGroup appearance="large" className={clsx(style['implementation-card-group'])}>
      {implementations
        .sort((a, b) => {
          const aTodo = a.progress.max - a.progress.value;
          const bTodo = b.progress.max - b.progress.value;

          return aTodo === bTodo ? a.title.localeCompare(b.title) : aTodo - bTodo;
        })
        .map((project) => {
          const { value: alias } = project.tasks.find(({ name }) => name === 'Naam');

          const urlMap = new Map([
            ['Figma URL', { brand: 'figma', desciption: `${alias} in Figma` }],
            ['NPM URL (CSS)', { brand: 'npm', desciption: `${alias} op NPM` }],
            ['GitHub URL (CSS)', { brand: 'github', desciption: `${alias} op GitHub` }],
            ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${alias} in Storybook van ${project.title}` }],
            ['Theme Storybook URL', { brand: 'storybook', desciption: `${alias} voor visuele regressie tests` }],
          ]);

          const links = project.tasks.filter(
            ({ name, value }) => urlMap.has(name) && URL.canParse(value) && new URL(value).protocol === 'https:',
          );

          return (
            <Card key={project.title} className={clsx(style['implementation-card'])}>
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
                {links.length && (
                  <>
                    <Heading level={headingLevel + 1}>Component gebruiken?</Heading>
                    <LinkList>
                      {links.map((item) => {
                        const { brand, desciption } = urlMap.get(item.name);
                        return (
                          <LinkListLink key={item.id} href={item.value}>
                            <BrandIcon brand={brand} /> {desciption}
                          </LinkListLink>
                        );
                      })}
                    </LinkList>
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

export const Backlog = ({ component }: ComponentPageSectionProps) =>
  component && (
    <Paragraph>
      De {component.title} component staat bij NL Design System in de{' '}
      <Link href={component.backlog}>levende backlog</Link>, heb je een concrete eisen of wensen voor dit component?
      Laat het ons dan daar weten!
    </Paragraph>
  );

interface IntroductionProps extends ComponentPageSectionProps {
  description?: string;
  illustration?: string;
}

export const Introduction = ({ component, headingLevel, description }: IntroductionProps) => {
  const relayStep = component && COMPONENT_STATES[component.relayStep];

  return (
    component && (
      <>
        <Heading level={headingLevel}>
          {component.title} {relayStep && <EstafetteBadge state={relayStep} />}
        </Heading>
        <Paragraph lead>{description}</Paragraph>
      </>
    )
  );
};
