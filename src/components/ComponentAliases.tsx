import { Markdown } from '@site/src/components/Markdown';
import React, { type PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';
import type { CleanComponentProgress as ComponentProgressObject } from '@nl-design-system/component-progress/dist/utils';

interface ComponentAliasesProps {
  component?: ComponentProgressObject;
}

export const ComponentAliases = ({ component }: PropsWithChildren<ComponentAliasesProps>) => {
  const { title } = component;
  const slug = toKebabCase(title);
  const Aliases = React.lazy(() =>
    import(`@nl-design-system-candidate/${slug}-docs/docs/aliases.md`).catch(() => {
      return { default: () => null };
    }),
  );

  return (
    <Suspense fallback={null}>
      <Markdown omitH1 headingLevel={1}>
        <Aliases />
      </Markdown>
    </Suspense>
  );
};
