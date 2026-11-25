import {
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationLinkLabel,
  SideNavigationList,
  // TODO: changes to the expand button have been made locally
  // SideNavigationExpandButton,
  // TODO: Export is missing from npm package
  // SideNavigationExpandSeparator,
} from '@gemeente-denhaag/side-navigation';
import { type KeyboardEvent, type ReactNode, useId, useRef, useState, type Ref } from 'react';
import SideNavigationExpandButton from './side-navigation-expand-button';
// TODO: We don't need number badge as dependency
// import { NumberBadge } from '@gemeente-denhaag/number-badge';

export interface SideNavigationTreeItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  current?: boolean;
  lang?: string;
  counter?: number;
  expanded?: boolean;
  items?: SideNavigationTreeItemProps[];
  closeParent?: () => void;
  openLabel?: string;
  closeLabel?: string;
  listId?: string;
  togglePanel?: () => void;
  handleEscapeOnLink?: (_event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  handleEscapeOnToggle?: (_event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  closePanel: () => void;
  toggleRef?: Ref<HTMLButtonElement>;
  isExpanded?: boolean;
}

export const SideNavigationTreeItemSummaryElement = (props: SideNavigationTreeItemProps) => {
  const { expanded, listId } = props;

  return (
    <SideNavigationItem>
      <div className="denhaag-side-navigation__tree-item-label-wrapper">
        <SideNavigationLink href={props.href} current={props.current} lang={props.lang}>
          {props.icon}
          {props.counter && props.counter > 0 ? (
            <SideNavigationLinkLabel>
              {props.label}
              {/* <NumberBadge>{props.counter}</NumberBadge> */}
            </SideNavigationLinkLabel>
          ) : (
            props.label
          )}
        </SideNavigationLink>
        {props.items?.length && (
          <SideNavigationExpandButton
            hidden
            aria-label={`${expanded ? props.closeLabel || 'Sluit' : props.openLabel || 'Open'} submenu`}
            data-open-label={`${props.openLabel || 'Open'} submenu`}
            data-closed-label={`${props.closeLabel || 'Sluit'} submenu`}
            aria-expanded={expanded}
          />
        )}
      </div>
      {props.items?.length && (
        <details open={expanded}>
          <summary>{`submenu ${props.label}`}</summary>
          <SideNavigationList id={listId}>
            {props.items.map((subItem, subIndex) => (
              <SideNavigationTreeItemSummaryElement
                key={subIndex}
                {...subItem}
                openLabel={props.openLabel}
                closeLabel={props.closeLabel}
              />
            ))}
          </SideNavigationList>
        </details>
      )}
    </SideNavigationItem>
  );
};

export const SideNavigationTreeItemElement = (props: SideNavigationTreeItemProps) => {
  const { closePanel, handleEscapeOnLink, handleEscapeOnToggle, isExpanded, listId, togglePanel, toggleRef } = props;

  return (
    <SideNavigationItem>
      <span className="denhaag-side-navigation__tree-item-label-wrapper">
        <SideNavigationLink href={props.href} current={props.current} lang={props.lang} onKeyDown={handleEscapeOnLink}>
          {props.icon}
          {props.counter && props.counter > 0 ? (
            <SideNavigationLinkLabel>
              {props.label}
              {/* <NumberBadge>{props.counter}</NumberBadge> */}
            </SideNavigationLinkLabel>
          ) : (
            props.label
          )}
        </SideNavigationLink>

        {props.items?.length && (
          <>
            {/* <SideNavigationExpandSeparator /> */}
            <SideNavigationExpandButton
              ref={toggleRef}
              onClick={togglePanel}
              aria-label={`${isExpanded ? props.closeLabel || 'Sluit' : props.openLabel || 'Open'} submenu`}
              aria-expanded={isExpanded}
              onKeyDown={handleEscapeOnToggle}
            />
          </>
        )}
      </span>

      {props.items?.length && isExpanded && (
        <SideNavigationList id={listId}>
          {props.items.map((subItem, subIndex) => (
            <SideNavigationTreeItem
              key={subIndex}
              {...subItem}
              closeParent={closePanel}
              openLabel={props.openLabel}
              closeLabel={props.closeLabel}
            />
          ))}
        </SideNavigationList>
      )}
    </SideNavigationItem>
  );
};

export const SideNavigationTreeItem = (props: SideNavigationTreeItemProps) => {
  const listId = useId();
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

  const extraProps = { closePanel, handleEscapeOnLink, handleEscapeOnToggle, listId, togglePanel, toggleRef };

  return <SideNavigationTreeItemElement {...props} {...extraProps} />;
};

export default SideNavigationTreeItem;
