/**
 * A web component that toggles the `aria-expanded` state based on the dialog's
 * open or closed state
 */
class MaSideNavigation extends HTMLElement {
  #toggleSelector = '.denhaag-side-navigation__expand-button, .denhaag-side-navigation__expand-button *';
  #toggleSelectorExpanded = 'denhaag-side-navigation__expand-button--expanded';
  #treeItemSelector = '.denhaag-side-navigation__item';

  toggleDetails = (evt: Event) => {
    const target = evt.target;

    if (!(target instanceof HTMLElement || target instanceof SVGElement)) {
      return;
    }

    if (!target?.matches(this.#toggleSelector)) {
      return;
    }

    const treeItem = target?.closest(this.#treeItemSelector);
    if (!treeItem) {
      return;
    }

    this.toggleTreeItem(treeItem);
  };

  toggleTreeItem = (treeItem: Element) => {
    const details = treeItem.querySelector('details');
    const button = treeItem.querySelector('button');

    if (!details || !button) {
      return;
    }

    details.open = !details.open;
    button.classList.toggle(this.#toggleSelectorExpanded, details.open);
    button.setAttribute('aria-expanded', details.open ? 'true' : 'false');

    const newLabel = details?.open ? button.dataset['openLabel'] : button.dataset['closedLabel'];

    if (newLabel) {
      button.setAttribute('aria-label', newLabel);
    }
  };

  connectedCallback() {
    this.addEventListener('click', this.toggleDetails);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggleDetails);
  }
}

customElements.define('ma-side-navigation', MaSideNavigation);
