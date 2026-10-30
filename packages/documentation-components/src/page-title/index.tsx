export { type PageTitleProps } from './format';
import { formatTitle, type PageTitleProps } from './format';

export const PageTitle = ({ title, titleSm, siteTitleSeparator, siteTitle }: PageTitleProps) => {
  const titleText = formatTitle({
    titleSm,
    title,
    siteTitleSeparator,
    siteTitle,
  });

  return <title>{titleText}</title>;
};
