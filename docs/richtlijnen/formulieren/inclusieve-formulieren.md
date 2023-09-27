---
title: Inclusieve formulieren
hide_title: true
hide_table_of_contents: false
sidebar_label: Inclusieve formulieren
sidebar_position: 1
pagination_label: Inclusieve formulieren
description: Richtlijnen voor formulieren - Inclusie en toegankelijkheid
keywords:
  - formulieren
  - inclusie
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Inclusieve formulieren

_Status: **In ontwikkeling**_

Niemand heeft dezelfde digitale vaardigheden en voorkennis. Hou hiermee rekening bij het ontwikkelen van formulieren. Houdt rekening met gebruikers met een verschillende (culturele) achtergrond, laaggeletterden en mensen met een cognitieve, visuele of motorische beperking.

## Taal en taalgebruik

Veel formulieren zijn lastig te begrijpen en in te vullen, zeker voor mensen die minder taalvaardig zijn of een andere cognitieve beperking hebben.

Voor het juiste taalgebruik zijn de Taal en taalgebruik richtlijnen te gebruiken.

## Gender inclusiviteit

Vraag alleen noodzakelijke persoonlijke gegevens en vermijd onnodige vragen over geslacht. Indien je echt om een geslacht moet vragen, zorg dan tevens voor een derde, neutrale optie. Op advies van o.a. transgender netwerk TNN, kan hiervoor het tekstlabel ‘Niet relevant’ gebruikt worden.
[^1]
[^2]

Er is een verschil tussen de begrippen ‘gender’ en ‘sekse. Deze worden vaak door elkaar gebruikt, maar dat kan niet in elke context. [Raadpleeg de website van Genootschap Onze Taal voor adviezen](https://onzetaal.nl/taaladvies/sekse-geslacht-en-gender). [^onze-taal-sekse-gender-geslacht]

Het GOV.UK Design System zegt het volgende hierover:
“If you do need to ask, use ‘sex’ when you need biological data (for example, if you’re providing a medical service). In all other cases, use ‘gender’” [^gov.uk-gender-sex]

## Toegankelijkheidseisen

Formulierelementen moeten aan de volgende eisen voldoen, ze hebben:

- Een label of instructie die is gekoppeld aan het invoerelement,
- Bij een fout een duidelijke foutmelding gekoppeld aan het invoerelement (zowel visueel maar zorg tevens dat de foutmelding op het juiste moment en op de juiste manier door voorleessoftware wordt uitgesproken),
- Bij een foutmelding moet duidelijk worden uitgelegd hoe deze fout kan worden verholpen en deze in de toekomst kan worden voorkomen.

![Voorbeeld van een foutmelding in land selectie op GOV.UK](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_inclusie-en-toegankelijkheid_142022481.png)

![Voorbeeld van een foutmelding in datum selectie op GOV.UK](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_inclusie-en-toegankelijkheid_142023371.png)

Voorbeelden van GOV.UK van foutmelding én visuele indicatie op welk element deze van toepassing zijn.

### Tekstlabels

Een goed label is buiten een invoerveld geplaatst, niet daarbinnen (de zg. ‘floating labels’). Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoont. Een label dat in een invoerveld is geplaatst, kan een gebruiker in verwarring brengen, aangezien het voor reeds ingevoerde tekst aangezien kan worden. Het kan ook verward worden met inactieve of placeholder tekst.

Een bijkomend voordeel van het plaatsen van een label buiten het invoerveld is dat dit het klik- en tap-oppervlakte automatisch vergroot, waardoor het selecteren van een formulierelement voor zowel muis- als touchscreen gebruikers makkelijker is.

## Referenties

[^1]: [Gemeente Den Haag: Terugdringen van onnodige vragen naar sekse](https://www.denhaag.nl/nl/bestuur-en-organisatie/contact-met-de-gemeente/terugdringen-van-onnodige-vragen-naar-sekse.htm)
[^2]: [Rijksoverheid: Onnodige sekseregistratie verder teruggedrongen](https://www.rijksoverheid.nl/actueel/nieuws/2019/04/01/onnodige-sekseregistratie-verder-teruggedrongen)
[^onze-taal-sekse-gender-geslacht]: [Genootschap Onze Taal: Taaladviezen - Sekse, geslacht en gender](https://onzetaal.nl/taaladvies/sekse-geslacht-en-gender)
[^gov.uk-gender-sex]: [GOV.UK Design System: Patterns - Asking for gender or sex](https://design-system.service.gov.uk/patterns/gender-or-sex/)
