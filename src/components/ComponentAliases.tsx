import { Markdown } from '@site/src/components/Markdown';
import React, { PropsWithChildren, Suspense } from 'react';

interface ComponentAliasesProps {
  name?: string;
}

export const ComponentAliases = ({ name }: PropsWithChildren<ComponentAliasesProps>) => {
  let Aliases = React.lazy(() => import(`@nl-design-system-candidate/${name}-docs/docs/aliases.md`)) || null;

  return (
    <Suspense>
      {Aliases && (
        <Markdown omitH1 headingLevel={1}>
          <Aliases />
        </Markdown>
      )}
    </Suspense>
  );
};
