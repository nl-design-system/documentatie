import type { ReactNode } from 'react';
import { UnorderedList } from '@amsterdam/design-system-react';
import { Accordion, AccordionSection, type AccordionSectionProps } from '../accordion/accordion.tsx';

interface CriteriaListProps {
  testCategory: string;
  children: ReactNode;
  headingLevel: AccordionSectionProps['headingLevel'];
  headingApperance?: AccordionSectionProps['headingApperance'];
}

export const CriteriaList = ({
  children,
  headingApperance = 'level-5',
  headingLevel = 4,
  testCategory,
}: CriteriaListProps) => {
  return (
    <div className="ma-criteria-list">
      <Accordion>
        <AccordionSection heading={testCategory} headingLevel={headingLevel} headingApperance={headingApperance}>
          <UnorderedList markers={false}>{children}</UnorderedList>
        </AccordionSection>
      </Accordion>
    </div>
  );
};
