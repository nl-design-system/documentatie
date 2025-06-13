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

export function removeDuplicates<T>(items: T[]): T[] {
  // Use Array > Set > Array to remove duplicates
  return Array.from(new Set<T>(items));
}

const sortFrameworkNames = (frameworkNames: string[]): string[] => {
  // Frameworks will be returned in this order
  const order = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular'];
  return [...frameworkNames].sort((a, b) => order.indexOf(a) - order.indexOf(b));
};

export const getAllFrameworkNames = (components: Component[]): string[] => {
  const allProjects = components.flatMap(({ projects }) => projects);
  const allFrameworkNames = allProjects.flatMap((project) => getProjectFrameworkNames(project));
  return sortFrameworkNames(removeDuplicates(allFrameworkNames));
};

export const hasFramework = (component: Component, framework: string): boolean => {
  return getComponentFrameworkNames(component).includes(framework);
};

export const getProjectFrameworkNames = (project: ComponentProject): string[] => {
  // Returns the unique frameworks (CSS, HTML, etc) this community component has tasks (GitHub, NPM, etc) for
  const frameworkRx = / URL \(([^)]+)\)/;

  return sortFrameworkNames(
    removeDuplicates(
      project.tasks
        .filter(({ name, value }) => value !== '' && frameworkRx.test(name))
        .map(({ name }) => frameworkRx.exec(name)?.[1]),
    ),
  );
};

export const getComponentFrameworkNames = (component: Component): string[] =>
  sortFrameworkNames(removeDuplicates(component.projects.flatMap((project) => getProjectFrameworkNames(project))));

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
        const brand = /^(.+) URL/.exec(name)[1];
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
export type TokenNode = { [key: string]: TokenNode } | { $type: unknown };
export type TokenPath = string[];

export const tokenPathToDottedTokenPath = (tokenPath: TokenPath): string => tokenPath.join('.');
export const tokenPathToCSSCustomProperty = (tokenPath: TokenPath): string => '--' + tokenPath.join('-');
export const tokenAtPath = (obj: TokenNode, path: TokenPath): TokenNode => path.reduce((acc, key) => acc?.[key], obj);

export function getTokenPaths(obj: TokenNode, partialTokenPath: TokenPath = []): TokenPath[] {
  if (Object.hasOwn(obj, '$type')) return [partialTokenPath];

  return Object.keys(obj).flatMap((key) =>
    typeof obj[key] === 'object' && obj[key] !== null ? getTokenPaths(obj[key], [...partialTokenPath, key]) : [],
  );
}

export function sortTokenPaths(tokenPaths: TokenPath[]): TokenPath[] {
  const memo = new Map<TokenPath, string>();

  function getKey(tokenPath: TokenPath): string {
    if (!memo.has(tokenPath)) {
      memo.set(tokenPath, tokenPathToDottedTokenPath(tokenPath));
    }
    return memo.get(tokenPath);
  }

  return tokenPaths.sort((a, b) => a.length - b.length || getKey(a).localeCompare(getKey(b)));
}

export function tokenPathsToEmptyTokenTree(tokenPaths: TokenPath[]): TokenNode {
  const root = {};
  for (const tokenPath of tokenPaths) {
    let node = root;
    for (const key of tokenPath) {
      if (!node[key]) {
        node[key] = {};
      }
      node = node[key];
    }
  }
  return root;
}
