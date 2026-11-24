import { Root } from '@utrecht/root-react';
import clsx from 'clsx';
import Prism from 'prismjs';
import { useId, type CSSProperties, type ReactNode } from 'react';
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
  // Not rendered: `remark-canvas-fix` converts `{() => …}` children in MDX into `code`
  children?: ReactNode;
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

export const Canvas = ({
  className,
  code = '<p>No code provided</p>',
  colorScheme,
  copyCode,
  defaultExpandedCode,
  designTokens,
  forcedColorsAdjust = true,
  label,
  language,
  rawCode,
}: CanvasProps) => {
  const _code = typeof code === 'string' ? code : rawCode || '';

  const highlighed =
    typeof code === 'string'
      ? Prism.highlight(code, Prism.languages[language], language)
      : Prism.highlight(rawCode || '', Prism.languages[language], language);

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
