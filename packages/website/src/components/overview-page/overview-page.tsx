import { DocCardList } from '../doc-card-list/doc-card-list';
import type { NavigationElement } from '../../navigation';

export interface OverviewPageProps {
  pages: NavigationElement[];
  excludeDocIDs: string[];
}

/**
 * The OverviewPage is an reexport of DocCardList. In Docusaurus the
 * OverviewPage, exported the DocCardList but filtered the items with
 * Docusaurus logic, in Astro, that is done on another level (Layout), but to
 * keep the API consistent between Docusaurus and Astro, this component need to
 * exists. An issue to unify them, is available (#4220)
 *
 * As the WCAG overview page _does_ use the excludeDocIDs prop to filter, a
 * naive filtering implementation is added
 */
export const OverviewPage = (props: OverviewPageProps) => {
  const docIDs = props.excludeDocIDs || [];

  const filteredPages = props.pages.filter((page) => {
    const filePath = page?.filePath?.replace('../../docs/', '')?.replace(/\.mdx?$/, '');
    return Boolean(docIDs.includes(filePath)) === false;
  });

  return <DocCardList items={filteredPages} />;
};
