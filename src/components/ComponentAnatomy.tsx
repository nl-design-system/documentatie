import { Markdown } from '@site/src/components/Markdown';
import clsx from 'clsx';
import React, { type Component, type PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';
import './ComponentAnatomy.css';

interface ComponentAnatomyProps {
  component?: object;
  illustration?: React.ComponentType<Component>;
}

export const ComponentAnatomy = ({
  component,
  illustration: AnatomyIllustration,
}: PropsWithChildren<ComponentAnatomyProps>) => {
  const { title } = component;
  const slug = toKebabCase(title);
  const AnatomyLegend = React.lazy(() =>
    import(`@nl-design-system-candidate/${slug}-docs/docs/anatomy/anatomy.md`).catch(() => {
      return { default: () => null };
    }),
  );

  return (
    <Suspense fallback={null}>
      {AnatomyIllustration && <AnatomyIllustration height={null} className={clsx('component-anatomy__illustration')} />}
      {AnatomyIllustration && AnatomyLegend && (
        <Markdown omitH1 headingLevel={1}>
          <AnatomyLegend />
        </Markdown>
      )}
    </Suspense>
  );
};
