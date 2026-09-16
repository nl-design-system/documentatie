import type { ReactNode } from 'react';
import { Card } from '../card/card';
import { UnorderedList } from '../unordered-list/unordered-list';
import { DataBadge } from '@components/data-badge/data-badge';
import { Link } from '@components/link/link';

interface CriteriaListItemProps {
  title: string;
  sc: string;
  scLabel?: string;
  children: ReactNode;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CriteriaListItem = ({ title, sc, scLabel, children, headingLevel = 4 }: CriteriaListItemProps) => {
  return (
    <UnorderedList.Item>
      <Card heading={title} headingLevel={headingLevel} className="ma-flow--on-content">
        {sc && (
          <DataBadge>
            <Link href={`/wcag/${sc}/`}>{scLabel || sc}</Link>
          </DataBadge>
        )}

        {children}
      </Card>
    </UnorderedList.Item>
  );
};
