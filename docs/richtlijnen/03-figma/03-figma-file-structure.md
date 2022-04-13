---
title: Bestandsstructuur in Figma
hide_title: true
hide_table_of_contents: true
sidebar_label: Bestandsstructuur
pagination_label: Bestandsstructuur
description: NL Design System bestandsstructuur in Figma
keywords:
  - designer
  - figma
  - bestandsstructuur
---

# Bestandsstructuur in Figma

Een goede bestandsstructuur helpt bij het scannen en navigeren door Figma bestanden. Sectie-indeling (zoals componentgroepen, componenten, componentspecificaties of voorbeelden) helpt om snel naar deze secties te navigeren.

Met de sneltoetsen `1` en `2` kan snel worden ingezoomd op respectievelijk de hele pagina of een selectie.

Met juiste secties en lagen, kan je makkelijk inzoomen op een sectie of layer door deze te selecteren in het layer paneel en in te zoomen door op `2` te drukken. Terug zoomen naar de pagina of 100% van de huidige weergave kan door respectievelijk op `1` en `0` te drukken.

## Groeperen

Groeperen in Figma wordt gedaan door ofwel een groep of een frame te maken. Frames bieden hierbij de meeste flexibiliteit.

[Componenten kunnen worden beschouwd als een vorm van groepering](05-figma-components.md).

### Groups

Groups groeperen eenvoudigweg meerdere objecten samen. Door de grootte van een group te wijzigen, worden de objecten die het bevat mee geschaald.

Eigenschappen die op een groep kunnen worden ingesteld zijn positie, dimensie, blending mode en opacity. Fill, stroke en effecten hebben invloed op alle objecten in een groep.

### Frames

Het veranderen van de grootte van een frame zorgt ervoor dat objecten binnen het frame reageren op hun individuele ‘constraints’. Objecten kunnen op een vaste positie worden gezet, of zo worden ingesteld dat ze de breedte en/of hoogte van het parent frame vullen.

Een ander voordeel van frames is dat je vaak geen genest vector-object nodig hebt om een element te maken; d.w.z. eigenschappen voor een knop zoals achtergrond of rand-radius, breedte en kleur kunnen direct op het frame zelf worden ingesteld. Hiervoor is geen achtergrond vector nodig en komt daardoor overeen met hoe dit in de front-end code geimplementeerd wordt.

Auto layout kan alleen op frames toegepast worden. Auto-layout toepassen op een group zal deze automatisch omzetten in een frame.

## Emojis helpen snel visueel scannen

Emojis in de naamgeving van pagina's en layers helpen om snel te scannen of om snel een status te controleren.

![Emojis in pagina en component namen](https://user-images.githubusercontent.com/248921/140959174-76e45980-73df-43c1-b918-f6cd14af3a29.png)

## Nesting

Vermijd onnodig ‘nesting’ in mappen, maar gebruik nesting wel om verwante elementen opzettelijk te groeperen.

![Voorbeelden van onopzettelijke en opzettelijke nesting](https://user-images.githubusercontent.com/248921/140959366-05df035f-3255-4346-8c65-f06056b241f0.png)
