/**
 * A web component that toggles the `aria-expanded` state based on the dialog's
 * open or closed state
 */
class MaMobileMenuTrigger extends HTMLElement {
  #trigger: HTMLButtonElement | null = null;
  #dialog: HTMLDialogElement | null = null;

  setExpandedTrue = () => {
    if (this.#trigger) {
      this.#trigger.ariaExpanded = 'true';
    }
  };

  setExpandedFalse = () => {
    if (this.#trigger) {
      this.#trigger.ariaExpanded = 'false';
    }
  };

  connectedCallback() {
    this.#trigger = this.querySelector('button');
    this.#dialog = document.getElementById('ma-mobile-menu-drawer') as HTMLDialogElement;

    if (this.#dialog && this.#trigger) {
      this.#trigger.ariaExpanded = 'false';

      this.#trigger.addEventListener('click', this.setExpandedTrue);
      this.#dialog.addEventListener('close', this.setExpandedFalse);
    }
  }

  disconnectedCallback() {
    if (this.#dialog && this.#trigger) {
      this.#trigger.removeEventListener('click', this.setExpandedTrue);
      this.#dialog.removeEventListener('close', this.setExpandedFalse);
    }
  }
}

customElements.define('ma-mobile-menu-trigger', MaMobileMenuTrigger);
