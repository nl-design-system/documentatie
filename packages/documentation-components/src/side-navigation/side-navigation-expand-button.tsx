import { IconButton, IconButtonProps } from '@gemeente-denhaag/iconbutton';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import React from 'react';

export type SideNavigationExpandIconProps = IconButtonProps;

export const SideNavigationExpandButton = React.forwardRef<HTMLButtonElement, SideNavigationExpandIconProps>(
  (props, ref) => {
    const className = clsx(
      'denhaag-side-navigation__expand-button',
      { 'denhaag-side-navigation__expand-button--expanded': props['aria-expanded'] },
      props.className,
    );

    return (
      <IconButton ref={ref} {...props} className={className}>
        <ChevronDownIcon />
      </IconButton>
    );
  },
);

SideNavigationExpandButton.displayName = 'SideNavigationExpandButton';

export default SideNavigationExpandButton;
