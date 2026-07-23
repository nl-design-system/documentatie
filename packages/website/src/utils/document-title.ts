import { siteTitle, siteTitleSeparator } from '../seo.config';

/**
 * Generate a document title. The `siteTitle` will be appended to
 * the title. If no title is present, it will default to `NL Design System`
 */
export const generateDocumentTitle = (title?: string) => {
  if (title?.endsWith(` ${siteTitleSeparator} ${siteTitle}`)) return title;

  return title ? `${title} ${siteTitleSeparator} ${siteTitle}` : siteTitle;
};

/**
 * Dispatch an `update-document-title` event. Once dispatched, the document
 * will update the title.
 */
export const updateDocumentTitle = (newTitle: string) => {
  const newPageTitle = generateDocumentTitle(newTitle);
  document.dispatchEvent(new UpdateDocumentTitleEvent(newPageTitle));
};

/**
 * An Event that contains the new title
 */
export class UpdateDocumentTitleEvent extends Event {
  static readonly eventName = 'update-document-title';

  readonly newTitle: string;

  constructor(newPageTitle: string) {
    super(UpdateDocumentTitleEvent.eventName, { bubbles: true, composed: true });
    this.newTitle = newPageTitle;
  }
}
