import { afterEach, describe, expect, test, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { HTMLImage } from './html-image';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

describe('HTML image', () => {
  test('`children` contents are rendered inside `ma-html-image__body`', () => {
    const { container } = render(
      <HTMLImage>
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    const button = container.querySelector('.ma-html-image__body > button');

    expect(button).toBeInTheDocument();
  });

  test('renders content inside the `ma-html-image__body` class name', () => {
    render(
      <HTMLImage>
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    let button = null;

    try {
      button = screen.getByRole('button', { name: 'Example Action', suggest: false });
    } catch {
      // `getByRole` is expected to throw
    }

    expect(button).not.toBeInTheDocument();
  });
  test('elements inside the image are not available in the accessibility tree', () => {
    render(
      <HTMLImage>
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    let button = null;

    try {
      button = screen.getByRole('button', { name: 'Example Action', suggest: false });
    } catch {
      // `getByRole` is expected to throw
    }

    expect(button).not.toBeInTheDocument();
  });

  test('renders a class name for color scheme dark', () => {
    const { container } = render(
      <HTMLImage colorScheme="dark">
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    const modifiedElement = container.querySelector('.ma-html-image__body--color-scheme-dark');

    expect(modifiedElement).toBeInTheDocument();
  });

  test('renders a class name for color scheme light', () => {
    const { container } = render(
      <HTMLImage colorScheme="light">
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    const modifiedElement = container.querySelector('.ma-html-image__body--color-scheme-light');

    expect(modifiedElement).toBeInTheDocument();
  });

  test('renders a class name for supporting forced colors mode in the image', () => {
    const { container } = render(
      <HTMLImage forcedColorsAdjust>
        <button type="button">Example Action</button>
      </HTMLImage>,
    );

    const modifiedElement = container.querySelector('.ma-html-image__body--forced-colors-adjust');

    expect(modifiedElement).toBeInTheDocument();
  });

  // testing framework doesn't appear to simulate `inert` correctly
  test.skip('elements inside the image are not interactive', async () => {
    const clickHandler = vi.fn();

    const { container } = render(
      <HTMLImage>
        <button type="button" onClick={clickHandler}>
          Example Action
        </button>
      </HTMLImage>,
    );

    const button = container.querySelector('button');

    // Body is focussed initially
    expect(container.ownerDocument.activeElement).toBe(container.ownerDocument.body);

    if (button) {
      button.focus();

      // Focus should not have moved
      expect(container.ownerDocument.activeElement).toBe(container.ownerDocument.body);
    }
  });

  test('`dangerouslySetInnerHTML` contents are rendered inside `ma-html-image__body`', () => {
    const { container } = render(
      <HTMLImage dangerouslySetInnerHTML={{ __html: '<button type="text">Hello, world!</p>' }} />,
    );

    const button = container.querySelector('.ma-html-image__body > button');

    expect(button).toBeInTheDocument();
  });

  test('`dangerouslySetInnerHTML` contents are rendered, but are not available in the accessibility tree', () => {
    render(<HTMLImage dangerouslySetInnerHTML={{ __html: '<button type="text">Hello, world!</p>' }} />);

    let button = null;

    try {
      button = screen.getByRole('button', { name: 'Example Action', suggest: false });
    } catch {
      // `getByRole` is expected to throw
    }

    expect(button).not.toBeInTheDocument();
  });

  describe('without label', () => {
    test('renders a `<figure>` element', () => {
      const { container } = render(<HTMLImage />);

      const svgIcon = container.querySelector('figure');

      expect(svgIcon).toBeInTheDocument();
    });

    test('renders a `figure` role element', () => {
      render(<HTMLImage />);

      const figure = screen.getByRole('figure');

      expect(figure).toBeInTheDocument();
    });

    test('renders no `figcaption` element', () => {
      const { container } = render(<HTMLImage />);

      const figcaption = container.querySelector('figcaption');

      expect(figcaption).not.toBeInTheDocument();
    });
  });

  describe('with label', () => {
    test('renders a `figure` element', () => {
      const { container } = render(
        <HTMLImage label="Example paragraph">
          <p>Hello, world!</p>
        </HTMLImage>,
      );

      const figure = container.querySelector('figure');

      expect(figure).toBeInTheDocument();
    });

    test('renders an `img` role', () => {
      render(
        <HTMLImage label="Example paragraph">
          <p>Hello, world!</p>
        </HTMLImage>,
      );

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
    });

    test('renders an `img` role with accessible name (when `labelId` is provided)', () => {
      render(<HTMLImage label="Example paragraph" labelId="label" />);

      const img = screen.getByRole('img', { name: 'Example paragraph' });

      expect(img).toBeInTheDocument();
    });

    test.skip('renders the label inside a `figcaption` element', () => {
      const label = 'Example paragraph';
      const { container } = render(<HTMLImage label={label} />);

      const caption = container.querySelector('figcaption');

      expect(caption).toBeInTheDocument();
      expect(caption).toHaveTextContent(label);
    });

    test('the `figcaption` element is nested correctly inside the `figure` element', () => {
      const { container } = render(<HTMLImage label="Example paragraph" />);

      const nestedCaption = container.querySelector('figure > figcaption');

      expect(nestedCaption).toBeInTheDocument();
    });

    test('renders the label inside the `ma-html-image__label` class name', () => {
      const label = 'Example Label';
      const { container } = render(<HTMLImage label={label} />);

      const labelElement = container.querySelector('.ma-html-image__label');

      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent(label);
    });
  });
});
