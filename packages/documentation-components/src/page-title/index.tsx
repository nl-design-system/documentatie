export { type PageTitleProps } from './format.ts';
import { formatTitle, type PageTitleProps } from './format.ts';

export const PageTitle = ({ siteTitle, siteTitleSeparator, title, titleSm }: PageTitleProps) => {
  const titleText = formatTitle({
    siteTitle,
    siteTitleSeparator,
    title,
    titleSm,
  });

  return <title>{titleText}</title>;
};
