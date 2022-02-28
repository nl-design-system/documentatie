import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import style from "./HomepageFooter.module.css";

export const HomepageFooter = ({ children }: PropsWithChildren<{}>) => (
  <div className={clsx(style["homepage-footer"])}>
    <div className={clsx(style["homepage-footer__container"], "container")}>
      {children}
    </div>
  </div>
);
