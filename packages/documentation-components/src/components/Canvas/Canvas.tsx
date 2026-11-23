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
  children?: ReactNode;

  rawCode?: string;
  copyCode?: 'allow' | 'deny';
  colorScheme?: 'dark' | 'light';
  forcedColorsAdjust?: boolean;

  /**
   * The `code` prop can be an array of strings, the purpose of this is to
   * provide three versions of the code in various print sizes so that each
   * code example is optimised for the available space on screen.
   * In the Astro site, a remark plugin is used to provide these three versions
   */
  code?: string | string[];

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
  children,
  className,
  code = '<p>No code provided</p>',
  colorScheme,
  copyCode,
  defaultExpandedCode = true,
  designTokens,
  forcedColorsAdjust = true,
  label,
  language,
  rawCode,
}: CanvasProps) => {
  const codeList = typeof code === 'string' ? [code] : code;
  const codeSmall = codeList[0] ?? (rawCode || '');
  const codeMedium = codeList[1] || codeSmall;
  const codeLarge = codeList[2] || codeMedium;

  const highlighedSmall = Prism.highlight(codeSmall, Prism.languages[language], language);
  const highlighedMedium = Prism.highlight(codeMedium, Prism.languages[language], language);
  const highlighedLarge = Prism.highlight(codeLarge, Prism.languages[language], language);

  const example = (
    <Root
      Component="div"
      className={clsx('ma-canvas__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', {
        'ma-canvas__example--color-scheme-dark': colorScheme === 'dark',
        'ma-canvas__example--color-scheme-light': colorScheme === 'light',
      })}
      style={designTokens as CSSProperties}
    >
      {children}
    </Root>
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
          <div className="ma-canvas__code-section">
            <pre className="ma-canvas__code-highlight-small language-html nl-code-block" hidden>
              <code
                className="language-html nl-code-block__code"
                dangerouslySetInnerHTML={{ __html: highlighedSmall }}
              />
            </pre>
            <pre className="ma-canvas__code-highlight-medium language-html nl-code-block" hidden>
              <code
                className="language-html nl-code-block__code"
                dangerouslySetInnerHTML={{ __html: highlighedMedium }}
              />
            </pre>
            <pre className="ma-canvas__code-highlight-large language-html nl-code-block">
              <code
                className="language-html nl-code-block__code"
                dangerouslySetInnerHTML={{ __html: highlighedLarge }}
              />
            </pre>
          </div>

          {/* Because of the arrow function syntax, the <Canvas> element can not be clientside rendered with client:load. therefore, the javascript allowing to copy the code is included in the `document.astro` file as a <script> element */}
          {copyCode === 'allow' && (
            <Button data-copy-code={codeLarge} purpose="secondary">
              Kopieer code
            </Button>
          )}
        </AccordionSection>
      </Accordion>
    </div>
  );
};
