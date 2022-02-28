import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import style from "./HomepageTeaser.module.css";
import { Link } from "@docusaurus/router";

interface HomepageTeasersProps {
  title: string;
  ctaLink: string;
  cta: string;
}

export const HomepageTeaser = ({
  title,
  cta,
  ctaLink,
  children,
}: PropsWithChildren<HomepageTeasersProps>) => (
  <div className={clsx(style["homepage-teaser"])}>
    <h2 className={clsx(style["homepage-teaser__title"])}>{title}</h2>
    <div className={clsx(style["homepage-teaser__description"])}>
      {children}
    </div>
    <div className={clsx(style["homepage-teaser__call-to-action"])}>
      <Link className={clsx("button", "button--primary")} to={ctaLink}>
        {cta}
      </Link>
    </div>
  </div>
);
