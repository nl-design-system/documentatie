---
title: Versiebeheer
hide_title: true
hide_table_of_contents: false
sidebar_label: Versiebeheer
pagination_label: Versiebeheer
description: Uitleg over de versiebeheer van code in NL Design System
keywords:
  - git
  - github
  - version control
  - versiebeheer
---

# Versiebeheer

Gebruik voor versiebeheer Git en GitHub, in de [nl-design-system organisatie](http://github.com/nl-design-system). Push je work-in-progress regelmatig naar GitHub, tenminste elke dag.

We gebruiken GitHub voor versiebeheer, in plaats van GitLab of Azure DevOps, omdat het een open source project is dat community-gedreven door personen en teams die voornamelijk op GitHub werken. Naar verwachting is zal de open source community beter groeien wanneer de NL Design System past bij de bestaande workflow van mensen en teams in de community.

De `main` branch van de Git repositories moet alleen gewijzigd worden via branches die een positieve review hebben gehad door een tweede persoon. Vereis daarom pull requests voor wijzigingen aan de `main` branch via GitHub Rulesets.

## Backups

Er wordt dagelijks een backup gemaakt van alle code van de nl-design-system organisatie met Rewind. De zekerheid van backups maakt het ook extra belangrijk om in deze organisatie te werken, in plaats van in een fork.
