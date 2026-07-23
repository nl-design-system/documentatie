import type { Element } from 'hast';
import { isElement } from 'hast-util-is-element';
import { selectAll } from 'hast-util-select';
import { addClassName } from './_add-class-name';
import { hasClassName } from './_has-class-name';

export function unorderedList(element: Element) {
  if (isElement(element, 'ul') === false) return;

  if (hasClassName('contains-task-list', element)) {
    whenTaskList(element);
  } else {
    whenUnorderdList(element);
  }
}

function whenUnorderdList(element: Element) {
  addClassName('ams-unordered-list', element);

  element.properties['role'] = 'list';

  selectAll('li', element).forEach(addClassName('ams-unordered-list__item'));
}

function whenTaskList(element: Element) {
  addClassName('ma-task-list', element);

  selectAll('li', element).forEach((li) => {
    addClassName('ma-task-list-item', li);
    const text = li.children.filter((child) => child.type === 'text');
    const checkbox = li.children.find(
      (child) => child.type === 'element' && child.tagName === 'input' && child.properties['type'] === 'checkbox',
    ) as Element;

    const isChecked = checkbox?.properties?.checked;

    const marker: Element = {
      children: [],
      properties: {
        className: [
          'ma-task-list-item__marker',
          isChecked ? 'ma-task-list-item__marker--checked' : 'ma-task-list-item__marker--unchecked',
        ],
      },
      tagName: 'div',
      type: 'element',
    };

    const markerLabel: Element = {
      children: [
        {
          type: 'text',
          value: isChecked ? 'Afgevinkt. ' : 'Niet afgevinkt. ',
        },
      ],
      properties: { className: ['ma-task-list-item__marker-label'] },
      tagName: 'span',
      type: 'element',
    };

    const checkmark: Element = {
      children: [
        {
          children: [
            {
              properties: {
                d: 'M5 10c-.26 0-.51-.1-.71-.29l-4-4A.996.996 0 1 1 1.7 4.3l3.29 3.29 7.3-7.3A.996.996 0 1 1 13.7 1.7L5.71 9.71c-.2.2-.45.29-.71.29',
              },
              children: null,
              tagName: 'path',
              type: 'element',
            },
          ],
          properties: { fill: 'currentColor', viewBox: '0 0 14 10', xmlns: 'http://www.w3.org/2000/svg' },
          tagName: 'svg',
          type: 'element',
        },
      ],
      properties: { className: 'utrecht-icon' },
      tagName: 'span',
      type: 'element',
    };

    const box: Element = {
      children: [
        {
          children: [
            {
              properties: {
                strokeWidth: '2',
                d: 'M 0 2 H 14 M 1 2 V 14 M 0 13 H 14 M 3 15 H 14 M 13 2 V 14 M 15 4 V 16',
                stroke: 'currentColor',
              },
              children: null,
              tagName: 'path',
              type: 'element',
            },
          ],
          properties: { fill: 'none', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
          tagName: 'svg',
          type: 'element',
        },
      ],
      properties: { className: 'utrecht-icon' },
      tagName: 'span',
      type: 'element',
    };

    const description: Element = {
      children: text,
      properties: {},
      tagName: 'div',
      type: 'element',
    };

    li.children = [];
    li.children.push(marker);
    li.children.push(description);

    marker.children.push(markerLabel);
    marker.children.push(isChecked ? checkmark : box);
  });
}
