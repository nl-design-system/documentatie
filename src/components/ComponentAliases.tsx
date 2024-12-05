import { Markdown } from '@site/src/components/Markdown';
import React, { PropsWithChildren, Suspense } from 'react';
import { toKebabCase } from '../utils';

interface ComponentAliasesProps {
  component?: object;
}

export const ComponentAliases = ({ component }: PropsWithChildren<ComponentAliasesProps>) => {
  const { title } = component;
  const slug = toKebabCase(title);
  let Aliases = React.lazy(() =>
    import(`@nl-design-system-candidate/${slug}-docs/docs/aliases.md`).catch(() => {
      return { default: () => null };
    }),
  );

  return (
    <>
      {Aliases && (
        <Suspense>
          {Aliases && (
            <Markdown omitH1 headingLevel={1}>
              <Aliases />
            </Markdown>
          )}
        </Suspense>
      )}
    </>
  );
};
