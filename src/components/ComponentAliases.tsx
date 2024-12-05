import { Markdown } from '@site/src/components/Markdown';
import React, { type PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';

interface ComponentAliasesProps {
  component?: object;
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
