import React, { PropsWithChildren } from "react";
import style from "./ComponentCard.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { ExternalLink } from "./ExternalLink";

enum Status {
  "help-wanted" = "Help Wanted",
  "community" = "Community",
  "unstable" = "Unstable",
  "stable" = "Stable",
}

interface ComponentCardProps {
  title: string;
  componentId: string;
  status: string;
  docLink?: string;
  communityLink?: string;
}

export const ComponentCard = ({
  componentId,
  title,
  status,
  docLink,
  communityLink,
}: ComponentCardProps) => (
  <div
    className={clsx(
      style["component-card"],
      style[`component-card--${status}`],
      !docLink && communityLink && style["component-card--undocumented"]
    )}
  >
    <div className={style["component-card__header"]}>
      {docLink && (
        <img
          className={style["component-card__image"]}
          src={useBaseUrl(`img/components/${componentId}.png`)}
        />
      )}
    </div>
    <div className={style["component-card__body"]}>
      {docLink ? (
        <Link
          to={docLink}
          className={clsx(
            style["component-card__title"],
            style["component-card__title--link"]
          )}
        >
          {title}
        </Link>
      ) : communityLink ? (
        <ExternalLink
          href={communityLink}
          className={clsx(
            style["component-card__title"],
            style["component-card__title--link"]
          )}
        >
          {title}
        </ExternalLink>
      ) : (
        <p className={style["component-card__title"]}>{title}</p>
      )}
      <div
        className={clsx(
          style["component-card__status"],
          style[`component-card__status--${status}`]
        )}
      >
        {Status[status]}
      </div>
    </div>
  </div>
);

export const ComponentCards = ({ children }: PropsWithChildren<{}>) => (
  <div className={style["component-cards"]}>{children}</div>
);
