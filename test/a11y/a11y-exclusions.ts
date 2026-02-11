export type ExclusionGroup = {
  name: string;
  rules: string[];
  description?: string;
};

export type RouteExclusion = {
  routes: (string | RegExp)[];
  groups?: string[];
  rules?: string[];
  description?: string;
};

export const exclusionGroups: Record<string, string[]> = {
  contrast: ['color-contrast'],
  images: ['image-alt', 'image-redundant-alt'],
  headings: ['heading-order', 'page-has-heading-one'],
  forms: ['label', 'select-name'],
};

const COMPONENT_ROUTES = [
  '/componenten',
  '/accordion/',
  '/action-group/',
  '/alert-dialog/',
  '/alert/',
  '/avatar/',
  '/blockquote/',
  '/breadcrumb-navigation/',
  '/button/',
  '/calendar/',
  '/card-as-link',
  '/case-card/',
  '/checkbox-group/',
  '/checkbox/',
  '/code-block/',
  '/code/',
  '/color-sample/',
  '/contact-timeline/',
  '/data-badge/',
  '/heading/',
  '/link/',
  '/mark/',
  '/number-badge/',
  '/paragraph/',
  '/skip-link/',
];

const COMMUNITY_ROUTES = '/community/*';
const EVENTS_ROUTES = '/events/*';
const HANDBOEK_ROUTES = '/handboek/*';
const PROJECT_ROUTES = '/project/*';
const WCAG_ROUTES = '/wcag/*';
const RICHTLIJNEN_ROUTES = '/richtlijnen/*';

export const skippedRoutes: (string | RegExp)[] = [
  ...COMPONENT_ROUTES,
  COMMUNITY_ROUTES,
  EVENTS_ROUTES,
  HANDBOEK_ROUTES,
  PROJECT_ROUTES,
  WCAG_ROUTES,
  RICHTLIJNEN_ROUTES,
  '/',
  '/search/',
];

export const exclusions: RouteExclusion[] = [
  // Example: disable specific rules for certain routes
  // {
  //   routes: ['/some-route/'],
  //   groups: ['contrast'],
  //   description: 'Disable contrast checks for this route',
  // },
];
