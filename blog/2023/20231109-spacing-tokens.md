---
title: "Spacing tokens als systeem voor verticale ruimte"
slug: spacing-tokens
authors:
  - name: Hidde de Vries
    title: Public relations & Toegankelijkheidsspecialist NL Design System
    url: https://www.linkedin.com/in/hiddedevries/
tags: [NL Design System, design tokens]
hide_table_of_contents: false
date: 2023-11-09
---

Vorige week kwamen designers van Gemeente Utrecht, Gemeente Den Haag en OpenGemeenten bij elkaar om te spreken over design tokens voor spacing: de ruimte tussen de verschillende componenten. Designer Jeroen du Chatinier van de Gemeente Utrecht vertelde erover in de Design Open Hour.

<!-- truncate -->

De belangrijkste reden voor deze samenkomst: op dit moment zijn er nog geen afspraken over de verticale ruimte tussen componenten. Dat zit gebruikersvriendelijkheid in de weg, doordat er onvoldoende relatie en hiërarchie tussen componenten bestaat.

De designers + enkele leden uit het kernteam (Rozerin, René, Martijn, Jeroen, Jeffrey, Yolijn en Robbert) kwamen bij elkaar om samen te werken aan twee doelen:

- een systeem voor verticale paddings en/of margins dat intuïtief en logisch is (met design tokens voor implementatie en documentatie)
- richtlijnen voor het gebruik van paddings en margins (waarin redeneringen en werking worden uitgelegd)

## Relaties versus afstanden

Tijdens de workshop werden verschillende relaties tussen componenten bedacht: “vrienden” staan dicht bij elkaar, “besties” heel dicht en “kennissen” nemen wat meer afstand. Elk van deze relaties krijgt een bepaalde waarde, bijvoorbeeld:

```yaml
onbekenden: 32px
kennissen: 24px
vrienden: 16px
besties: 8px
```

Natuurlijk hoeven de waarden niet in pixels te worden uitgedrukt. Het kunnen bijvoorbeeld ook relatieve waarden zijn, en die kunnen ook nog eens per viewport verschillen.

Het idee is dat de waarden instelbaar zijn met design tokens. Design systems kunnen hierin dus zelf een keuze maken. Of meerdere keuzes. Misschien is de afstand tussen “vrienden” bijvoorbeeld net anders in een Mijn Zaken-systeem dan in een contentwebsite. Het ene scherm is “information-dense”, met bijvoorbeeld veel tabellen, terwijl bij het andere leesbaarheid van tekst belangrijk is. Waarden van de design tokens kunnen per geval anders worden ingesteld.

## Open vragen

In deze eerste sessie is al veel denkwerk verricht, liet Jeroen zien. In een spreadsheet had de groep al relaties uitgewerkt tussen een groot aantal componenten.

Er zijn ook nog wel wat open vragen:

- Hoeveel relaties zijn voldoende om de meeste scenario's af te dekken? Is er nog een relatie nodig na 'Onbekenden'?
- Hoe kan dit worden uitgewerkt in de front-end? (Er waren al wat eerste ideeën, door aanwezigheid van developers Yolijn en Robbert)
- Hoe zit het met verticale ruimte binnen componenten?
- Er zijn allerlei componenten waar de waarden op elkaar lijken, zoals buttons en links; kunnen we hier een groepering in aanbrengen?
- Hoe zou je deze spacing als designer willen toepassen in een ontwerptool als Figma? Als “spacer-blokje”? Met behulp van variabele? Wil je dit überhaupt wel allemaal in Figma doorvoeren?

Nog een hoop om over na te denken! Mocht je dit lezen en voor je eigen design system ook bezig zijn met spacing tokens, laat het ons weten! Bijvoorbeeld in het `#nl-design-system-designers`-kanaal in de [Code for NL Slack community](https://praatmee.codefor.nl/).

## Vervolg

We zijn bovenstaand systeem aan het uittesten in Figma, om te kijken hoe het in de praktijk werkt. Dat willen we ook gaan doen voor bijvoorbeeld formulier- en contentpagina's: _the proof of the pudding is in the eating_.

Ook gaan we verder met bijvoorbeeld bovenstaande vragen. Heb je vragen of ideeën, de designers zitten op [Slack](https://praatmee.codefor.nl/) (kanaal: `#nl-design-system-designers`), daar kun je je ook melden voor de tweewekelijkse Design Open Hour, voor ontwerpers bij de overheid.
