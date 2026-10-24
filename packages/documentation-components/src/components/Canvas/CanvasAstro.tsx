import type { CanvasProps } from './Canvas';
import Prism from 'prismjs';
import clsx from 'clsx';
import { Accordion, AccordionSection } from '../../accordion/accordion';
import { Button } from '../../button/button';
import './CanvasAstro.css';
import '@utrecht/component-library-css/dist/html.css';
import '@utrecht/root-css/dist/index.css';
import { HTMLImage } from '../../html-image/html-image';
import { useId, type CSSProperties } from 'react';
import { Root } from '@utrecht/root-react';

/**
 * By default the contents of the example are rendered like regular HTML,
 * following user preferences such as forced colors mode. Tweak this behavior
 * when the example requires it. For example:
 *
 * - `forcedColorsAdjust={false}`
 * - `colorScheme={light}`
 * - `colorScheme={dark}`
 */
export interface CanvasAstroProps extends CanvasProps {
  code?: string;
  rawCode?: string;
  copyCode?: 'allow' | 'deny';
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

export const CanvasAstro = ({
  language,
  className,
  code = '<p>No code provided</p>',
  rawCode,
  copyCode,
  colorScheme,
  defaultExpandedCode,
  designTokens,
  forcedColorsAdjust = true,
  label,
}: CanvasAstroProps) => {
  const _code = typeof code === 'string' ? code : rawCode || '';

  const highlighed =
    typeof code === 'string'
      ? Prism.highlight(code, Prism.languages[language], language)
      : Prism.highlight(rawCode || '', Prism.languages[language], language);

  const example = (
    <Root
      Component="div"
      className={clsx('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', {
        'ma-canvas-astro__example--color-scheme-dark': colorScheme === 'dark',
        'ma-canvas-astro__example--color-scheme-light': colorScheme === 'light',
      })}
      style={designTokens as CSSProperties}
      dangerouslySetInnerHTML={{ __html: _code }}
    ></Root>
  );

  return (
    <div className={clsx('ma-canvas-astro', className)}>
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

          {/* Because of the arrow function syntax, the <Canvas> element can not be clientside rendered with client:load. therefore, the javascript allowing to copy the code is included in the `document.astro` file as a <script> element */}
          {copyCode === 'allow' && (
            <Button data-copy-code={_code} purpose="secondary">
              Kopieer code
            </Button>
          )}
        </AccordionSection>
      </Accordion>
    </div>
  );
};
