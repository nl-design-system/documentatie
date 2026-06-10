/* eslint-disable */
// @ts-nocheck
import { SideNavItem } from './side-nav-item.tsx';
import './side-nav.css';

export function SideNavList(props: { label: string; id: string; items: []; index: {} }) {
  const { label, href, items, index = {} } = props;

  return (
    <li>
      <input type="checkbox" aria-label="open" />
      {href || index?.href ? <a href={href || index?.href}>{label}</a> : label}
      <ul>{items.map((child) => (child.items ? <SideNavList {...child} /> : <SideNavItem {...child} />))}</ul>
    </li>
  );
}
