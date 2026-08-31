import type { CanvasProps } from './Canvas';
import Prism from 'prismjs';
import clsx from 'clsx';
import { Accordion, AccordionSection } from '../../../packages/website/src/components/accordion/accordion';
import './CanvasAstro.css';
import '@utrecht/component-library-css/dist/html.css';

export interface CanvasAstroProps extends CanvasProps {
  code?: string;
}

export const CanvasAstro = ({ language, className, code = '<p>No code provided</p>' }: CanvasAstroProps) => {
  const highlighed = Prism.highlight(code, Prism.languages[language], language);

  return (
    <div className={clsx('ma-canvas-astro', className)}>
      {/* Code to be copied with the copy button. */}
      <template dangerouslySetInnerHTML={{ __html: code }}></template>

      {/* Live preview */}
      <div className="ma-canvas-astro__example utrecht-html ma-flow" dangerouslySetInnerHTML={{ __html: code }} />

      {/* Highlighted code example */}
      <Accordion>
        <AccordionSection label="Code">
          <pre className="language-html nl-code-block">
            <code className="language-html nl-code-block__code" dangerouslySetInnerHTML={{ __html: highlighed }} />
          </pre>
        </AccordionSection>
      </Accordion>
    </div>
  );
};
