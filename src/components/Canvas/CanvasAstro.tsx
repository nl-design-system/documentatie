import type { CanvasProps } from './Canvas';
import Prism from 'prismjs';
import { renderToStaticMarkup } from 'react-dom/server';
import { Accordion, AccordionSection } from '../../../packages/website/src/components/accordion/accordion';
import './CanvasAstro.css';
import '@utrecht/component-library-css/dist/html.css';

export const CanvasAstro = ({ children, language }: CanvasProps) => {
  const _children = typeof children === 'function' ? children() : children;
  const code = renderToStaticMarkup(_children);
  const formattedCode = code
    .replaceAll(/&quot;/g, '"')
    .replaceAll(/\sclass="[\w-\s]+"/g, '')
    .replaceAll(/\sid="[\w-\s]+"/g, '')
    .replace('<astro-static-slot>', '')
    .replace('</astro-static-slot>', '')
    .replaceAll(/{"\s"}/g, '')
    .replaceAll(/\n{2,}/g, '\n')
    .replaceAll(/^\s\s/gm, '')
    .replaceAll(/\salt\s/g, ' alt="" ')
    .replaceAll(' loading="lazy"', ' ');

  const highlighed = Prism.highlight(formattedCode, Prism.languages[language], language);

  return (
    <div className="ma-canvas-astro">
      <div
        className="ma-canvas-astro__example utrecht-html ma-flow"
        dangerouslySetInnerHTML={{ __html: formattedCode }}
      />
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
