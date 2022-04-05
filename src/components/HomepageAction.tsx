import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import style from "./HomepageAction.module.css";
import Link from "@docusaurus/Link";

interface HomepageActionsProps {
  title: string;
  href: string;
}

export const HomepageAction = ({
  title,
  href,
  children,
}: PropsWithChildren<HomepageActionsProps>) => (
  <div className={clsx(style["homepage-action"])}>
    <Link to={href} className={clsx(style["homepage-action__link"])}>
      <h2 className={clsx(style["homepage-action__title"])}>{title}</h2>
      <div className={clsx(style["homepage-action__description"])}>
        {children}
      </div>
    </Link>
  </div>
);
