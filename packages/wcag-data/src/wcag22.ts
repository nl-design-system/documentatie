import type { SuccessCriterium } from './wcag21.js';
export type { SuccessCriterium } from './wcag21.js';
import { successCriteria as wcag21 } from './wcag21.js';

const stringSort = (a: string, b: string): number => {
  if (a === b) return 0;
  return a > b ? 1 : -1;
};

// https://stackoverflow.com/questions/40201533/sort-version-dotted-number-strings-in-javascript
const versionPad = (str: string) => str.replaceAll(/\d+/g, (n) => String(Number(n) + 100_000));

export const versionSort = (a: string, b: string): number => stringSort(versionPad(a), versionPad(b));

export const deprecatedCriteria = [
  {
    conformance: 'A',
    nl: {
      title: 'Parsen',
    },
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
  .sort((a, b) => versionSort(a.sc, b.sc))
  .map((sc) => ({
    ...sc,
    fragment: new URL(sc.url).hash.replace(/^#/, '').replace('/WCAG21/', '/WCAG22/'),
  }))
  .filter(({ sc }) => deprecatedCriteria.every((deprecated) => deprecated.sc !== sc));

export const successCriteriaMap = new Map(successCriteria.map((data) => [data.url, data]));
