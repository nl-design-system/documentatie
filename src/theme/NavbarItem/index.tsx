import type { NavbarItemType, Props } from '@theme/NavbarItem';
import ComponentTypes from '@theme/NavbarItem/ComponentTypes';
import type { ReactElement } from 'react';

function normalizeComponentType(type: NavbarItemType, props: object) {
  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type "dropdown"
  if (!type || type === 'default') {
    return 'items' in props ? 'dropdown' : 'default';
  }
  return type;
}

export default function NavbarItem({ type, ...props }: Props): ReactElement {
  const componentType = normalizeComponentType(type, props);
  const NavbarItemComponent = ComponentTypes[componentType];
  if (!NavbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <NavbarItemComponent {...(props as any)} />;
}
