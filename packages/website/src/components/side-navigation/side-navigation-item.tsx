import React, { KeyboardEvent, ReactNode, useId, useRef, useState } from 'react';
import { SideNavigationItem } from './SideNavigationItem';
import { SideNavigationLink } from './SideNavigationLink';
import { SideNavigationLinkLabel } from './SideNavigationLinkLabel';
import { SideNavigationList } from './SideNavigationList';
import { SideNavigationExpandButton } from './SideNavigationExpandButton';
import { SideNavigationExpandSeparator } from './SideNavigationExpandSeparator';
import { NumberBadge } from '@gemeente-denhaag/number-badge';

export interface SideNavigationTreeItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  current?: boolean;
  counter?: number;
  expanded?: boolean;
  items?: SideNavigationTreeItemProps[];
  closeParent?: () => void;
  openLabel?: string;
  closeLabel?: string;
}

export const SideNavigationTreeItem = (props: SideNavigationTreeItemProps) => {
  const id = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(Boolean(props.expanded));

  const togglePanel = () => setIsExpanded(!isExpanded);
  const closePanel = () => {
    setIsExpanded(false);
    toggleRef?.current?.focus();
  };

  const handleEscapeOnToggle = (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (event.code === 'Escape') {
      closePanel();
    }
  };

  const handleEscapeOnLink = (event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (event.code === 'Escape') {
      props?.closeParent?.();
    }
  };

  return (
    <SideNavigationItem>
      <span className="denhaag-side-navigation__tree-item-label-wrapper">
        <SideNavigationLink href={props.href} current={props.current} onKeyDown={handleEscapeOnLink}>
          {props.icon}
          {props.counter && props.counter > 0 ? (
            <SideNavigationLinkLabel>
              {props.label}
              <NumberBadge>{props.counter}</NumberBadge>
            </SideNavigationLinkLabel>
          ) : (
            props.label
          )}
        </SideNavigationLink>

        {props.items?.length && (
          <>
            <SideNavigationExpandSeparator />
            <SideNavigationExpandButton
              ref={toggleRef}
              onClick={togglePanel}
              aria-label={`${isExpanded ? props.closeLabel || 'Sluit' : props.openLabel || 'Open'} submenu ${props.label}`}
              aria-expanded={isExpanded}
              onKeyDown={handleEscapeOnToggle}
            />
          </>
        )}
      </span>

      {props.items?.length && isExpanded && (
        <SideNavigationList id={id}>
          {props.items.map((subItem, subIndex) => (
            <SideNavigationTreeItem key={subIndex} {...subItem} closeParent={closePanel} />
          ))}
        </SideNavigationList>
      )}
    </SideNavigationItem>
  );
};

export default SideNavigationTreeItem;
