import type { CanvasProps } from './Canvas';
import Prism from 'prismjs';
import clsx from 'clsx';
import { Accordion, AccordionSection } from '../../../packages/website/src/components/accordion/accordion';
import { Button } from '../../../packages/website/src/components/button/button';
import './CanvasAstro.css';
import '@utrecht/component-library-css/dist/html.css';

export interface CanvasAstroProps extends CanvasProps {
  code?: string;
  copyCode?: 'allow' | 'deny';
}

export const CanvasAstro = ({ language, className, code = '<p>No code provided</p>', copyCode }: CanvasAstroProps) => {
  const highlighed = Prism.highlight(code, Prism.languages[language], language);

  return (
    <div className={clsx('ma-canvas-astro', className)}>
      {/* Live preview */}
      <div className="ma-canvas-astro__example utrecht-html ma-flow" dangerouslySetInnerHTML={{ __html: code }} />

      {/* Highlighted code example */}
      <Accordion>
        <AccordionSection label="Code">
          <pre className="language-html nl-code-block">
            <code className="language-html nl-code-block__code" dangerouslySetInnerHTML={{ __html: highlighed }} />
          </pre>

          {/* Because of the arrow function syntax, the <Canvas> element can not be clientside rendered with client:load. therefore, the javascript allowing to copy the code is included in the `document.astro` file as a <script> element */}
          {copyCode === 'allow' && (
            <Button data-copy-code={code} purpose="secondary">
              Kopieer code
            </Button>
          )}
        </AccordionSection>
      </Accordion>
    </div>
  );
};
