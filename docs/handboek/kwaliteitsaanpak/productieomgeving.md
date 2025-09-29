---
title: Productieomgeving
hide_title: true
hide_table_of_contents: false
sidebar_label: Productieomgeving
pagination_label: Productieomgeving
description: Uitleg over de versiebeheer van code in NL Design System
keywords:
  - prod
  - production
  - productie
---

# Productieomgeving

Gebruik GitHub Actions om deployments te doen naar productie-omgeving. Doe "continuous delivery" op basis van de laatste versie in de `main` branch: wanneer de wijziging akkoord is met de reviewers die verplicht zijn voor de `main` branch, dan kan daarna automatisch een deployment gestart worden.

Er is geen acceptatie-omgeving, en geen `develop` branch.

Gebruik Plesk hosting van ICTU voor de productieomgeving van websites zoals `nldesignsystem.nl` en `gebruikersonderzoeken.nl`, zodat ze kunnen voldoen aan de niet-functionele eisen van Ministerie van Binnenlandse zaken zoals DNSSEC. Gebruik een deployment naar de `gh-pages` branch voor het opslaan van de build, en koppel de GitHub repository met een WebHook aan de Plesk hosting om automatische deployments van de `gh-pages` branch uit te voeren. Deployment via de `gh-pages` branch heeft niet de voorkeur omdat het clonen van de Git repository sneller gaat als die alleen maar broncode bevat, maar voor Plesk hosting bij ICTU is dit de enige manier om continuous delivery te realiseren.

Gebruik GitHub Pages voor de productieomgeving van developer-documentatie van teams in de community (zoals Storybook of Docusaurus), tenzij de teams een eigen productieomgeving hebben. Er is op dit moment nog geen aanleiding om ook DNSSEC te vereisen voor deze webpagina's, waardoor GitHub Pages vooralsnog geschikt lijkt. Gebruik de [`actions/deploy-pages` GitHub Action](http://github.com/actions/deploy-pages) voor deployment naar GitHub Pages.
