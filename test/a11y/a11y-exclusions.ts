export type ExclusionGroup = {
  name: string;
  rules: string[];
  description?: string;
};

export type RouteExclusion = {
  routes: (string | RegExp)[];
  groups?: string[];
  rules?: string[];
  excludeIds?: (string | RegExp)[];
  description?: string;
};

export const exclusionGroups: Record<string, string[]> = {
  contrast: ['color-contrast'],
  images: ['image-alt', 'image-redundant-alt'],
  headings: ['heading-order', 'page-has-heading-one'],
  forms: ['label', 'select-name'],
};

export const skippedRoutes: (string | RegExp)[] = ['/search/'];

export const AXE_VIOLATION_IDS: string[] = ['target-size'];

export const exclusions: RouteExclusion[] = [
  {
    routes: ['*'],
    excludeIds: AXE_VIOLATION_IDS,
    description: 'Filter out axe-core violations not relevant to content or tested routes',
  },
];
