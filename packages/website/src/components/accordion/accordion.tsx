import '@utrecht/accordion-css/dist/index.css';
import '@nl-design-system-candidate/button-css/button.css';
import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Heading, type HeadingProps } from '@nl-design-system-candidate/heading-react';
import './accordion.css';

export interface AccordionProps {
  name?: string;
  children: ReactNode;
  className?: string;
}

export interface AccordionSectionProps extends HTMLAttributes<HTMLDetailsElement> {
  heading: ReactNode;
  headingLevel: HeadingProps['level'];
  headingApperance?: HeadingProps['appearance'];
}

export const Accordion = ({ className, ...props }: AccordionProps) => {
  const _className = clsx('ma-utrecht-accordion', 'utrecht-accordion', className);

  return <div className={_className}>{props.children}</div>;
};

export const AccordionSection = ({ className, ...props }: AccordionSectionProps) => {
  const _className = clsx('utrecht-accordion__section', className);

  return (
    <details className={_className} {...props}>
      <summary className="utrecht-accordion__header">
        <span className="nl-button nl-button--subtle">
          <span className="nl-button__icon-start">
            <IconChevronDown />
          </span>
          <span className="nl-button__label">
            <Heading level={props.headingLevel} appearance={props.headingApperance}>
              {props.heading}
            </Heading>
          </span>
        </span>
      </summary>

      <div className="utrecht-accordion__panel">{props.children}</div>
    </details>
  );
};
