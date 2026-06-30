import type { ReactNode } from 'react';
import { Card } from '../card/card';
import { UnorderedList } from '../unordered-list/unordered-list';

interface CriteriaListItemProps {
  title: string;
  sc: string;
  status: string;
  children: ReactNode;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CriteriaListItem = ({ title, sc, status, children, headingLevel = 4 }: CriteriaListItemProps) => {
  return (
    <UnorderedList.Item>
      <Card heading={title} headingLevel={headingLevel}>
        <dl>
          <dt>sc:</dt>
          <dd>{sc}</dd>
          <dt>status:</dt>
          <dd>{status}</dd>
        </dl>

        {children}
      </Card>
    </UnorderedList.Item>
  );
};
