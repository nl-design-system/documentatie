import type { ReactNode } from 'react';
import { Card } from '../card/card.tsx';
import { DataBadge } from '../data-badge/data-badge.tsx';
import { Link } from '../link/link.tsx';
import { UnorderedList } from '../unordered-list/unordered-list.tsx';

interface CriteriaListItemProps {
  title: string;
  sc: string;
  scLabel?: string;
  children: ReactNode;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CriteriaListItem = ({ children, headingLevel = 4, sc, scLabel, title }: CriteriaListItemProps) => {
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
