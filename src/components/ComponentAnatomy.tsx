import { Markdown } from '@site/src/components/Markdown';
import clsx from 'clsx';
import React, { type PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';
import './ComponentAnatomy.css';
import type { CleanComponentProgress as ComponentProgressObject } from '@nl-design-system/component-progress/dist/utils';

interface IllustrationProps {
  className?: string;
  height?: boolean;
}

interface ComponentAnatomyProps {
  component?: ComponentProgressObject;
  illustration?: React.ComponentType<IllustrationProps>;
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
      <figure className={clsx('component-anatomy')}>
        {AnatomyIllustration && (
          <AnatomyIllustration height={null} className={clsx('component-anatomy__illustration')} />
        )}
        {AnatomyIllustration && AnatomyLegend && (
          <figcaption>
            <Markdown omitH1 headingLevel={1}>
              <AnatomyLegend />
            </Markdown>
          </figcaption>
        )}
      </figure>
    </Suspense>
  );
};
