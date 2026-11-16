import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { addClassName } from './_add-class-name.ts';

export function link(element: Element) {
  if (isElement(element, 'a') === false) return;

  addClassName('nl-link', element);
}
