import { LinkList, LinkListLink, Paragraph } from '@utrecht/component-library-react/dist/css-module';
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
  definitions: Definition[];
  sources?: Source[];
}

interface TermsListProps extends HTMLAttributes<HTMLTableElement> {
  terms: Term[];
}

const DefinitionData = ({ paragraph }: Definition) => (
  <Paragraph className="term-table__definition">{paragraph}</Paragraph>
);

const SourceData = ({ name, url }: Source) => <LinkListLink href={url}>{name}</LinkListLink>;

export const TermsList = ({ terms }: TermsListProps) => {
  return (
    <div className="terms-list-container">
      <dl>
        {terms.map(({ term, definitions, sources }, index) => (
          <div className="term-list_item" key={index}>
            <dt>{term}</dt>
            <dd>
              {definitions.map((definition, index) => (
                <DefinitionData key={index} {...definition} />
              ))}
              {sources && sources.length && (
                <>
                  Verder lezen
                  <LinkList>
                    {sources.map((source, index) => (
                      <SourceData key={index} {...source} />
                    ))}
                  </LinkList>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
