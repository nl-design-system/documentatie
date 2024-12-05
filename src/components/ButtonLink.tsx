import DocusaurusLink from '@docusaurus/Link';
import type { Props } from '@docusaurus/Link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

export interface ButtonLinkProps extends Props {
  appearance: 'primary-action' | 'secondary-action' | 'subtle';
}

export const ButtonLink = ({ appearance, ...props }: PropsWithChildren<ButtonLinkProps>) => (
  <DocusaurusLink className={clsx('utrecht-button-link', `utrecht-button-link--${appearance}`)} {...props} />
);
