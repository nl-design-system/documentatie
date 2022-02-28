import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import style from "./HomepageActions.module.css";

export const HomepageActions = ({ children }: PropsWithChildren<{}>) => (
  <div className={clsx(style["homepage-actions"], "container")}>{children}</div>
);
