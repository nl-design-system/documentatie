import type { Props } from '@docusaurus/Link';
import { BareLink } from '@site/src/components/Link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

export interface ButtonLinkProps extends Props {
  appearance: 'primary-action' | 'secondary-action' | 'subtle';
}

export const ButtonLink = ({ appearance, ...props }: PropsWithChildren<ButtonLinkProps>) => (
  <BareLink className={clsx('utrecht-button-link', `utrecht-button-link--${appearance}`)} {...props} />
);
