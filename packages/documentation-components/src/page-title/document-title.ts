import { formatTitle } from '@nl-design-system-community/documentation-components/src/page-title/format';

/**
 * Dispatch an `update-document-title` event. Once dispatched, the document
 * will update the title.
 */
export const updateDocumentTitle = (newTitle: string, siteTitle: string, siteTitleSeparator?: string) => {
  const newPageTitle = formatTitle({ title: newTitle, siteTitle, siteTitleSeparator });
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
