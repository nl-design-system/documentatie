import type { Props } from '@docusaurus/Link';
import { BareLink } from '@site/src/components/Link';
import {
  ButtonLink as AstroButtonLink,
  type ButtonLinkProps as AstroButtonLinkProps,
} from '@site/packages/website/src/components/button-link/button-link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

export interface ButtonLinkProps extends Props {
  appearance: 'primary-action' | 'secondary-action' | 'subtle';
}

export const ButtonLink = globalThis.isAstro
  ? ({ appearance, href, ...props }) => {
      let purpose: AstroButtonLinkProps['purpose'] = 'primary';
      purpose = appearance === 'secondary-action' ? 'secondary' : purpose;
      return <AstroButtonLink purpose={purpose} href={href} {...props} />;
    }
  : ({ appearance, ...props }: PropsWithChildren<ButtonLinkProps>) => (
      <BareLink className={clsx('utrecht-button-link', `utrecht-button-link--${appearance}`)} {...props} />
    );
