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
  'NL Design System is een design system dat overheidsorganisaties samen bouwen: componenten, patronen en templates voor toegankelijke websites en applicaties.';
export const siteKeywords = ['nl design system', 'design system'];

export const siteThemeColor = '#ffffff';
export const siteColorScheme = 'light dark';
export const siteLang = 'nl';
export const siteDir = 'ltr';

export const twitterCard = 'summary_large_image';
