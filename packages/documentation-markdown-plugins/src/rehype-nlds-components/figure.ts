import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name.ts';

export function figure(element: Element) {
  if (isElement(element, 'figure') === false) return;

  addClassName('utrecht-figure', element);

  selectAll('img', element).forEach(addClassName('utrecht-img'));
  selectAll('figcaption', element).forEach(addClassName('utrecht-figure__caption'));
}
