import prettierSync from '@prettier/sync';
import { Root } from '@utrecht/root-react';
import clsx from 'clsx';
import Prism from 'prismjs';
import { useId, type CSSProperties } from 'react';
import './Canvas.css';
import '@utrecht/component-library-css/dist/html.css';
import '@utrecht/root-css/dist/index.css';
import { Accordion, AccordionSection } from '../../accordion/accordion.tsx';
import { Button } from '../../button/button.tsx';
import { HTMLImage } from '../../html-image/html-image.tsx';

/**
 * By default the contents of the example are rendered like regular HTML,
 * following user preferences such as forced colors mode. Tweak this behavior
 * when the example requires it. For example:
 *
 * - `forcedColorsAdjust={false}`
 * - `colorScheme={light}`
 * - `colorScheme={dark}`
 */
export interface CanvasProps {
  language: string;
  className?: string;
  defaultExpandedCode?: boolean;
  designTokens?: CSSProperties;
  code?: string;
  colorScheme?: 'dark' | 'light';
  forcedColorsAdjust?: boolean;

  /**
   * Configure a `label` to render the contents as if it is an image with an alt-text.
   * This is a great way to render an image of a design system component or pattern,
   * while supporting dark mode, responsive layout and user preferences.
   *
   * The contents no longer be interactive when it is rendered as image.
   */
  label?: string;
}

export const Canvas = ({
  className,
  code = '<p>No code provided</p>',
  colorScheme,
  defaultExpandedCode,
  designTokens,
  forcedColorsAdjust = true,
  label,
  language,
}: CanvasProps) => {
  // Server-only: `@prettier/sync` runs prettier in a Node worker thread
  const _code = prettierSync.format(code, {
    embeddedLanguageFormatting: 'off',
    htmlWhitespaceSensitivity: 'ignore',
    parser: 'html',
    singleAttributePerLine: true,
  });
  const highlighed = Prism.highlight(_code, Prism.languages[language], language);

  const example = (
    <Root
      Component="div"
      className={clsx('ma-canvas__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', {
        'ma-canvas__example--color-scheme-dark': colorScheme === 'dark',
        'ma-canvas__example--color-scheme-light': colorScheme === 'light',
      })}
      style={designTokens as CSSProperties}
      dangerouslySetInnerHTML={{ __html: _code }}
    ></Root>
  );

  return (
    <div className={clsx('ma-canvas', className)}>
      {/* Live preview */}
      {label ? (
        <HTMLImage forcedColorsAdjust={forcedColorsAdjust} label={label} labelId={label ? useId() : undefined}>
          {example}
        </HTMLImage>
      ) : (
        example
      )}

      {/* Highlighted code example */}
      <Accordion>
        <AccordionSection label="Code" open={defaultExpandedCode}>
          <pre className="language-html nl-code-block" tabIndex={0}>
            <code className="language-html nl-code-block__code" dangerouslySetInnerHTML={{ __html: highlighed }} />
          </pre>

          {/* <Canvas> is server-only, so copying is handled by a <script> in `document.astro`; `Guideline.css` hides the button in "dont" examples */}
          <Button className="ma-canvas__copy-button" data-copy-code={_code} purpose="secondary">
            Kopieer code
          </Button>
        </AccordionSection>
      </Accordion>
    </div>
  );
};
