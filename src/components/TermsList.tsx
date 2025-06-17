import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import type { HTMLAttributes } from 'react';
import './TermsList.css';

interface SynonymProps {
  term: string;
}

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
  synonyms?: SynonymProps[];
  definitions: DefinitionProps[];
  sources?: SourceProps[];
}

interface TermsListProps extends HTMLAttributes<HTMLTableElement> {
  terms: Term[];
}

const Synonym = ({ term }: SynonymProps) => <dt>{term}</dt>;

const Definition = ({ paragraph }: DefinitionProps) => <Paragraph>{paragraph}</Paragraph>;

const Source = ({ name, url }: SourceProps) => (
  <li>
    <a href={url}>{name}</a>
  </li>
);

export const TermsList = ({ terms }: TermsListProps) => {
  return (
    <div>
      <dl>
        {terms.map(({ term, slug, synonyms, definitions, sources }, index) => (
          <div className="terms-list__item" key={index}>
            <dt id={slug}>
              <h3>{term}</h3>
            </dt>
            {synonyms && synonyms.length && (
              <>
                {synonyms.map((synonym, index) => (
                  <Synonym key={index} {...synonym} />
                ))}
              </>
            )}

            <dd className="terms-list__definition">
              {definitions.map((definition, index) => (
                <Definition key={index} {...definition} />
              ))}
              {sources && sources.length && (
                <>
                  <div className="terms-list__definition__sources">
                    <span>Verder lezen:</span>
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
