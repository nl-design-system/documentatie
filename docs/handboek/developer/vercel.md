---
title: Vercel · Developer · Handboek
slug: /vercel
hide_table_of_contents: false
sidebar_label: Vercel
pagination_label: Vercel
description: Waarom gebruikt NL Design System de tool Vercel?
keywords:
  - GitHub Actions
  - Vercel
  - Deployment
---

# Vercel

NL Design System maakt gebruik van Vercel voor het hosten van diverse projecten, zowel eigen projecten als de projecten van deelnemende organisaties. Op deze manier wordt het samenwerken makkelijker gemaakt doordat de resultaten van alle werkzaamheden direct beschikbaar komen. Het NL Design System kernteam kan de logs van Vercel inzien om fouten en problemen op te lossen.

## Feature branch deployments

Je hebt hard gewerkt aan een nieuwe feature en wil die graag laten zien. Ook is het erg handig wanneer een Pull Request reviewer niet persé de branch hoeft uit te checken en het systeem zelf hoeft te draaien om de wijzigingen terug te zien.

Hiervoor maakt NL Design System gebruik van [feature branch (preview) deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production).
NL Design System maakt gebruik van Branch-specific URLs, niet van Commit-specific URLs.

Voor elke branch die je aanmaakt wordt dus een URL beschikbaar gemaakt, zodra je bij deze branch een PR opent. De URL van de branch wordt via een commentaar aan de PR toegevoegd.

Als voorbeeld de feature branch `feat/vercel` krijgt de URL:
https://documentatie-git-feat-vercel-nl-design-system.vercel.app/

In de URL is `feat-vercel` terug te lezen naar de branch naam, op basis daarvan heeft elke branch een unieke URL.

## Veelvoorkomende vragen

Het komt vaak voor dat er iets fout gaat in de Github Actions pipelines, maar dat de onderliggende fout niet zichtbaar is omdat het in Vercel afspeelt.
Wat vaak aan de hand is dat de Node versie van het project is geüpdatet naar een nieuwere versie, maar bij de Vercel configuratie nog niet. Dit kan opgelost worden door de versie te updaten via Terraform. Hiervoor zou je zelf een PR als suggestie kunnen aanbieden via [de repostory van Terraform](https://github.com/nl-design-system/terraform/pulls), of hulp vragen via het hier beneden benoemde Slack kanaal.

Andere foutmeldingen komen ook uit Vercel, maar zijn in de Github Actions output volledig te lezen. Hiervoor hoef je dus geen toegang te hebben tot de logs in Vercel.
Kom je er toch niet uit en wil je graag inzage in de logs? Stuur dan een berichtje in [#nl-design-system-developers](https://codefornl.slack.com/archives/C01DAT4TRPF) en dan zullen de juiste kernteamleden antwoord geven.
