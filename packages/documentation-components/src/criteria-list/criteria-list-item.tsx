import type { ReactNode } from 'react';
import { Card } from '../card/card.tsx';
import { UnorderedList } from '../unordered-list/unordered-list.tsx';
import { DataBadge } from '../data-badge/data-badge.tsx';
import { Link } from '../link/link.tsx';

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
