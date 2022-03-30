import React from "react";
import { ComponentCard } from "./ComponentCard";
import style from "./ComponentOverview.module.css";

interface Implementation {
  organisation?: "";
  stable?: boolean;
  repo: string;
  documentation?: string;
  figma?: string;
}

interface OverviewComponent {
  id: string;
  name: string;
  aliases: string[];
  implementations: {
    community: Implementation[];
    nlds?: Implementation;
  };
  docLink?: string;
  backlog?: string;
}

interface ComponentOverviewProps {
  components: OverviewComponent[];
}

export const ComponentOverview = ({ components }: ComponentOverviewProps) => (
  <div className={style["component-overview"]}>
    {components
      .sort((a, b) => (a.name >= b.name ? 1 : -1))
      .map(
        ({
          name,
          id,
          implementations: { nlds, community },
          docLink,
          backlog,
        }) => {
          const status =
            nlds && nlds.stable
              ? "stable"
              : nlds && !nlds.stable
              ? "unstable"
              : community.length > 0
              ? "community"
              : "help-wanted";

          const communityComponents = community.filter(
            (implementation) => implementation.repo
          );

          const communityLink =
            communityComponents.find(({ documentation }) => documentation)
              ?.documentation || communityComponents[0]?.repo;

          return (
            <ComponentCard
              key={id}
              title={name}
              componentId={id}
              status={status}
              docLink={docLink}
              communityLink={communityLink || backlog}
            />
          );
        }
      )}
  </div>
);
