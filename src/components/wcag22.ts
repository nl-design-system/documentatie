// TODO: Reorder WCAG 2.2 data so it shows in between WCAG 2.1 issues

import { successCriteria as wcag21 } from './wcag21';

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
    sc: '4.1.1',
    title: 'Parsing',
    url: 'https://www.w3.org/TR/WCAG21/#parsing',
    conformance: 'A',
    nldesignsystem: true,
    nl: {
      title: 'Parsen',
    },
    since: 'WCAG22',
  },
];

export const successCriteria: SuccessCriterium[] = [
  ...wcag21.map((obj) => ({
    ...obj,
    url: obj.url.replace(/WCAG21/i, 'WCAG22'),
  })),
  {
    sc: '2.4.11',
    title: 'Focus Not Obscured (Minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum',
    conformance: 'AA',
    nl: {
      title: 'Focus niet bedekt (minimum)',
    },
    since: 'WCAG22',
  },
  {
    sc: '2.4.12',
    title: 'Focus Not Obscured (Enhanced)',
    url: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced',
    conformance: 'AAA',
    nl: {
      title: 'Focus niet bedekt (uitgebreid)',
    },
    since: 'WCAG22',
  },
  {
    sc: '2.4.13',
    title: 'Focus Appearance',
    url: 'https://www.w3.org/TR/WCAG22/#focus-appearance',
    conformance: 'AAA',
    nldesignsystem: true,
    nl: {
      title: 'Focusweergave',
    },
    since: 'WCAG22',
  },
  {
    sc: '2.5.7',
    title: 'Dragging Movements',
    url: 'https://www.w3.org/TR/WCAG22/#dragging-movements',
    conformance: 'AA',
    nldesignsystem: true,
    nl: {
      title: 'Sleepbewegingen',
    },
    since: 'WCAG22',
  },
  {
    sc: '2.5.8',
    title: 'Target Size (minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#target-size-minimum',
    conformance: 'AA',
    nldesignsystem: true,
    nl: {
      title: 'Grootte van het aanwijsgebied (minimum)',
    },
    since: 'WCAG22',
  },
  {
    sc: '3.2.6',
    title: 'Consistent Help',
    url: 'https://www.w3.org/TR/WCAG22/#consistent-help',
    conformance: 'A',
    nldesignsystem: true,
    nl: {
      title: 'Consistente hulp',
    },
    since: 'WCAG22',
  },
  {
    sc: '3.3.7',
    title: 'Redundant Entry',
    url: 'https://www.w3.org/TR/WCAG22/#redundant-entry',
    conformance: 'A',
    nldesignsystem: true,
    nl: {
      title: 'Overbodige invoer',
    },
    since: 'WCAG22',
  },
  {
    sc: '3.3.8',
    title: 'Accessible Authentication (Minimum)',
    url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum',
    conformance: 'AA',
    nldesignsystem: true,
    nl: {
      title: 'Toegankelijke authenticatie (minimum)',
    },
    since: 'WCAG22',
  },
  {
    sc: '3.3.9',
    title: 'Accessible Authentication (Enhanced)',
    url: 'https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced',
    conformance: 'AAA',
    nl: {
      title: 'Toegankelijke authenticatie (uitgebreid)',
    },
    since: 'WCAG22',
  },
]
  .map((sc) => ({
    ...sc,
    fragment: new URL(sc.url).hash.replace(/^#/, ''),
  }))
  .filter(({ sc }) => !deprecatedCriteria.find((deprecated) => deprecated.sc === sc));

export const successCriteriaMap = new Map(successCriteria.map((data) => [data.sc, data]));
