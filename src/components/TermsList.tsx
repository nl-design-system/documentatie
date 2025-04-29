import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { HTMLAttributes } from 'react';
import './TermsList.css';

interface Definition {
  paragraph: string;
}

interface Source {
  name: string;
  url: string;
}

export interface Term {
  term: string;
  slug: string;
  definitions: Definition[];
  sources?: Source[];
}

interface TermsListProps extends HTMLAttributes<HTMLTableElement> {
  terms: Term[];
}

const DefinitionData = ({ paragraph }: Definition) => (
  <Paragraph className="definition__paragraph">{paragraph}</Paragraph>
);

const SourceData = ({ name, url }: Source) => (
  <li className="definition__source">
    <a href={url} className="definition__link">
      {name}
    </a>
  </li>
);

export const TermsList = ({ terms }: TermsListProps) => {
  return (
    <div className="terms-list-container">
      <dl className="terms-list">
        {terms.map(({ term, slug, definitions, sources }, index) => (
          <div className="terms-list__item" key={index}>
            <dt id={slug}>
              <h3>{term}</h3>
            </dt>
            <dd className="terms-list__definition">
              {definitions.map((definition, index) => (
                <DefinitionData key={index} {...definition} />
              ))}
              {sources && sources.length && (
                <>
                  <div className="definition__sources">
                    <span>Verder lezen</span>
                    <ul role="list">
                      {sources.map((source, index) => (
                        <SourceData key={index} {...source} />
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
