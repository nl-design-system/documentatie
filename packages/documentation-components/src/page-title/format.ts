export interface PageTitleProps {
  title: string;
  titleSm?: string;
  siteTitleSeparator?: string;
  siteTitle: string;
}

/**
 * Generate a document title. The `siteTitle` will be appended to
 * the title. If no title is present, it will default to the website name.
 */
export const formatTitle = ({ title, titleSm, siteTitleSeparator = ' - ', siteTitle }: PageTitleProps): string => {
  const pageTitle = titleSm || title;
  const separator = siteTitleSeparator.trim();

  // TODO: Remove this code after migrating away from Docusaurus
  if (pageTitle?.endsWith(` ${separator} ${siteTitle}`)) return pageTitle;

  return pageTitle && siteTitle && pageTitle !== siteTitle
    ? `${pageTitle} ${separator} ${siteTitle}`
    : pageTitle || siteTitle;
};
