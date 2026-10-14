import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import './index.css';

interface HTMLHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  level: number;
}

const HTMLHeading = ({ level, ...restProps }: HTMLHeadingProps) => {
  const HeadingX =
    level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';

  return <HeadingX {...restProps} />;
};

export interface NavigationLandmarkProps extends HTMLElement {
  heading: ReactNode;
  headingLevel: number;
  headingId: string;
}

export const NavigationLandmark = ({
  children,
  className,
  heading,
  headingId,
  headingLevel,
  ...restProps
}: PropsWithChildren<NavigationLandmarkProps>) => {
  return (
    <nav aria-labelledby={headingId} className={clsx('ma-navigation-landmark', className)} {...restProps}>
      <HTMLHeading aria-hidden="true" level={headingLevel} className="ma-navigation-landmark__heading">
        {heading}
      </HTMLHeading>
      {children}
    </nav>
  );
};
