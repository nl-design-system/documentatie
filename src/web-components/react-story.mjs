/* eslint-disable */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';

if (typeof window !== 'undefined') {
  class ReactStory extends HTMLElement {
    static #template = (() => {
      const template = document.createElement('template');
      const style = document.createElement('style');
      style.textContent = `
      :host {
        display: block;
        background-color: white;
        border: 1px solid rgb(240 240 240);
        border-radius: 0.25rem;
        box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
        margin-block: 1.5rem;
        padding-block: 1rem;
        padding-inline: 1rem;
      }
    `;
      template.content.append(style, document.createElement('slot'));

      return template;
    })();

    constructor() {
      super();
      this.attachShadow({ mode: 'closed' }).append(this.ownerDocument.importNode(ReactStory.#template.content, true));
    }
  }

  if (!customElements.get('react-story')) {
    customElements.define('react-story', ReactStory);
  }

  class ReactStories extends HTMLElement {
    #content = null;

    connectedCallback() {
      this.#content = this.getAttribute('content');
      this.render();
    }

    render() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }

      const root = createRoot(this);

      root.render(
        createElement('react-story', {
          children: createElement(Paragraph, { children: this.#content ?? Paragraph.displayName }),
        }),
      );
    }
  }

  if (!customElements.get('react-stories')) {
    customElements.define('react-stories', ReactStories);
  }
}
