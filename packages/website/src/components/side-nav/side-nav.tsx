/* eslint-disable */
// @ts-nocheck
import { SideNavList } from './side-nav-list.tsx';
import { SideNavItem } from './side-nav-item.tsx';

export function SideNav(props) {
  return (
    <nav aria-label="main navigation">
      <ul className="ma-side-nav">
        {(props.data.items || []).map((child) =>
          child.items ? <SideNavList {...child} /> : <SideNavItem {...child} />,
        )}
      </ul>
    </nav>
  );
}
