// https://vercel.com/docs/environment-variables/system-environment-variables#VERCEL_URL
const selfHostname =
  typeof process.env['VERCEL_URL'] !== 'string'
    ? 'nldesignsystem.nl'
    : process.env['VERCEL_ENV'] === 'production'
      ? process.env['VERCEL_URL']
      : process.env['VERCEL_BRANCH_URL'];

export const siteBaseUrl = `https://${selfHostname}`;
export const siteName = 'nldesignsystem.nl';
export const siteTitle = 'NL Design System';
export const siteTitleSeparator = '·';
export const siteDescription =
  'NL Design System is geen gewoon design system. Het is een verzameling van design systems om samen te ontdekken welke componenten écht werken in de praktijk.';
export const siteKeywords = ['nl design system', 'design system'];

export const siteThemeColor = '#ffffff';
export const siteColorScheme = 'light dark';
export const siteLang = 'nl';
export const siteDir = 'ltr';

export const twitterCard = 'summary_large_image';
