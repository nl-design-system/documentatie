import { DocCardList } from '../doc-card-list/doc-card-list';
import type { NavigationElement } from '../../navigation';

export interface OverviewPageProps {
  pages: NavigationElement[];
}

/**
 * The OverviewPage is an reexport of DocCardList. In Docusaurus the
 * OverviewPage, exported the DocCardList but filtered the items with
 * Docusaurus logic, in Astro, that is done on another level (Layout), but to
 * keep the API consistent between Docusaurus and Astro, this component need to
 * exists. An issue to unify them, is available (#4220)
 */
export const OverviewPage = (props: OverviewPageProps) => <DocCardList items={props.pages} />;
