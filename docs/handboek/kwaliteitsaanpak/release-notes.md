---
title: Release notes
hide_title: true
hide_table_of_contents: false
sidebar_label: Release notes
pagination_label: Release notes
description: Dit is hoe we release notes bijhouden voor NL Design System.
keywords:
  - changelog
  - release notes
---

# Release notes

Publiceer alle wijzigingen in softwarereleases vast in een `CHANGELOG.md` bestand. Deze filename volgt de conventie, waardoor de release notes op diverse manieren gebruiksvriendelijk beschikbaar worden gemaakt, bijvoorbeeld met in Pull Requests van Dependabot, of in de GitHub user interface.

## Automatiseer de release notes

Gebruik de [changesets](https://github.com/changesets/changesets) workflow voor het vastleggen van wijzigingen in `.changeset/*.md`-bestanden.

Gebruik de `changeset` tool om bij releases de release notes automatisch toe te voegen aan alle relevante `CHANGELOG.md` bestanden. Door automatisch in één keer de changelog samen te stellen, heeft niemand last van merge conflicts doordat meerdere mensen tegelijk `CHANGELOG.md` willen wijzigen.
