import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name.ts';

export function blockquote(element: Element) {
  if (isElement(element, 'blockquote') === false) return;

  selectAll('p', element).forEach(addClassName('utrecht-paragraph'));

  addClassName('utrecht-blockquote', element);
  addClassName('utrecht-blockquote--html-blockquote', element);
}
