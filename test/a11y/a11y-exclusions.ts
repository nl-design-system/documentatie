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

export const exclusions: RouteExclusion[] = [
  // Example usage:
  // {
  //   routes: ['/search/', /^\/blog\/.*$/],
  //   groups: ['contrast'],
  //   rules: ['heading-order'],
  //   description: 'Contrast and heading issues on search and blog pages',
  // },
];
