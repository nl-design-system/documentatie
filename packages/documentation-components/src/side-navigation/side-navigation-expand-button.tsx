import { IconButton, IconButtonProps } from '@gemeente-denhaag/iconbutton';
// TODO: We want to use our own chevron
// import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import React from 'react';
import { IconChevronDown } from '../functional-icon/index.tsx';

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
        <IconChevronDown />
      </IconButton>
    );
  },
);

SideNavigationExpandButton.displayName = 'SideNavigationExpandButton';

export default SideNavigationExpandButton;
