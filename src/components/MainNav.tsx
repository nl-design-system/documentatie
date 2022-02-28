import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import Item from "@theme/NavbarItem";
import React from "react";
import clsx from "clsx";

import style from "./MainNav.module.css";
import { useLocation } from "@docusaurus/router";

interface NavProps extends HTMLAttributes<HTMLElement> {
  menuItems: any[];
}

export const MainNav = forwardRef(
  ({ menuItems }: NavProps, ref: ForwardedRef<HTMLElement>) => {
    const { pathname } = useLocation();
    return (
      <nav className={clsx(style["main-nav"])} ref={ref}>
        {/* For now use @theme navbar items as this helps maintain the navbar configuration while in beta*/}
        <div className={clsx(style["main-nav__container"], "container")}>
          {menuItems.map((item, i) => (
            <Item
              {...item}
              key={i}
              className={clsx(
                style["main-nav__item"],
                pathname.includes(item.docId) && style["main-nav__item--active"]
              )}
            />
          ))}
        </div>
      </nav>
    );
  }
);
