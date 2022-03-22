import React, { PropsWithChildren } from "react";
import style from "./ComponentCards.module.css";
import { Link } from "@docusaurus/router";
import clsx from "clsx";

enum ComponentStatus {
  "help-wanted" = "Help Wanted",
  "community" = "Community",
  "unstable" = "Unstable",
  "stable" = "Stable",
}

interface ComponentCardProps {
  title: string;
  componentId: string;
  status: keyof typeof ComponentStatus;
}

export const ComponentCard = ({
  componentId,
  title,
  status,
}: ComponentCardProps) => (
  <div
    className={clsx(
      style["component-card"],
      style[`component-card--${status}`]
    )}
  >
    <div className={style["component-card__header"]}>
      <img
        className={style["component-card__image"]}
        src={require(`@site/static/img/components/${componentId}.png`).default}
      />
    </div>
    <div className={style["component-card__body"]}>
      <Link
        to={`/documentatie/docs/componenten/${componentId}`}
        className={style["component-card__title"]}
      >
        {title}
      </Link>
      <div
        className={clsx(
          style["component-card__status"],
          style[`component-card__status--${status}`]
        )}
      >
        {ComponentStatus[status]}
      </div>
    </div>
  </div>
);

export const ComponentCards = ({ children }: PropsWithChildren<{}>) => (
  <div className={style["component-cards"]}>{children}</div>
);
