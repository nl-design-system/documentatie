---
title: Versiebeheer in Figma
hide_title: true
hide_table_of_contents: true
sidebar_label: Versiebeheer
pagination_label: Versiebeheer
description: Versiebeheer in Figma
keywords:
  - designer
  - figma
  - version control
---

# Versiebeheer

Juiste naamgeving in de versie geschiedenis helpt bij het bijhouden van wijzigingen.

![Overzicht versiegeschiedenis](https://user-images.githubusercontent.com/248921/140959456-8c2699e7-8641-4fcd-a2e8-da24664ffcc1.png)

## Wanneer op te slaan in de versie geschiedenis

Figma slaat bestanden regelmatig automatisch op. Het is ook mogelijk om expliciet op te slaan in Figma's versie geschiedenis. Dit stelt je in staat om belangrijke wijzigingen bij te houden en maakt het gemakkelijk om de geschiedenis van een bestand te bekijken en terug te gaan naar een vorige versie wanneer dat nodig is.

Belangrijke wijzigingen (vooral ‘breaking changes’ aan componenten) kunnen ook buiten Figma worden gecommuniceerd, bijvoorbeeld op het [NL Design System Figma subchannel](https://codefornl.slack.com/archives/C025HM8V362).

Iedere keer dat je een belangrijke wijziging aanbrengt in een Figma bestand dient je dit op te slaan in de versie geschiedenis met een duidelijke beschrijving van de wijziging(en). Om expliciet op te slaan in Figma's versie geschiedenis gebruik je `File → Save to Version History` of de sneltoetsen `⌥ ⌘ S` (MacOS)/`Control + Command + S` (Windows).

Je kan een beschrijvende titel en meer gedetailleerde informatie in het tekstveld toevoegen.

![Figma’s Save to Version History prompt](https://user-images.githubusercontent.com/248921/145390374-ce719f7b-6787-469a-b1ad-a6389a0b3748.png)

### Emoji’s gebruiken als hulpmiddel

Om snel veranderingen aan een bestand of component te scannen kan je gebruik maken van emoji's in de beschrijving, [vergelijkbaar met gitmoji](https://gitmoji.dev/).

Enkele emoji's die de verandering duidelijk beschrijven zijn:

- 🆕 geeft aan dat het component nieuw is
- 🐛 een bugfix
- 💥 bij het introduceren van een ‘breaking change’ (het component zal niet meer op dezelfde manier werken als voorheen)
- 💄 om aan te geven dat een stijl is gewijzigd of bijgewerkt
- 🩹 voor een eenvoudige fix
- 🧹 om een schoonmaak aan te geven (bijvoorbeeld het terugbrengen van layer nesting, optimaliseren van naamgeving)
- ♿️ een verbetering aan de toegankelijkheid
- 🚸 verbetering van gebruiksvriendelijkheid
- 📱 werk aan responsiveness
- 💫 wijzigingen aan animatie specificaties
- 💀 om een component uit te faseren
- 🚧 component is in ontwikkeling
- ✏️ correctie van een typfout
- ⏪️ een vorige wijziging terugdraaien
