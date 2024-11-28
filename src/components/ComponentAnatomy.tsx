import { Markdown } from '@site/src/components/Markdown';
import clsx from 'clsx';
import React, { PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';
import style from './ComponentAnatomy.module.css';

interface ComponentAnatomyProps {
  component?: object;
}

export const ComponentAnatomy = ({ component }: PropsWithChildren<ComponentAnatomyProps>) => {
  const { title } = component;
  const slug = toKebabCase(title);
  let AnatomyLegend = React.lazy(() => import(`@nl-design-system-candidate/${slug}-docs/docs/anatomy/anatomy.md`));
  let AnatomyIllustration = React.lazy(
    () => import(`@nl-design-system-candidate/code-block-docs/docs/anatomy/anatomy.svg`),
  );

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
