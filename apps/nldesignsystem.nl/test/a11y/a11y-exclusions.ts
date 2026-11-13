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
  forms: ['label', 'select-name'],
  headings: ['heading-order', 'page-has-heading-one'],
  images: ['image-alt', 'image-redundant-alt'],
};

export const skippedRoutes: (string | RegExp)[] = ['/search/', '/handboek/designer/figma-changelog/'];

export const AXE_VIOLATION_IDS: string[] = ['target-size'];
export const AXE_VIOLATION_IDS_NEXT: string[] = ['target-size', 'scrollable-region-focusable'];

export const exclusions: RouteExclusion[] = [
  {
    description: 'Filter out axe-core violations not relevant to content or tested routes',
    excludeIds: AXE_VIOLATION_IDS,
    routes: ['*'],
  },
];

export const exclusionsNext: RouteExclusion[] = [
  {
    description: 'Filter out axe-core violations not relevant to content or tested routes',
    excludeIds: AXE_VIOLATION_IDS_NEXT,
    routes: [/zonder-front-end-framework/],
  },
];
