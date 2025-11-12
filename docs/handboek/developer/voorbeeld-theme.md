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

## Hoe nu verder

Waarschijnlijk ben je allereerst op zoek naar een oplossing waarmee je direct verder kunt en niet hoeft te wachten op de permanente oplossing.
Als eerste kun je de tokens overschrijven met de waarden die je graag toegepast ziet.

```css
.voorbeeld-theme {
  --ams-breadcrumb-separator-block-size: 1ex;
  --ams-breadcrumb-separator-inline-size: 1ex;
}
```

Daarna is het fijn om de component aan te kunnen passen via het voorbeeld-thema. Hiervoor wordt in de volgende stap uitgelegd hoe je dat kan doen.

## De aanpassing doorvoeren bij het voorbeeld-thema

Om de oplossing door te voeren moet je een aanpassing maken op de [themes repository](https://github.com/nl-design-system/themes/tree/main/packages/voorbeeld-design-tokens).

## Meer hulp nodig?

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour)
- Stuur ons een berichtje op [Slack](/slack)
- Stuur een mailtje naar info@nldesignsystem.nl
