import '@nl-design-system-candidate/button-css/button.css';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  purpose?: 'primary' | 'secondary' | 'subtle';
  href: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}

export const ButtonLink = ({
  children,
  className,
  href,
  iconEnd,
  iconStart,
  purpose,
  ...restProps
}: ButtonLinkProps) => {
  return (
    <a
      className={clsx('nl-button', className, {
        'nl-button--primary': purpose === 'primary',
        'nl-button--secondary': purpose === 'secondary',
        'nl-button--subtle': purpose === 'subtle',
      })}
      href={href}
      {...restProps}
    >
      {iconStart && <span className="nl-button__icon-start">{iconStart}</span>}
      <span className="nl-button__label">{children}</span>
      {iconEnd && <span className="nl-button__icon-end">{iconEnd}</span>}
    </a>
  );
};
