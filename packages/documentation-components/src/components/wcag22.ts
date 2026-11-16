// TODO: Reorder WCAG 2.2 data so it shows in between WCAG 2.1 issues

import { successCriteria as wcag21 } from './wcag21.ts';

export interface SuccessCriterium {
  sc: string;
  title: string;
  url: string;
  conformance: string | 'A' | 'AA' | 'AAA';
  fragment: string;
  nl: {
    title: string;
  };
  nldesignsystem?: boolean;
  since?: string | 'WCAG20' | 'WCAG21' | 'WCAG22';
}

export const deprecatedCriteria = [
  {
    conformance: 'A',
    nl: {
      title: 'Parsen',
    },
    nldesignsystem: true,
    sc: '4.1.1',
    since: 'WCAG22',
    title: 'Parsing',
    url: 'https://www.w3.org/TR/WCAG21/#parsing',
  },
];

export const successCriteria: SuccessCriterium[] = [
  ...wcag21.map((obj) => ({
    ...obj,
    url: obj.url.replace(/WCAG21/i, 'WCAG22'),
  })),
  {
    conformance: 'AA',
    nl: {
      title: 'Focus niet bedekt (minimum)',
    },
    sc: '2.4.11',
    since: 'WCAG22',
    title: 'Focus Not Obscured (Minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Focus niet bedekt (uitgebreid)',
    },
    sc: '2.4.12',
    since: 'WCAG22',
    title: 'Focus Not Obscured (Enhanced)',
    url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Focusweergave',
    },
    nldesignsystem: true,
    sc: '2.4.13',
    since: 'WCAG22',
    title: 'Focus Appearance',
    url: 'https://www.w3.org/TR/WCAG22/#focus-appearance',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Sleepbewegingen',
    },
    nldesignsystem: true,
    sc: '2.5.7',
    since: 'WCAG22',
    title: 'Dragging Movements',
    url: 'https://www.w3.org/TR/WCAG22/#dragging-movements',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Grootte van het aanwijsgebied (minimum)',
    },
    nldesignsystem: true,
    sc: '2.5.8',
    since: 'WCAG22',
    title: 'Target Size (minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Consistente hulp',
    },
    nldesignsystem: true,
    sc: '3.2.6',
    since: 'WCAG22',
    title: 'Consistent Help',
    url: 'https://www.w3.org/TR/WCAG22/#consistent-help',
  },
  {
    conformance: 'A',
    nl: {
      title: 'Overbodige invoer',
    },
    nldesignsystem: true,
    sc: '3.3.7',
    since: 'WCAG22',
    title: 'Redundant Entry',
    url: 'https://www.w3.org/TR/WCAG22/#redundant-entry',
  },
  {
    conformance: 'AA',
    nl: {
      title: 'Toegankelijke authenticatie (minimum)',
    },
    nldesignsystem: true,
    sc: '3.3.8',
    since: 'WCAG22',
    title: 'Accessible Authentication (Minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum',
  },
  {
    conformance: 'AAA',
    nl: {
      title: 'Toegankelijke authenticatie (uitgebreid)',
    },
    sc: '3.3.9',
    since: 'WCAG22',
    title: 'Accessible Authentication (Enhanced)',
    url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced',
  },
]
  .map((sc) => ({
    ...sc,
    fragment: new URL(sc.url).hash.replace(/^#/, ''),
  }))
  .filter(({ sc }) => !deprecatedCriteria.find((deprecated) => deprecated.sc === sc));

export const successCriteriaMap = new Map(successCriteria.map((data) => [data.sc, data]));
