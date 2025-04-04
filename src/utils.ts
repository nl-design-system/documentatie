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
