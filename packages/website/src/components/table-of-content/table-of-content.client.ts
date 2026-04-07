import * as utils from './utils.client';

/**
 * A web component that generates a table of contents based on the headings in
 * a provided scope element. The generated list updates itself when a heading
 * is is added or removed from the scope
 */
class MaTableOfContents extends HTMLElement {
  static observedAttributes = ['scope', 'heading-level'];

  #_level: utils.HeadingLevel = '2';
  #headingListItemMap: utils.HeadingToListItemsMap;
  #headingsInScope: Set<HTMLHeadingElement>;
  #labelHeadings: Set<HTMLHeadingElement>;
  #headingsToIgnore: Set<HTMLHeadingElement>;
  #listElement: HTMLUListElement | HTMLOListElement;
  #listItems: Set<HTMLLIElement>;
  #scopeRoot: HTMLElement;
  #observer: MutationObserver;

  /** The id of the scope element */
  set scope(id: string) {
    if (this.getAttribute('scope') !== id) {
      this.setAttribute('scope-level', id);
      return;
    }

    this.#scopeRoot = document.getElementById(id) || document.querySelector('main');

    if (!this.#scopeRoot) throw new Error(`Could not locate scope element by id ${id}`);

    if (this.#observer) {
      this.#observer.observe(this.#scopeRoot, { childList: true, subtree: true });
    }

    this.update();
  }

  /** The heading level to display in the table of contents */
  set headingLevel(level: utils.HeadingLevel) {
    if (this.getAttribute('heading-level') !== level) {
      this.setAttribute('heading-level', level);
      return;
    }

    this.#_level = level;
    this.update();
  }

  /** A Set of heading elements to ignore in the table of contents */
  set headingsToIgnore(value: Set<HTMLHeadingElement>) {
    this.#headingsToIgnore = value;
    this.update();
  }
  get headingsToIgnore() {
    return this.#headingsToIgnore;
  }

  constructor() {
    super();
    this.#headingListItemMap = new Map();
    this.#headingsToIgnore = new Set();
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    switch (name) {
      case 'scope':
        this.scope = newValue;
        break;
      case 'heading-level':
        this.headingLevel = newValue as utils.HeadingLevel;
        break;
    }
  }

  connectedCallback() {
    this.#observer = this.setupMutationObserver();
    this.#observer.observe(this.#scopeRoot, { childList: true, subtree: true });

    this.#listElement = this.querySelector('ul,ol') || document.createElement('ul');
    if (!this.querySelector('ul,ol')) {
      this.appendChild(this.#listElement);
    }

    this.#labelHeadings = new Set(
      this.#listElement?.['ariaLabelledByElements'].filter((element) => element instanceof HTMLHeadingElement) || [],
    );
    this.#headingsToIgnore = this.headingsToIgnore.union(this.#labelHeadings);
    this.update();
  }

  disconnectedCallback() {
    this.#observer.disconnect();
  }

  setupMutationObserver = () => {
    const callback = (mutationList: MutationRecord[]) => {
      let headingsAdded = false;
      let headingsRemoved = false;

      for (const mutation of mutationList) {
        headingsAdded = Array.from(mutation.addedNodes).some((node) => node instanceof HTMLHeadingElement);
        headingsRemoved = Array.from(mutation.removedNodes).some((node) => node instanceof HTMLHeadingElement);
      }

      if (headingsAdded || headingsRemoved) {
        this.update();
      }
    };

    return new MutationObserver(callback);
  };

  update = () => {
    if (!this.#_level || !this.#scopeRoot || !this.#listElement) return;

    // get the current headings and listItems and update the map to reflect the
    // current state
    this.#headingsInScope = utils.getHeadingsInScope(this.#scopeRoot, this.#_level, this.#headingsToIgnore);
    this.#listItems = utils.getListItems(this.querySelector('ul'));
    utils.mapHeadingsToListItems(this.#headingsInScope, this.#listItems, this.#headingListItemMap);

    // Loop over each heading in the map and create or update its listItems
    this.#headingListItemMap.forEach((listCollection, heading) => {
      if (heading instanceof utils.MissingHeading) return;
      if (listCollection.length === 0) {
        const li = utils.createListItemsForHeading(heading);
        listCollection.push(li);
      } else {
        listCollection.forEach((listItem) => utils.createListItemsForHeading(heading, listItem));
      }
    });

    // (re)add the updated listItems
    this.#listElement.replaceChildren();
    this.#headingsInScope.forEach((heading) => {
      const li = this.#headingListItemMap.get(heading)?.[0];
      this.#listElement.appendChild(li);
    });

    // If there are no headings in scope, hide the label headings
    if (this.#headingsInScope.size === 0) {
      this.hidden = true;
      this.#labelHeadings.forEach((heading) => (heading.hidden = true));
    } else {
      this.hidden = null;
      this.#labelHeadings.forEach((heading) => (heading.hidden = null));
    }

    // clean up list items that point to headings that are no longer in scope
    this.#headingListItemMap.keys().forEach((key) => {
      if (key instanceof utils.MissingHeading) {
        this.#headingListItemMap.delete(key);
      }
    });
  };
}

customElements.define('ma-table-of-contents', MaTableOfContents);
