import '@nl-design-system-candidate/button-css/button.css';

import clsx from 'clsx';
import type { ReactNode } from 'react';

export interface ButtonLinkProps {
  purpose?: 'primary' | 'secondary' | 'subtle';
  href: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const ButtonLink = ({ className, children, purpose, iconStart, iconEnd, href }: ButtonLinkProps) => {
  return (
    <a
      className={clsx('nl-button', className, {
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
      })}
      href={href}
    >
      {iconStart && <span className="nl-button__icon-start">{iconStart}</span>}
      <span className="nl-button__label">{children}</span>
      {iconEnd && <span className="nl-button__icon-end">{iconEnd}</span>}
    </a>
  );
};
