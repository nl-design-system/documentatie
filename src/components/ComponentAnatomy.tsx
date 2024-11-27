import { Markdown } from '@site/src/components/Markdown';
import clsx from 'clsx';
import React, { PropsWithChildren, Suspense } from 'react';
import style from './ComponentAnatomy.module.css';

interface ComponentAnatomyProps {
  name?: string;
}

export const ComponentAnatomy = ({ name }: PropsWithChildren<ComponentAnatomyProps>) => {
  let AnatomyLegend =
    React.lazy(() => import(`@nl-design-system-candidate/${name}-docs/docs/anatomy/anatomy.md`)) || null;
  let AnatomyIllustration =
    React.lazy(() => import(`@nl-design-system-candidate/code-block-docs/docs/anatomy/anatomy.svg`)) || null;

  return (
    <Suspense>
      <AnatomyIllustration height={null} className={clsx(style['component-anatomy__illustration'])} />
      {AnatomyLegend && (
        <Markdown omitH1 headingLevel={1}>
          <AnatomyLegend />
        </Markdown>
      )}
    </Suspense>
  );
};
