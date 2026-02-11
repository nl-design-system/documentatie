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

export const AXE_VIOLATION_IDS: string[] = [
  'color-contrast',
  'image-alt',
  'image-redundant-alt',
  'heading-order',
  'page-has-heading-one',
  'label',
  'select-name',
  'aria-allowed-attr',
  'aria-braille-equivalent',
  'aria-command-name',
  'aria-conditional-attr',
  'aria-deprecated-role',
  'aria-hidden-body',
  'aria-hidden-focus',
  'aria-input-field-name',
  'aria-meter-name',
  'aria-progressbar-name',
  'aria-prohibited-attr',
  'aria-required-attr',
  'aria-required-children',
  'aria-required-parent',
  'aria-roles',
  'aria-toggle-field-name',
  'aria-tooltip-name',
  'aria-valid-attr-value',
  'aria-valid-attr',
  'blink',
  'button-name',
  'bypass',
  'definition-list',
  'dlitem',
  'document-title',
  'duplicate-id-aria',
  'form-field-multiple-labels',
  'frame-focusable-content',
  'frame-title-unique',
  'frame-title',
  'html-has-lang',
  'html-lang-valid',
  'html-xml-lang-mismatch',
  'input-button-name',
  'input-image-alt',
  'link-in-text-block',
  'link-name',
  'list',
  'listitem',
  'marquee',
  'meta-refresh',
  'meta-viewport',
  'nested-interactive',
  'no-autoplay-audio',
  'object-alt',
  'role-img-alt',
  'scrollable-region-focusable',
  'summary-name',
  'svg-img-alt',
  'td-headers-attr',
  'th-has-data-cells',
  'valid-lang',
  'video-caption',
  'autocomplete-valid',
  'avoid-inline-spacing',
  'accesskeys',
  'aria-allowed-role',
  'aria-dialog-name',
  'aria-text',
  'aria-treeitem-name',
  'empty-heading',
  'empty-table-header',
  'frame-tested',
  'heading-order',
  'image-redundant-alt',
  'label-title-only',
  'landmark-banner-is-top-level',
  'landmark-contentinfo-is-top-level',
  'landmark-main-is-top-level',
  'landmark-no-duplicate-banner',
  'landmark-no-duplicate-contentinfo',
  'landmark-no-duplicate-main',
  'landmark-one-main',
  'landmark-unique',
  'meta-viewport-large',
  'page-has-heading-one',
  'presentation-role-conflict',
  'region',
  'scope-attr-valid',
  'skip-link',
  'tabindex',
  'table-duplicate-name',
  'color-contrast-enhanced',
  'identical-links-same-purpose',
  'meta-refresh-no-exceptions',
  'css-orientation-lock',
  'focus-order-semantics',
  'hidden-content',
  'label-content-name-mismatch',
  'p-as-heading',
  'table-fake-caption',
  'td-has-header',
  'aria-roledescription',
  'audio-caption',
  'duplicate-id-active',
  'duplicate-id',
  'landmark-complementary-is-top-level',
];

export const exclusions: RouteExclusion[] = [
  {
    routes: ['*'],
    excludeIds: AXE_VIOLATION_IDS,
    description: 'Filter out axe-core violations not relevant to content or tested routes',
  },
];
