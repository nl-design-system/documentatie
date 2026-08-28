import '@utrecht/accordion-css/dist/index.css';
import '@nl-design-system-candidate/button-css/button.css';
import clsx from 'clsx';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode, ElementType } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Heading, type HeadingProps } from '@nl-design-system-candidate/heading-react';
import './accordion.css';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  name?: string;
}

export type AccordionLabelProps =
  | {
      label?: never;
      heading: ReactNode;
      headingLevel: HeadingProps['level'];
      headingApperance?: HeadingProps['appearance'];
    }
  | {
      label: ReactNode;
      heading?: never;
      headingLevel?: never;
      headingApperance?: never;
    };

export type AccordionSectionProps = HTMLAttributes<HTMLDetailsElement> &
  AccordionLabelProps & { classNamePanel?: string };

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ as, className, children, ...props }, ref) => {
  const Component = (as || 'div') as ElementType;
  const _className = clsx('ma-utrecht-accordion', 'utrecht-accordion', className);

  return (
    <Component ref={ref} className={_className} {...props}>
      {children}
    </Component>
  );
});

export const AccordionSection = ({
  className,
  classNamePanel,
  label,
  heading,
  headingLevel,
  headingApperance,
  ...props
}: AccordionSectionProps) => {
  const _className = clsx('utrecht-accordion__section', className);
  const _classNamePanel = clsx('utrecht-accordion__panel', classNamePanel);

  return (
    <details className={_className} {...props}>
      <summary className="utrecht-accordion__header">
        <span className="nl-button nl-button--subtle">
          <span className="nl-button__icon-start">
            <IconChevronDown />
          </span>
          <span className="nl-button__label">
            {heading && (
              <Heading level={headingLevel} appearance={headingApperance}>
                {heading}
              </Heading>
            )}
            {label}
          </span>
        </span>
      </summary>

      <div className={_classNamePanel}>{props.children}</div>
    </details>
  );
};
