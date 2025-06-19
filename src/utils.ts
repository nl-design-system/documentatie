export const COMPONENT_STATES = {
  UNKNOWN: 'Todo',
  HELP_WANTED: 'Help Wanted',
  COMMUNITY: 'Community',
  CANDIDATE: 'Candidate',
  HALL_OF_FAME: 'Hall of fame',
};

export const toKebabCase = (string: string) => string?.toLowerCase().replace(/\s+/gi, '-');

export const getRelayBoardDescription = (id: string): string => {
  const descriptions = {
    PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.',
    PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in één zin beschreven.',
    PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.',
    PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.',
    'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.',
    PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.',
    PVTSSF_lADOBGdlVM4AdX8lzgTC95M:
      'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.',
    'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.',
    'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.',
    PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.',
    PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.',
  };

  return descriptions[id];
};

export const previousRelayStep = {
  HELP_WANTED: 'UNKNOWN',
  COMMUNITY: 'HELP_WANTED',
  CANDIDATE: 'COMMUNITY',
  HALL_OF_FAME: 'CANDIDATE',
};

export const relayProjectIds = Object.keys(previousRelayStep);

export const normalizeName = (name: string) => name.toLowerCase().replace(/(\s|-)+/, '');

export type RELAY_STEP = 'HELP_WANTED' | 'COMMUNITY' | 'CANDIDATE' | 'HALL_OF_FAME' | 'UNKNOWN';
export type PROJECT_ID =
  | 'HELP_WANTED'
  | 'COMMUNITY'
  | 'CANDIDATE'
  | 'HALL_OF_FAME'
  | 'UTRECHT'
  | 'AMSTERDAM'
  | 'RVO'
  | 'LOGIUS'
  | 'DEN_HAAG';

export interface ProjectTask {
  dataType: string;
  name: string;
  id: string;
  value: string;
  checked: boolean;
}

export interface ComponentProject {
  title: string;
  number: number;
  id: PROJECT_ID;
  url: string;
  tasks: ProjectTask[];
  done: boolean;
  progress: {
    value: number;
    max: number;
  };
}

export interface Component {
  relayStep: RELAY_STEP;
  title: string;
  backlog: string;
  projects: ComponentProject[];
}

export interface ComponentPageSectionProps {
  component: Component;
  headingLevel: number;
}

export interface FrameworkTask {
  name: string;
  id: string;
  description: string;
  brand?: string;
  value: string;
}

export interface ProjectFramework {
  frameworkName: string;
  tasks: FrameworkTask[];
}

export const getProjectFrameworkNames = (project: ComponentProject): string[] => {
  // Returns the unique frameworks (CSS, HTML, etc) this community component has tasks (GitHub, NPM, etc) for
  const frameworkRx = / URL \((\w+)\)/;

  // Frameworks will be returned in this order
  const order = ['CSS', 'HTML', 'React', 'Vue', 'Angular'];

  // Use Array > Set > Array to remove duplicates
  return Array.from(
    new Set<string>(
      project.tasks
        .filter(({ name, value }) => value !== '' && frameworkRx.test(name))
        .map(({ name }) => name.match(frameworkRx)?.[1])
        .sort((a, b) => order.indexOf(a) - order.indexOf(b)),
    ),
  );
};

export const getComponentFrameworkNames = (component: Component): string[] =>
  Array.from(
    // Use Array > Set > Array to remove duplicates
    new Set<string>(component.projects.flatMap((project) => getProjectFrameworkNames(project))),
  );

export const getComponentAlias = (project: ComponentProject): string => {
  const task = project.tasks.find(({ name }) => name === 'Naam');
  return task?.value || '';
};

export const getProjectFrameworks = (project: ComponentProject): ProjectFramework[] => {
  // Get the tasks (GitHub, NPM, etc) grouped by framework (CSS, HTML, React, etc)
  // [
  //   { frameworkName: 'CSS', tasks: [ ... ] },
  //   { frameworkName: 'HTML', tasks: [ ... ] },
  //   ...
  // ]

  // First get the unique frameworks this community component has links for
  const frameworkNames = getProjectFrameworkNames(project);
  const alias = getComponentAlias(project);

  // Then group the tasks for each framework
  // { brand:'github', name: 'GitHub URL (CSS)', id: '...', value: '...', description: '...' }
  return frameworkNames.map((frameworkName) => {
    const tasks = project.tasks
      .filter(({ name, value }) => value !== '' && name.includes(frameworkName))
      .map(({ name, id, value }): FrameworkTask => {
        const brand = name.match(/^(.+) URL/)[1];
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
};
