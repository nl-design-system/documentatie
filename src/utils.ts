/* eslint-disable no-unused-vars */

export enum COMPONENT_TYPES {
  CSS = 'CSS',
  HTML = 'HTML',
  WEB_COMPONENT = 'Web Component',
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  FIGMA = 'Figma',
}

export enum ORGANISATIONS {
  DEN_HAAG = 'Gemeente Den Haag',
  UTRECHT = 'Gemeente Utrecht',
  NLDS = 'NL Design System',
}

export enum COMPONENT_STATES {
  TODO = 'Help Wanted',
  COMMUNITY = 'Community',
  NL_UNSTABLE = 'Candidate',
  NL_STABLE = 'Hall of fame',
}

export enum DOCUMENTATION_TYPES {
  UX = 'UX',
  A11Y = 'A11y',
  COPY = 'Content richtlijnen',
}

// TODO: refactor into index repo
export const EXCLUDED_HELP_WANTED_CHECKS = [
  'PVTF_lADOBGdlVM4AdX8lzgTC3T4', // Title
  'PVTSSF_lADOBGdlVM4AdX8lzgTDB3w', // Finish for help wanted
];

// TODO: refactor doneValue and key into index repo
export const HELP_WANTED_CHECKS = {
  PVTSSF_lADOBGdlVM4AdX8lzgasA5I: {
    label: 'Naam',
    description: 'Naam bepaald op basis van NL Design System naamgeving.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: {
    label: 'Doel',
    description: 'Doel van component is in één zin beschreven.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgasBXs: {
    label: 'Afbeelding',
    description: 'Afbeelding gemaakt om de component visueel duidelijk te maken.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: {
    label: 'Backlog',
    description: 'Staat in de publieke backlog van NL Design System.',
  },
  'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': {
    label: 'Bruikbaar',
    description: 'Bewijs verzameld dat de component algemeen bruikbaar is.',
    doneValue: 'Algemeen bruikbaar',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgasBms: {
    label: 'Discussion',
    description: 'Aangemaakt als een GitHub Discussion.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgTC95M: {
    label: 'Link',
    description: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.',
  },
  'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': {
    label: 'Varianten vastgeleggen',
    description: 'Naam en doel van benodigde varianten beschreven.',
  },
  'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': {
    label: 'Onderzoek toevoegen',
    description: 'Nut van component is onderbouwd door gebruikersonderzoek.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: {
    label: 'Kernteam',
    description: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.',
  },
  PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: {
    label: 'Documentatie website',
    description: 'Vindbaar op de NL Design System website.',
  },
};
