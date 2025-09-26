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

NL Design System maakt gebruik van Vercel voor het hosten van diverse projecten.

## Feature branch deployments

Je hebt hard gewerkt aan een nieuwe feature en wil die graag laten zien. Ook is het erg handig wanneer een Pull Request reviewer niet persé de branch hoeft uit te checken en het systeem zelf hoeft te draaien om de wijzigingen terug te zien.

Hiervoor maakt NL Design System gebruik van [feature branch (preview) deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production).
NL Design System maakt gebruik van Branch-specific URLs, niet van Commit-specific URLs.

Voor elke branch die je aanmaakt wordt dus een URL beschikbaar gemaakt, zodra je bij deze branch een PR opent. De URL van de branch wordt via een commentaar aan de PR toegevoegd.

## Veelvoorkomende vragen

Het komt vaak voor dat er iets fout gaat in de Github Actions pipelines, maar dat de onderliggende fout niet zichtbaar is omdat het in Vercel afspeelt.
Wat vaak aan de hand is dat de Node versie van het project is geüpdatet naar een nieuwere versie, maar bij de Vercel configuratie nog niet. Dit kan opgelost worden door de versie te updaten via Terraform.
