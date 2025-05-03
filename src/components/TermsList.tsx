import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { HTMLAttributes } from 'react';
import './TermsList.css';

interface DefinitionProps {
  paragraph: string;
}

interface SourceProps {
  name: string;
  url: string;
}

export interface Term {
  term: string;
  slug: string;
  definitions: DefinitionProps[];
  sources?: SourceProps[];
}

interface TermsListProps extends HTMLAttributes<HTMLTableElement> {
  terms: Term[];
}

const Definition = ({ paragraph }: DefinitionProps) => (
  <Paragraph className="definition__paragraph">{paragraph}</Paragraph>
);

const Source = ({ name, url }: SourceProps) => (
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
                <Definition key={index} {...definition} />
              ))}
              {sources && sources.length && (
                <>
                  <div className="definition__sources">
                    <span>Verder lezen</span>
                    <ul role="list">
                      {sources.map((source, index) => (
                        <Source key={index} {...source} />
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
