---
title: GitHub teams en code owners
hide_title: true
hide_table_of_contents: false
sidebar_label: GitHub teams en code owners
pagination_label: GitHub teams en code owners
description: Het werken met GitHub teams en code owners binnen NL Design System
slug: /handboek/developer/github-teams-en-code-owners/
keywords:
  - GitHub
  - Teams
  - Codeowners
  - Code owners
---

# GitHub teams en code owners

Binnen NL Design System gebruiken we GitHub teams om verantwoordelijkheden duidelijk te organiseren.
Hiermee organiseren we wie (schrijf)toegang heeft tot repositories, en weet je snel wie je moet betrekken bij een wijziging, code review of toegangsvraag.

We gebruiken het `CODEOWNERS`-bestand om reviewverzoeken automatisch bij de juiste mensen te laten landen.

## Teams in de praktijk

Over het algemeen hanteren we per organisatie een contributor-team, een maintainer-team en een admin-team.

- `<organisatie>-contributor` - heeft schrijftoegang tot de repository en kan daarmee pull requests indienen
- `<organisatie>-maintainer` - voor het beoordelen en mergen van pull requests en onderhoudstaken op de repository
- `<organisatie>-admin` - voor toegangsbeheer van de repository

Op verzoek kunnen voor meer granulariteit meer teams worden aangemaakt, maar bovenstaande is in de meeste gevallen voldoende.

## Lid worden van een team

Een maintainer of een lid van het kernteam kan in de `terraform` infrastructuurrepository een pull request aanmaken.
Hiervoor is een [handleiding](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md) beschikbaar.

De admin van de organisatie wordt gevraagd om de aanvraag goed te keuren, en om te kijken of de lijst van gebruikers in de teams up-to-date is.

## CODEOWNERS

Met `CODEOWNERS` leg je vast welke gebruikers/teams eigenaar zijn van bepaalde bestanden of mappen.
Deze gebruikers worden automatisch toegevoegd als reviewer als een pull request deze bestanden of mappen wijzigt.

Een vereenvoudigd voorbeeld:

```txt
# Infra-bestanden
.github/ @nl-design-system/kernteam-maintainer

docs/ @nl-design-system/documentatie
```

Met dit voorbeeld, bij een pull request dat bestanden onder `docs/` wijzigt, vraagt GitHub automatisch een review aan bij `@nl-design-system/documentatie`.

:::tip[Praktisch advies]
Het kan zijn dat een team niet 1-op-1 mapt op de mensen die je als eigenaar wil toewijzen.
Gebruik in `CODEOWNERS` dan bij voorkeur individuele accounts in plaats van teams.

Gebruik verder comments bij paden waar uit de naamgeving niet direct duidelijk wordt wat de scope is van de bestanden.
:::

### Review van code owners verplichten

Code owners worden altijd aan pull requests toegevoegd als reviewer.
Middels een _branch protection rule_ kun je verplichten dat een goedkeuring van één (of meer) code owners nodig is.

Standaard staat deze verplichting uit.
We raden sterk aan om hier wel gebruik van te maken.
In de `terraform` infrastructuurrepository is deze functie aan te zetten door in de betreffende `github_repository_ruleset` de regel `rules.pull_requests.require_code_owner_review` op `true` te zetten.
