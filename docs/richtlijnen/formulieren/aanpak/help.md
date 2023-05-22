---
title: Hulp en ondersteuning
hide_title: true
hide_table_of_contents: false
sidebar_label: Hulp en ondersteuning
sidebar_position: 5
pagination_label: Formulieren - Hulp en ondersteuning
description: Richtlijnen voor formulieren - Hulp en ondersteuning.
keywords:
  - formulieren
  - hulp
  - ondersteuning
---

<!-- @license CC0-1.0 -->

# Richtlijnen voor formulieren: Hulp en ondersteuning

_Status: **In ontwikkeling**_

## Biedt bij moeilijke vragen extra uitleg of voorzie deze van voorbeelden

Optionele help tekst kan als alternatief voor placeholder tekst gebruikt worden bij invoerelementen die verduidelijkt dienen te worden.

Overweeg om extra help tekst toe te voegen wanneer:

- Je van de gebruiker informatie in bepaald formaat wenst (bijvoorbeeld de landcode voor een telefoonnummer),
- Je een gebruiker vraagt om minder bekende informatie (bijvoorbeeld een paspoortnummer en waar deze te vinden is),
- Een gebruiker zich af zou kunnen vragen waarom om specifieke informatie gevraagd wordt,
- Een gebruiker mogelijk bezorgd kan zijn over de veiligheid of privacy van bepaalde gegevens.

De beste positie voor help tekst is na de vraag en voor het invoerelement. [^helper-text-position]

![Voorbeeld van helper tekst positie van het No Style design system](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_142423723.png)

Voorbeeld 1 van helper tekst geplaatst ná de vraag en voor het invoerelement. [^no-style-helper-text]

![Voorbeeld van helper tekst positie van het W3C design system](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_142424548.png)

Voorbeeld 2 van helper tekst geplaatst ná de vraag en voor het invoerelement. [^helper-text-position]

### Placeholder tekst

Door de negatieve gevolgen van het gebruik van placeholder tekst op toegankelijkheid zou placeholder tekst vermeden dienen te worden. Placeholder tekst kan o.a. aangezien worden voor reeds ingevoerde tekst en de tekst verdwijnt zodra focus op het invoerveld komt te staan waardoor waardevolle informatie niet zichtbaar is juist op het moment dat dit nodig is.

Gebruik in plaats van placeholder tekst help tekst.

### Help tekst op aanvraag

Help tekst kan eventueel standaard verborgen worden en alleen wanneer nodig door een gebruiker getoond worden. Hiervoor kan een help (i) button gebruikt worden.

Probeer echter altijd standaard help tekst te tonen en denk goed na waarom je de helper tekst zou willen verbergen.

Adobe Spectrum’s richtlijnen zeggen hier het volgende over:

_“Don't use tooltips to communicate crucial information_

_Show crucial information at all times, not just when a tooltip is displayed. A tooltip should only be used to provide supplementary context or hints to the message shown in help text._

_For example, in a scenario where a user is entering their password into a field, the crucial information would be to state the password requirements. Supplementary context would be a message about how to get help if they have forgotten their password.”_ [^spectrum-tooltips]

![spectrum adobe com_page_tooltip_](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_142426915.png)

_‘Dos en dont’s’_ van Adobe Spectrum over het gebruik van welk soort informatie wel en welke niet verborgen kan worden. [^spectrum-tooltips]

#### Standaard staat

![Voorbeeld van de standaard staat van help tekst op aanvraag](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_APvKjcc.png)

In de standaard staat is de tekst verborgen.

#### Hover en focus staat

![Voorbeeld van de hover en focus staat van help tekst op aanvraag](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_y2Ah2qK.png)

In de hover en focus staat wordt de helptekst onder het invoerelement getoond. Voor gebruikers van touch screens dient deze informatie ook ontsloten te worden!

Bij het verleggen van de focus of het verlaten van de muiscursor van het icoon wordt de standaard staat weer getoond.

### Feedback tekst

Feedback tekst kan na validatie aangeven wanneer een veld onjuist is ingevuld hoe deze fout te corrigeren is.

De beste positie voor feedback tekst is onder het invoerelement dat de feedback genereert. De relatie tussen foutmelding en het invoerelement dat de feedback genereert moet zowel visueel als voor voorleessoftware een directe relatie hebben.

![Voorbeeld van een datum invoer van GOV.UK met een foutmelding](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_help_142428309.png)

Voorbeeld van GOV.UK waarbij de foutmelding een duidelijke relatie heeft met de invoer die de fout genereerd. [^gov.uk-error-message-date]

Raadpleeg voor uitgebreide informatie over feedback tekst het feedback text component.

## Geef een voorbeeld als een bepaalde vorm vereist is

Als een bepaald formaat van invoer nodig is, b.v. telefoonnummer, geef dit dan middels help tekst aan. Wees bij het valideren waar mogelijk vergevingsgezind en accepteer meerdere formaten. Zie de validatie richtlijnen voor meer informatie hierover.

## Zorg voor de mogelijkheid om tussentijds te stoppen en later verder te gaan

## Zorg dat een gebruiker ten alle tijden contact op kan nemen

Mocht een gebruiker niet uit het formulier komen, zorg dan dat zij met jouw organisatie contact op kan nemen.

Dit kan door het aanbieden van bijvoorbeeld een e-mailadres, telefoonnummer, chatbot of een link naar het Twitter of Facebook account.

## Referenties

[^helper-text-position]: [W3C Design System: Forms - Dealing with text](https://design-system.w3.org/styles/forms.html#dealing-with-text)
[^no-style-helper-text]: [No Style Design System: Examples - Registration form](https://nostyle.herokuapp.com/examples)
[^spectrum-tooltips]: [Adobe Spectrum: Components - Tooltip](https://spectrum.adobe.com/page/tooltip/#Dont-use-tooltips-to-communicate-crucial-information)
[^gov.uk-error-message-date]: [GOV.UK Design System: Components - Error message](https://design-system.service.gov.uk/components/error-message/)
