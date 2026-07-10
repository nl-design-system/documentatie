---
title: Een Pull Request (PR) maken · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Een Pull Request (PR) maken
pagination_label: Een Pull Request (PR) maken
description: Een Pull Request (PR) maken
keywords:
  - developer
  - github
  - pull request
  - pr
---

<!--
De volgende user stories vormen de richtlijnen waarop deze pagina is gebaseerd:
- Als developer wil ik weten hoe ik een PR in een NL Design System-repository optimaal kan laten voldoen aan de procesrichtlijnen, zodat deze zo snel mogelijk kan worden gemerged
- Als maintainer in een NL Design System-repository wil ik dat reviews efficiënt verlopen en minder iteraties nodig zijn door vooraf af te stemmen voordat werk wordt uitgevoerd
- Als maintainer in een NL Design System-repository wil ik zo veel mogelijk dat een PR in één keer zo volledig en correct mogelijk wordt aangeleverd, zodat deze zonder onnodige aanpassingen kan worden beoordeeld en gemerged.
- Als maintainer van NL Design System wil ik zo min mogelijk frictie in het proces, en waar deze onontkomelijk is (zoals het aanvragen van rechten), dat dit zo soepel mogelijk wordt gemaakt door een stappenplan beschikbaar te stellen
-->

# Een Pull Request (PR) maken

Deze pagina beschrijft hoe je kunt bijdragen aan het design system via GitHub pull requests en welke werkwijze we daarbij hanteren.

## Voordat je een pull request aanmaakt

Het is goed om vooraf te overleggen met het team dat de betreffende repository onderhoudt. Dat kan via [Slack](https://nldesignsystem.nl/slack/), maar ook via GitHub Issues als je een bug hebt gevonden die reproduceerbaar is of een verbetering of nieuwe feature wil voorstellen.

## Rechten aanvragen

Om een pull request te kunnen maken, moet je lid worden van het **community-contributor** team in GitHub. Dit team heeft rechten om code te pushen naar de repository en pull requests aan te maken. Je hoeft dan ook niet een fork van de repository te maken.

1. Geef jouw GitHub username door aan een maintainer.
2. De maintainer voegt jouw GitHub username toe in onze [terraform](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md)-repository
3. Het NL Design System kernteam verwerkt deze toevoeging en informeert jou via Slack zodra het is verwerkt

:::warning[Let op]

Een PR vanaf een fork van de repository heeft enkele belangrijke nadelen voor de snelheid van verwerking. Zo worden bijvoorbeeld automatische build en test pipelines bijvoorbeeld niet uitgevoerd bij PR's vanaf een fork. Daarom hebben we dit proces opgezet, zodat je direct op de repository kunt werken en je bijdrage sneller kan worden verwerkt.

:::

## De pull request aanmaken

Wijzigingen aan het design system worden altijd aangeleverd via een Pull Request. De gebruikelijke flow is:

1. Maak een feature branch aan vanaf de hoofdbranch (meestal `main`).
2. Voer je wijzigingen door, en push je branch naar de repository. Zorg dat je wijzigingen voldoen aan de afgesproken richtlijnen en conventies. Je vindt veel tips in het [handboek voor developers](https://nldesignsystem.nl/handboek/developer/overzicht/). Let er bijvoorbeeld op dat jouw PR een [changeset](https://nldesignsystem.nl/handboek/developer/changesets/) bevat.
3. Open een pull request naar de hoofdbranch. Je gebruikt hiervoor de webinterface van GitHub (onder het tabje "Pull requests") of de [GitHub CLI](https://cli.github.com/) (`gh pr create`).
4. Je PR wordt gereviewd door de beheerders van het design system.
5. Na goedkeuring wordt de PR gemerged.

Bij het aanmaken van de PR, gebruik de beschrijving om duidelijk uit te leggen:

- Wat er is gewijzigd,
- Waarom deze wijziging nodig is, en
- Indien er een GitHub Issue gekoppeld is aan deze wijziging, vermeld deze dan ook
