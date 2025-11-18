---
title: Component ontbreekt in voorbeeld-thema · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Component ontbreekt in voorbeeld-thema
pagination_label: Component ontbreekt in voorbeeld-thema
description: NL Design System - Component ontbreekt in voorbeeld-thema
---

# Help mijn component zit niet in het voorbeeld-thema

Wat gaaf, je hebt een component gevonden die nog niet in het voorbeeld-thema verwerkt is!
Er zijn meerdere stappen mogelijk om dit op te lossen.

## 1. Tijdelijke oplossing: tokens lokaal overschrijven

_Gebruik deze optie als je direct verder wilt, zonder te wachten op de permanente oplossing._

Je kunt de ontbrekende tokens lokaal overschrijven met de waarden die je nodig hebt:

```css
.voorbeeld-theme {
  --ams-breadcrumb-separator-block-size: 1ex;
  --ams-breadcrumb-separator-inline-size: 1ex;
}
```

Hiermee kun je meteen verder ontwikkelen in je eigen project.

Wil je dat de wijziging structureel beschikbaar wordt voor iedereen?
Volg dan de permanente oplossing hieronder.

## 2. Permanente oplossing: component toevoegen aan het voorbeeld-thema

_Gebruik deze optie wanneer je de wijziging onderdeel wilt maken van het officiële voorbeeld-thema._

Deze wijzigingen worden gedaan in de [themes-repository](https://github.com/nl-design-system/themes).

### 2.1. Maak een issue aan

Maak altijd eerst een [issue](https://github.com/nl-design-system/themes/issues) aan.
Hiermee maak je inzichtelijk waarom de wijziging nodig is en voorkom je dat anderen hetzelfde werk doen.
Elk issue krijgt automatisch een nummer, die kan later van pas komen.

### 2.2. Pas de tokens aan in het voorbeeld-thema

De tokens van het voorbeeld-thema vind je hier: [themes/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json](https://github.com/nl-design-system/themes/blob/main/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json).

### 2.3. Maak een pull request aan

Maak vervolgens een pull request aan en deel deze in het #nl-design-system-developers kanaal op [Slack](/slack) zodat het team en andere contributors kunnen meekijken. Het issuenummer kun je in de beschrijving van de pullrequest noemen, zodat deze automatisch gesloten wordt, bijvoorbeeld; `closes #2718`.

## Meer hulp nodig?

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour).
- Neem contact op via [Slack](/slack).
- Stuur een e-mail naar [info@nldesignsystem.nl](mailto:info@nldesignsystem.nl)
