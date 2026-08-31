import type { CanvasProps } from './Canvas';
import Prism from 'prismjs';
import clsx from 'clsx';
import { Accordion, AccordionSection } from '../../../packages/website/src/components/accordion/accordion';
import { Button } from '../../../packages/website/src/components/button/button';
import './CanvasAstro.css';
import '@utrecht/component-library-css/dist/html.css';
import type { CSSProperties } from 'react';

export interface CanvasAstroProps extends CanvasProps {
  code?: string;
  rawCode?: string;
  copyCode?: 'allow' | 'deny';
}

export const CanvasAstro = ({
  language,
  className,
  code = '<p>No code provided</p>',
  rawCode,
  copyCode,
  defaultExpandedCode,
  designTokens,
}: CanvasAstroProps) => {
  const _code = typeof code === 'string' ? code : rawCode || '';

  const highlighed =
    typeof code === 'string'
      ? Prism.highlight(code, Prism.languages[language], language)
      : Prism.highlight(rawCode || '', Prism.languages[language], language);

  return (
    <div className={clsx('ma-canvas-astro', className)}>
      {/* Live preview */}
      <div className="voorbeeld-theme" style={designTokens as CSSProperties}>
        <div className="ma-canvas-astro__example utrecht-html ma-flow" dangerouslySetInnerHTML={{ __html: _code }} />
      </div>

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
