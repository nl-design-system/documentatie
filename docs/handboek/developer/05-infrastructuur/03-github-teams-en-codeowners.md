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

Binnen NL Design System gebruiken we rollen om verantwoordelijkheden duidelijk te organiseren.
In GitHub zijn er teams per organisatie en per rol.

Hiermee organiseren we wie toegang heeft tot repositories, en weet je snel wie toestemming moet geven voor een aanpassing van code of voor een wijziging in toegangsrechten.

We gebruiken het `CODEOWNERS`-bestand om te garanderen dat een code review wordt gevraagd aan de juiste personen, voor wijzigingen aan belangrijke bestanden.

## Rollen

Over het algemeen is er per organisatie een contributor-team, een maintainer-team en een admin-team.

- `<organisatie>-contributor` - heeft schrijftoegang tot de repository en kan daarmee pull requests indienen
- `<organisatie>-maintainer` - voor het beoordelen en mergen van pull requests en onderhoudstaken op de repository
- `<organisatie>-admin` - voor toegangsbeheer van de repository

Op verzoek kunnen extra rollen gebruikt worden, maar de standaard-rollen zijn in de meeste gevallen voldoende.

## Lid worden van een team

Wanneer iemand aan een team toegevoegd moet worden, dan moet een maintainer of een admin die wijziging doorvoeren door een pull request aan te maken in de `terraform`-repository.
Hiervoor is een [handleiding](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md) beschikbaar.

De admin van de organisatie moet de wijzigingen indienen of goedkeuren.

De admin moet periodiek controleren dat de toegangsrechten van gebruikers nog kloppen.

## CODEOWNERS

Met `CODEOWNERS` leg je vast welke gebruikers of rollen verantwoordelijk zijn voor bepaalde bestanden of mappen.
Als een pull request die paden wijzigt, voegt GitHub die code owners automatisch toe als reviewer.
Hiermee worden de juiste mensen gelijk geïnformeerd.
Als beveiligingslaag kan een accordering van een code owner ook verplicht worden.

Een vereenvoudigd voorbeeld:

```txt
docs/ @nl-design-system/documentatie

# Infra-bestanden
.github/ @nl-design-system/kernteam-maintainer
```

Met dit voorbeeld vraagt GitHub bij een pull request die bestanden onder `docs/` wijzigt automatisch een review aan bij de gebruikers in het team `@nl-design-system/documentatie`.

:::tip[Praktisch advies]
De volgorde is belangrijk; als meerdere regels van toepassing zijn op een wijziging, wordt de laatst matchende regel toegepast.
Over het algemeen zet je daarom de rollen met meer rechten achteraan.

Het kan zijn dat een team niet 1-op-1 mapt op de mensen die je als eigenaar wilt toewijzen.
Gebruik in `CODEOWNERS` dan bij voorkeur individuele accounts in plaats van teams.

Gebruik verder comments bij paden waar uit de naamgeving niet direct duidelijk wordt wat de scope is van de bestanden.
:::

### Review van code owners verplichten

Code owners worden altijd aan pull requests toegevoegd als reviewer.
Middels een _branch protection rule_ kun je verplichten dat een goedkeuring van één of meer code owners nodig is.

Standaard staat deze verplichting uit.
We raden sterk aan om hier wel gebruik van te maken.
In de `terraform` infrastructuurrepository is deze functie aan te zetten door in de betreffende `github_repository_ruleset` de regel `rules.pull_requests.require_code_owner_review` op `true` te zetten.
