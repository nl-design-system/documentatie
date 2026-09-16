import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name';

export function table(element: Element) {
  if (isElement(element, 'table') === false) return;

  addClassName('utrecht-table', element);

  selectAll('tbody', element).forEach(addClassName('utrecht-table__body'));
  selectAll('thead', element).forEach(addClassName('utrecht-table__header'));
  selectAll('th', element).forEach(addClassName('utrecht-table__header-cell'));
  selectAll('tr', element).forEach(addClassName('utrecht-table__row'));
  selectAll('td', element).forEach(addClassName('utrecht-table__cell'));

  selectAll('td, th', element).forEach((cell) => {
    switch (cell.properties['align']) {
      case 'right':
        addClassName('utrecht-table__cell--align-right')(cell);
        delete cell.properties['align'];
        break;
      case 'center':
        addClassName('utrecht-table__cell--align-center')(cell);
        delete cell.properties['align'];
        break;
      case 'left':
        addClassName('utrecht-table__cell--align-right')(cell);
        delete cell.properties['align'];
        break;
      default:
    }
  });
}
