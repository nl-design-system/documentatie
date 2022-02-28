import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import style from "./HomepageHero.module.css";

interface HomepageHeroProps {
  title: string;
  ctaLink: string;
  cta: string;
}

export const HomepageHero = ({
  title,
  ctaLink,
  cta,
  children,
}: PropsWithChildren<HomepageHeroProps>) => {
  return (
    <div className="container">
      <div className={clsx(style["homepage-hero"])}>
        <h1 className={clsx(style["homepage-hero__title"])}>{title}</h1>
        <div className={clsx(style["homepage-hero__description"])}>
          {children}
        </div>
        <div className={clsx(style["homepage-hero__call-to-action"])}>
          <Link className={clsx("button", "button--secondary")} to={ctaLink}>
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
