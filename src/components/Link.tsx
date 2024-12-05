import DocusaurusLink from '@docusaurus/Link';
import type { Props } from '@docusaurus/Link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

export const Link = ({ className, ...props }: PropsWithChildren<Props>) => (
  <DocusaurusLink className={clsx('utrecht-link', 'utrecht-link--html-a', className)} {...props} />
);
