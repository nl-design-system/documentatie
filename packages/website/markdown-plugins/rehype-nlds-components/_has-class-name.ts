import type { Element } from 'hast';

/**
 * Curried utility function to check if an element has a className. Curried
 * because it can be usefull in a forEach loop having the element provided in a
 * later stage.
 *
 * @example
 * // Adding the element directly
 * hasClassName('my-class', targetElement)
 *
 * @example
 * // Adding the element in a forEach loop
 * selectAll('li', parentElement).filter(hasClassName('child'))
 */
export function hasClassName(className: string, element?: Element) {
  function check(_element: Element) {
    const existingClassNames = `${_element.properties['className'] ?? ''}`;
    const classNames = new Set(existingClassNames.split(' '));

    return classNames.has(className);
  }

  return element ? check(element) : check;
}
