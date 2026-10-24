import { describe, expect, test } from 'vitest';
import * as functionalIcons from './index';

import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';

// Checklist voor maken van SVG iconen voor de NL Design System community
// https://gist.github.com/Robbert/e0acecc7e126d1db27cb1cb6166b19ea
describe('Functional icons', () => {
  Object.entries(functionalIcons).forEach(([name, IconComponent]) => {
    describe(name, () => {
      test('should have `width="1em"` as default', () => {
        const { container } = render(<IconComponent />);

        const svgIcon = container.querySelector('svg');

        expect(svgIcon).toHaveAttribute('width', '1em');
      });

      test('should have `height="1em"` as default', () => {
        const { container } = render(<IconComponent />);

        const svgIcon = container.querySelector('svg');

        expect(svgIcon).toHaveAttribute('width', '1em');
      });

      test('should have a `viewBox` attribute', () => {
        const { container } = render(<IconComponent />);

        const svgIcon = container.querySelector('svg');

        expect(svgIcon).toHaveAttribute('viewBox');
      });

      test('should use no SVG `<title>` element', () => {
        const { container } = render(<IconComponent />);

        const svgTitle = container.querySelector('svg title');

        expect(svgTitle).not.toBeInTheDocument();
      });

      test('should use `fill="currentColor"` or `stroke="currentColor"`', () => {
        const { container } = render(<IconComponent />);

        const coloredElements = container.querySelectorAll('[fill], [stroke]');

        const allowedValueRegExp = /^(currentColor|none)$/i;

        coloredElements.forEach((element: Element) => {
          expect(element).toBeInTheDocument();

          if (element.hasAttribute('stroke')) {
            expect(element.getAttribute('stroke')).toMatch(allowedValueRegExp);
          } else if (element.hasAttribute('fill')) {
            expect(element.getAttribute('fill')).toMatch(allowedValueRegExp);
          } else {
            throw new Error('Test is broken');
          }
        });
      });

      test('should not use inline `style` attributes', () => {
        const { container } = render(<IconComponent />);

        const elementWithStyle = container.querySelector('[style]');

        expect(elementWithStyle).not.toBeInTheDocument();
      });

      test('should not use the SVG-attribute `vector-effect`', () => {
        const { container } = render(<IconComponent />);

        const elementWithStyle = container.querySelector('[vector-effect]');

        expect(elementWithStyle).not.toBeInTheDocument();
      });
    });
  });
});
