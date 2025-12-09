---
title: Component ontbreekt in thema · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Component ontbreekt in thema
pagination_label: Component ontbreekt in thema
description: NL Design System - Component ontbreekt in voorbeeld-thema
---

# Het component die ik wil gebruiken zit niet in het thema dat ik gebruik

Wat gaaf, je hebt een component gevonden die nog niet in het thema verwerkt is!
Er zijn meerdere stappen mogelijk om dit op te lossen.

## 1. Praat met de designer

Heb je al een designer in je team? Fijn, dan is dit jouw eerste aanspreekpunt.

Mocht je niet direct een designer aan kunnen spreken binnen jouw organisatie dan is het mogelijk om zelf aan de slag te gaan aan de hand van de [design tokens](/handboek/huisstijl/design-tokens/) documentatie voor designers en de uitleg in stap 3.

## 2. Tijdelijke oplossing: tokens lokaal overschrijven

_Gebruik deze optie als je direct verder wilt, zonder te wachten op de permanente oplossing._

Je kunt de ontbrekende tokens lokaal overschrijven met de waarden die je nodig hebt:

```css
.voorbeeld-theme {
  --ams-breadcrumb-separator-block-size: var(--basis-size-sm);
  --ams-breadcrumb-separator-inline-size: var(--basis-size-sm);
  // ... overige token overschrijvingen
}
```

Dit codevoorbeeld gebruikt `.voorbeeld-theme` als classname, omdat het voorbeeld project [voorbeeld thema](/handboek/huisstijl/themas/voorbeeld-thema) gebruikt als thema. Waarschijnlijk gebruik je een ander thema en kun je de classname van jouw thema gebruiken om de wijzigingen door te voeren.

Door deze wijzigingen kun je meteen verder ontwikkelen in je eigen project.

Wil je dat de wijziging structureel beschikbaar wordt voor iedereen?
Volg dan de permanente oplossing hieronder.

## 3. Permanente oplossing: component toevoegen aan het voorbeeld-thema

:::info
In deze stap wordt gesproken over het voorbeeld thema en de themes github repository. Als je een ander thema gebruikt dan moet je de issue aanmaken bij dat thema.
:::

_Gebruik deze optie wanneer je de wijziging onderdeel wilt maken van het officiële voorbeeld-thema._

Deze wijzigingen worden gedaan in de [themes-repository](https://github.com/nl-design-system/themes).

### 3.1. Maak een issue aan

Maak altijd eerst een [issue](https://github.com/nl-design-system/themes/issues) aan.
Hiermee maak je inzichtelijk waarom de wijziging nodig is en voorkom je dat anderen hetzelfde werk doen.
Elk issue krijgt automatisch een nummer, handig om die later te gebruiken bij het maken van de pull-request om de issue automatisch weer te sluiten.

### 3.2. Pas de tokens aan in het thema

De tokens van het voorbeeld-thema vind je hier: [themes/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json](https://github.com/nl-design-system/themes/blob/main/packages/voorbeeld-design-tokens/figma/voorbeeld.tokens.json).

### 3.3. Maak een pull request aan

Maak vervolgens een pull request aan en deel deze in het #nl-design-system-developers kanaal op [Slack](/slack) zodat het team en andere contributors kunnen meekijken. Het issuenummer kun je in de beschrijving van de pullrequest noemen, zodat deze automatisch gesloten wordt, bijvoorbeeld; `closes #2718`.

## Meer hulp nodig?

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour).
- Neem contact op via [Slack](/slack).
- Stuur een e-mail naar [info@nldesignsystem.nl](mailto:info@nldesignsystem.nl)
