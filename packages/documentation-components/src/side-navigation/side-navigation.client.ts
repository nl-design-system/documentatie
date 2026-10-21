/**
 * A web component that toggles the `aria-expanded` state based on the dialog's
 * open or closed state
 */
class MaSideNavigation extends HTMLElement {
  toggleDetails = (evt: Event) => {
    const target = evt.target;

    if (!(target instanceof HTMLElement || target instanceof SVGElement)) {
      return;
    }
    console.log(
      target,
      target?.matches('.denhaag-side-navigation__expand-button, .denhaag-side-navigation__expand-button *'),
    );
    if (!target?.matches('.denhaag-side-navigation__expand-button, .denhaag-side-navigation__expand-button *')) {
      return;
    }

    const treeItem = target?.closest('.denhaag-side-navigation__item');

    if (treeItem) {
      const details = treeItem.querySelector('details');

      if (details) {
        details.open = !details.open;
      }

      const button = treeItem.querySelector('button');
      if (button && details) {
        button.classList.toggle('denhaag-side-navigation__expand-button--expanded', details.open);
        button.setAttribute('aria-expanded', details.open ? 'true' : 'false');

        const newLabel = details?.open ? button.dataset['openLabel'] : button.dataset['closedLabel'];
        if (newLabel && button) {
          button.setAttribute('aria-label', newLabel);
        }
      }
    }
  };

  connectedCallback() {
    console.log('load');
    this.addEventListener('click', this.toggleDetails);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggleDetails);
  }
}

customElements.define('ma-side-navigation', MaSideNavigation);
