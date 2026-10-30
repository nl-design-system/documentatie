# Mini-testplan regressie toegankelijkheid

Dit testplan bevat de toegankelijkheidschecks die horen bij de inhoud of de functionaliteit van één pagina. Checks voor onderdelen die de hele site deelt, staan er bewust niet in. Je kunt de checks opnieuw gebruiken bij elke wijziging van de site.

## 1. Home

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                   | WCAG                       | Methode   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------- |
| Elke logolink onder “Wie doen er al mee?” heeft een naam die de organisatie noemt en zegt waar de link heen gaat. Die naam past bij het echte doel, bijvoorbeeld bij de logolink van Logius en de repository die daarmee opent.                                         | 1.1.1, 2.4.4               | Handmatig |
| De koppenstructuur volgt de zichtbare secties. “Waar begin je?” groepeert de onboardingvideo en de 4 rolkaarten. De deelnemerskaarten voegen geen koppen zonder tekst toe.                                                                                              | 1.3.1, 2.4.6               | Handmatig |
| De video van de onboardingsessie en de nieuwste Heartbeat-video hebben correcte ondertiteling. Waar het beeld informatie geeft die niet in de audio zit, hebben ze audiodescriptie of een media-alternatief. Ze bevatten niets dat vaker dan 3 keer per seconde flitst. | 1.2.2, 1.2.3, 1.2.5, 2.3.2 | Handmatig |

### Unieke functionaliteit

| Check                                                                                                                                                                                      | WCAG         | Methode     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------- |
| Beide afspeelknoppen van de video's werken. Als je een knop met het toetsenbord activeert, vervangt een speler de preview. De focus komt in de speler of op een bedieningselement ernaast. | 2.1.1, 4.1.2 | Met script  |
| De naam van elke afspeelknop noemt de eigen video, zodat je de 2 knoppen uit elkaar houdt.                                                                                                 | 2.4.4, 4.1.2 | Automatisch |

## 2. Sitemap

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/sitemap/>

### Unieke inhoud

| Check                                                                                                                                                                                                                             | WCAG         | Methode                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------- |
| De items voor de Engelstalige eventpagina's zijn als Engels gemarkeerd: “English”, “Program”, “Timetable”, “Videos of Design Systems Week …”, “Previous editions” en “Global design systems”. De Nederlandse items zijn dat niet. | 3.1.2        | Automatisch + handmatig |
| Herhaalde linkteksten, zoals “Aanmelden”, “Video” en “Code”, blijven genest onder een bovenliggend item. De tekst van dat item geeft elke link zijn doel.                                                                         | 1.3.1, 2.4.4 | Automatisch + handmatig |
| De hiërarchie van de site komt over via geneste lijsten, niet alleen via inspringen.                                                                                                                                              | 1.3.1        | Automatisch             |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 3. Design Systems Week 2026: Tijdschema

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/events/design-systems-week-2026/tijdschema/>

### Unieke inhoud

| Check                                                                                                                                                                                                  | WCAG         | Methode                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------- |
| In elke dagtabel beschrijven de kolomkoppen Tijd, Taal, Spreker, Onderwerp en Agenda de gegevens in hun kolom. Elke tabel is te herkennen aan de dag.                                                  | 1.3.1, 2.4.6 | Handmatig               |
| Bepaal welke sessietitels echt in een andere taal zijn. Leid dat niet af uit de kolom Taal: voor eigennamen en vaktermen kan een uitzondering gelden. Die titels hebben de bijbehorende taalmarkering. | 3.1.2        | Automatisch + handmatig |

### Unieke functionaliteit

| Check                                                                                                                                                           | WCAG         | Methode     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| Elke downloadlink Agenda (.ics) heeft een toegankelijke naam die niet leeg is. Die naam is uniek tussen de downloadlinks op de pagina en noemt de eigen sessie. | 4.1.2, 2.4.4 | Automatisch |
| De id's waarmee die linknamen worden opgebouwd, zijn uniek op de pagina.                                                                                        | 4.1.2        | Automatisch |

## 4. Community

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/community/>

### Unieke inhoud

| Check                                                                                                | WCAG  | Methode                 |
| ---------------------------------------------------------------------------------------------------- | ----- | ----------------------- |
| De kaart “Global design systems” heeft een Engelse kop en beschrijving, en is als Engels gemarkeerd. | 3.1.2 | Automatisch + handmatig |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 5. Componenten (overzicht)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/componenten/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                   | WCAG         | Methode   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------- |
| In elke componentkaart is de schets verborgen als decoratie, of beschreven door het bijschrift “Schets van de … component”. Er is geen lege of dubbele aankondiging. Ook als het bijschrift vóór de kop van de kaart wordt voorgelezen, is het logisch. | 1.1.1, 1.3.2 | Handmatig |

### Unieke functionaliteit

| Check                                                                                                                                                                                                                                                                                                                                                                                                                                   | WCAG                       | Methode     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| De 2 filtergroepen “Status” en “Implementatie” in het ingeklapte paneel “Filter componenten” hebben elk een eigen groepsnaam en werken met het toetsenbord. Als je filters combineert of reset, wordt de wijziging van het aantal aangekondigd als statusbericht, zonder dat de focus verplaatst. Het aantal klopt met de zichtbare items. Een combinatie zonder resultaten toont een zichtbare lege staat, die ook wordt aangekondigd. | 1.3.1, 2.1.1, 2.1.3, 4.1.3 | Met script  |
| Elke filtercheckbox heeft een eigen label en een eigen id.                                                                                                                                                                                                                                                                                                                                                                              | 1.3.1, 4.1.2               | Automatisch |
| Als je één filtercheckbox activeert, verandert alleen die checkbox.                                                                                                                                                                                                                                                                                                                                                                     | 4.1.2                      | Met script  |
| De links “Bekijk alle … componenten” op de pagina Estafettemodel openen deze pagina met een filter in de URL. Dan is de aangevinkte staat van elke checkbox beschikbaar voor hulpsoftware en klopt die met wat je ziet. De getoonde items en het aantal passen bij het filter.                                                                                                                                                          | 4.1.2                      | Met script  |

## 6. Button (componentpagina)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/button/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                  | WCAG         | Methode     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| De tabel met design tokens, met de kolommen “name” en “type”, is te herkennen als de tokentabel van Button. De kolomkoppen beschrijven de gegevens in de kolom.                                                                        | 1.3.1, 2.4.6 | Handmatig   |
| Bij elke link naar een succescriterium, zoals “WCAG 1.1.1”, bevat de toegankelijke naam de zichtbare tekst “WCAG x.x.x” in dezelfde volgorde. Extra tekst in de toegankelijke naam mag, zolang het zichtbare label er deel van blijft. | 2.5.3, 4.1.2 | Automatisch |
| Bij elke link van dit soort is het nummer van het criterium hetzelfde in het zichtbare label, in de toegankelijke naam en op de pagina die opent.                                                                                      | 4.1.2        | Automatisch |
| Onder “Definition of Done” zijn de checklistitems in elke sectie gewone tekst in hun lijst. Alleen de 4 sectietitels zijn koppen: “Help Wanted”, “Community”, “Candidate” en “Hall of Fame”.                                           | 1.3.1        | Automatisch |
| Elke link in de panelen met acceptatiecriteria opent de pagina die de linktekst noemt.                                                                                                                                                 | 2.4.4        | Handmatig   |

### Unieke functionaliteit

| Check                                                                                                                                                        | WCAG         | Methode                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------- |
| De 2 filters voor acceptatiecriteria, “bij gebruik” en “van de component”, hebben elk een eigen groepsnaam die het filter beschrijft.                        | 1.3.1, 2.4.6 | Automatisch + handmatig |
| De wijziging van het aantal resultaten wordt per filter aangekondigd.                                                                                        | 4.1.3        | Met script              |
| Elke checkbox in beide filters heeft een eigen label en een eigen id. Een checkbox activeren in het ene filter verandert geen checkbox in het andere filter. | 1.3.1, 4.1.2 | Met script              |
| Elke verwijzing op de pagina naar een label of een beschrijving wijst naar een element dat bestaat.                                                          | 4.1.2        | Automatisch             |

## 7. Heartbeat video's

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/events/heartbeat/videos/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                      | WCAG                       | Methode                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ---------------------------- |
| De koppenstructuur maakt duidelijk uit welk jaar elke Heartbeat-video is. Het huidige jaar en de archiefjaren mogen verschillende kopniveaus hebben, als de hiërarchie logisch blijft en de inhoudsopgave dezelfde structuur toont.        | 1.3.1, 2.4.6               | Handmatig                    |
| Bij elke Heartbeat-video op de pagina verwijzen 3 dingen naar dezelfde Heartbeat-datum: de naam van de afspeelknop, de alt-tekst van de thumbnail als die niet leeg is, en de dichtstbijzijnde datumkop.                                   | 1.1.1, 2.4.6               | Automatisch + handmatig      |
| Elke nieuwe Heartbeat-video heeft correcte ondertiteling. Waar het beeld informatie geeft die niet in de audio zit, heeft de video audiodescriptie of een media-alternatief. De video bevat niets dat vaker dan 3 keer per seconde flitst. | 1.2.2, 1.2.3, 1.2.5, 2.3.2 | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

| Check                                                                                                                    | WCAG         | Methode     |
| ------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------- |
| Geen 2 afspeelknoppen op de pagina hebben dezelfde toegankelijke naam.                                                   | 2.4.4, 4.1.2 | Automatisch |
| Een steekproef van 3 afspeelknoppen uit verschillende delen van de pagina werkt met het toetsenbord en toont een speler. | 2.1.1, 4.1.2 | Met script  |

## 8. Kernteam

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/project/kernteam/>

### Unieke inhoud

| Check                                                                                                                              | WCAG  | Methode   |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| Elke link “Slack: @…” maakt samen met de zin en de kaart duidelijk dat de link het Slack-profiel van dat teamlid opent.            | 2.4.4 | Handmatig |
| Links met een domeinnaam als tekst, zoals “gebruikersonderzoeken.nl” en “nldesignsystem.nl”, gaan naar de site die de tekst noemt. | 2.4.4 | Handmatig |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 9. Zoeken

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/zoeken/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                              | WCAG         | Methode     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| In alle 3 de staten is er een kop van niveau 1 zodra de pagina de inhoud heeft geladen. De tekst van die kop is niet leeg. De 3 staten zijn: geen zoekopdracht, een zoekopdracht met resultaten en een zoekopdracht zonder resultaten.             | 1.3.1        | Automatisch |
| In de staat met resultaten zijn de categoriekoppen precies één niveau hoger dan de titels van de resultaten. Zo valt elk resultaat binnen de categorie, en staat het er niet naast.                                                                | 1.3.1        | Automatisch |
| In de staat met resultaten is elk resultaat één lijstitem met één link. De naam van die link is niet leeg en verschilt van de namen van de andere resultaten.                                                                                      | 2.4.4, 4.1.2 | Automatisch |
| In de staat met resultaten is het aantal resultaten beschikbaar als tekst, niet alleen als de lengte van een zichtbare lijst.                                                                                                                      | 1.3.1        | Automatisch |
| In de staat zonder resultaten verschijnt een melding die beschikbaar is voor hulpsoftware. Het gebied is dus niet gewoon leeg.                                                                                                                     | 1.3.1        | Automatisch |
| Het doel van het zoekveld blijft duidelijk als de placeholder verdwijnt tijdens het typen. De hoofdkop “Zoeken”, de instructie “Gebruik het zoekveld om te zoeken in nldesignsystem.nl” en de knop werken samen als zichtbaar label of instructie. | 3.3.2        | Handmatig   |

### Unieke functionaliteit

| Check                                                                                                                                                               | WCAG         | Methode    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Als je een zoekopdracht verstuurt, worden de resultaten vervangen zonder dat de focus naar de body van het document gaat. De zoekterm staat daarna nog in het veld. | 2.4.3, 4.1.2 | Met script |

## 10. Aanmelden als belangenorganisatie

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/community/belangenorganisaties/aanmelden/>

### Unieke inhoud

| Check                                                                                                                                                                                                           | WCAG         | Methode     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| De paginatitel zegt dat dit de aanmeldpagina voor belangenorganisaties is. Alleen de naam van de sectie is niet genoeg.                                                                                         | 2.4.2        | Handmatig   |
| Elk veld heeft een label dat eraan gekoppeld is, en elke hint is ook gekoppeld. Een veld dat in de praktijk verplicht is, zegt dat al vóór het versturen, en niet pas in de foutmelding.                        | 1.3.1, 3.3.2 | Automatisch |
| Elk veld geeft het invoerdoel aan dat past bij wat het vraagt: een veld voor een volledige naam, een veld voor een organisatienaam. Een veld waarvoor geen waarde van toepassing is, geeft geen invoerdoel aan. | 1.3.5        | Automatisch |
| Geen 2 elementen op de pagina hebben dezelfde id. Elke verwijzing naar een label of beschrijving wijst naar een element dat bestaat.                                                                            | 1.3.1, 4.1.2 | Automatisch |

### Unieke functionaliteit

| Check                                                                                                                                                                                                              | WCAG         | Methode     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------- |
| Als je een ongeldig e-mailadres invult en het veld verlaat, verschijnt een tekstmelding. Een kleurverandering alleen is niet genoeg. De melding is gekoppeld aan het veld, en het veld is gemarkeerd als ongeldig. | 3.3.1, 4.1.2 | Met script  |
| Als je een verplicht veld leeg laat, gebeurt hetzelfde: een tekstmelding die gekoppeld is aan het veld, en het veld is gemarkeerd als ongeldig.                                                                    | 3.3.1        | Met script  |
| Als je de waarde verbetert, verdwijnen de koppeling met de melding en de markering als ongeldig. Er blijft geen oude foutmelding achter.                                                                           | 3.3.1, 4.1.2 | Met script  |
| Een veld met een hint en een foutmelding houdt de hint. De foutmelding komt erbij en vervangt de hint niet.                                                                                                        | 1.3.1        | Met script  |
| Het verborgen spamveld blijft verborgen voor hulpsoftware en zit niet in de tabvolgorde.                                                                                                                           | 1.3.1, 4.1.2 | Automatisch |

## 11. Sluit je aan

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/community/sluit-je-aan/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                                                                                   | WCAG         | Methode                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------- |
| De groep “Waar wil je NL Design System voor gebruiken? (niet verplicht)” heeft een programmatische groepsnaam. De instructie “Meerdere antwoorden mogelijk.” is programmatisch beschikbaar bij de groep, en elke checkbox heeft een eigen label. Controleer met een screenreader of de samenhang te begrijpen is. De precieze formulering en volgorde liggen niet vast. | 1.3.1, 3.3.2 | Automatisch + handmatig |
| Bij het tekstvak “Aan wat voor projecten werk je? (niet verplicht)” is de hint “Denk aan mijn-omgevingen, formulieren en/of kaarten.” programmatisch gekoppeld.                                                                                                                                                                                                         | 1.3.1, 3.3.2 | Automatisch             |
| Bij de checkbox voor toestemming is de privacytekst gekoppeld vanaf het moment dat de pagina laadt. Niet pas als het veld als niet ingevuld is gemarkeerd.                                                                                                                                                                                                              | 1.3.1, 3.3.2 | Automatisch             |
| Elk veld heeft een gekoppeld label. Elk veld dat in de praktijk verplicht is, zegt dat al vóór het versturen.                                                                                                                                                                                                                                                           | 1.3.1, 3.3.2 | Automatisch             |
| Elk veld geeft het invoerdoel aan dat past bij wat het vraagt.                                                                                                                                                                                                                                                                                                          | 1.3.5        | Automatisch             |

### Unieke functionaliteit

| Check                                                                                                                                                                        | WCAG         | Methode    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Als je een ongeldig e-mailadres invult en het veld verlaat, verschijnt een tekstmelding die gekoppeld is aan het veld. Het veld is gemarkeerd als ongeldig.                  | 3.3.1, 4.1.2 | Met script |
| Als je een verplicht veld leeg laat, gebeurt hetzelfde. Als je de waarde verbetert, verdwijnen de koppeling met de melding en de markering als ongeldig.                     | 3.3.1, 4.1.2 | Met script |
| Als je de checkbox voor toestemming niet aanvinkt, verschijnt een tekstmelding die eraan gekoppeld is. De melding komt naast de bestaande privacytekst en vervangt die niet. | 3.3.1, 1.3.1 | Met script |

## 12. Bedankt

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/community/sluit-je-aan/bedankt/>

### Unieke inhoud

| Check                                                                                                                                       | WCAG         | Methode   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------- |
| Bij aankomst is de bevestiging duidelijk uit de paginatitel en de hoofdkop “Bedankt voor je aanmelding voor de NL Design System community”. | 2.4.2, 2.4.6 | Handmatig |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 13. Placeholder goed zichtbaar (richtlijn)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                         | WCAG  | Methode                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------- |
| De contrastverhouding in elk bijschrift klopt met de verhouding die je berekent uit de kleuren in het voorbeeld. Het bijschrift en de tekst eromheen brengen de les van het visuele voorbeeld over. Alleen een kloppend getal is niet genoeg. | 1.1.1 | Met script + handmatig |
| De placeholder in het voorbeeld “Doen” haalt 4,5:1 tegen de achtergrond. Het voorbeeld “Niet doen” zit bewust onder die grens, en wordt gecontroleerd tegen de waarde die erbij staat.                                                        | 1.4.3 | Met script             |
| De links “een contrast van …:1” maken met hun tekst of zin duidelijk dat ze de contrastchecker openen.                                                                                                                                        | 2.4.4 | Handmatig              |
| Elk live voorbeeldveld heeft een label dat het veld benoemt en dat zichtbaar blijft als het veld een waarde heeft.                                                                                                                            | 3.3.2 | Automatisch            |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 14. Inhoud description (richtlijn)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/richtlijnen/formulieren/descriptions/inhoud/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | WCAG                       | Methode     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| Beoordeel bij de demovideo “Demo video opsomming uit de description in VoiceOver” elk criterium apart. 1.2.2: correcte ondertiteling, ook van de spraak van de screenreader. 1.2.3: audiodescriptie of een media-alternatief. De alinea boven de video kan deel zijn van een media-alternatief. 1.2.5: audiodescriptie waar het beeld informatie geeft die niet in de audio zit. De alinea vervangt die audiodescriptie niet. 2.3.2: niets dat vaker dan 3 keer per seconde flitst. | 1.2.2, 1.2.3, 1.2.5, 2.3.2 | Handmatig   |
| Je kunt de “Description-beslisboom” volgen door via de koppen te navigeren. Elke vraag, van “Vraag 1” tot en met “Vraag 4b”, is een kop binnen die sectie. Elke verwijzing “Ga naar vraag …” noemt een vraag die bestaat.                                                                                                                                                                                                                                                           | 1.3.1, 2.4.6               | Handmatig   |
| In elk wachtwoordvoorbeeld is het veld gekoppeld aan het label en de beschrijving binnen datzelfde voorbeeld.                                                                                                                                                                                                                                                                                                                                                                       | 1.3.1, 4.1.2               | Automatisch |
| Geen 2 elementen op de pagina hebben dezelfde id.                                                                                                                                                                                                                                                                                                                                                                                                                                   | 1.3.1, 4.1.2               | Automatisch |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 15. Kleurgebruik in tekst (richtlijn)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                  | WCAG         | Methode   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------- |
| Ook zonder de verborgen voorbeelden te zien, brengen de badge en het bijschrift elk van de 4 lessen over. De lessen gaan over vet in plaats van kleur voor nadruk, en over genoeg contrast voor tekst op een afbeelding van een landkaart: met een donkere balk tegenover zonder balk. | 1.1.1, 1.4.1 | Handmatig |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 16. Estafettemodel

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/handboek/estafettemodel/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                            | WCAG                | Methode                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------- |
| Het statusoverzicht is een volgorde in een levenscyclus: Help Wanted → Community → Candidate → Hall of Fame. Die volgorde komt over via de volgorde van de tekst en de structuur. De verbindingspijlen zijn decoratief en zijn niet de enige manier waarop de volgorde overkomt. | 1.1.1, 1.3.1, 1.3.2 | Handmatig                    |
| Elke status houdt de naam in tekst naast de kleur, zodat de status nooit alleen met kleur wordt aangegeven.                                                                                                                                                                      | 1.4.1               | Automatisch                  |
| Bepaal of de Engelse statusnamen en termen, zoals Help Wanted, Hall of Fame en Definition of Done, gangbare vaktermen zijn of passages in een andere taal. Wat in een andere taal is, is als Engels gemarkeerd.                                                                  | 3.1.2               | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 17. Figma structuur

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/handboek/designer/figma-structuur/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                                                                                                                       | WCAG         | Methode                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------- |
| Elk diagram van de Figma-structuur heeft een tekstalternatief of tekst in de buurt die de relaties in juist dat diagram overbrengt: organisaties, merken, bibliotheken, de lokale bibliotheek en Connected Projects. Identieke tekstalternatieven bij deze verschillende diagrammen worden automatisch gemarkeerd voor controle.                                                                            | 1.1.1        | Automatisch + handmatig      |
| Bepaal of elk diagram afbeeldingen van tekst bevat. Tekst die deel is van een diagram met veel andere visuele inhoud, is geen afbeelding van tekst. Controleer bij een echte afbeelding van tekst elk criterium apart. 1.4.5: aanpasbaar of essentieel. 1.4.9: puur decoratie of essentieel. Geldt er geen uitzondering, gebruik dan echte tekst. Een tekstalternatief voldoet aan geen van beide criteria. | 1.4.5, 1.4.9 | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 18. Basis-tokens

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/handboek/huisstijl/basis-tokens/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | WCAG         | Methode                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------- |
| Elke informatieve afbeelding op de pagina heeft een tekstalternatief of tekst in de buurt met de informatie die de afbeelding toont. Dat geldt ook voor het diagram met de tokenniveaus bovenaan de pagina: hoe een waarde via de niveaus Brand, Common en Component bij een component komt, en welke tokennamen daarbij horen. En het geldt voor het raster met kleurtokens: de tokennamen en hun waarden, ook waarden die naar andere tokens verwijzen. Een vermelding waar die als tekst staan, mag ook. | 1.1.1        | Handmatig                    |
| De screenshots van componenten met bijna dezelfde alt-tekst, bij as 2 “niet goed zichtbaar” en “ook goed zichtbaar”, beschrijven elk het verschil dat hun afbeelding echt laat zien.                                                                                                                                                                                                                                                                                                                        | 1.1.1        | Handmatig                    |
| Sectietitels zoals “Voorbeeld A” en “Voorbeeld B” zijn koppen. Nergens op de pagina vervangt een korte regel vette tekst een kop. Geen tekst buiten een kop is zo groot of vet opgemaakt dat hij als kop leest.                                                                                                                                                                                                                                                                                             | 1.3.1        | Automatisch                  |
| De kopniveaus lopen over de hele pagina af zonder niveaus over te slaan.                                                                                                                                                                                                                                                                                                                                                                                                                                    | 1.3.1        | Automatisch                  |
| Bepaal of het raster met kleurtokens en elke screenshot van een component een afbeelding van tekst is. Controleer bij een echte afbeelding van tekst elk criterium apart. 1.4.5: aanpasbaar of essentieel. 1.4.9: puur decoratie of essentieel. Geldt er geen uitzondering, gebruik dan echte tekst. Een tekstalternatief voldoet aan geen van beide criteria.                                                                                                                                              | 1.4.5, 1.4.9 | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 19. Design Systems Week 2025: programma (Engels)

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/events/design-systems-week-2025/en/program/>

Dezelfde checks gelden voor de andere Engelse eventpagina's:

- `/events/design-systems-week/en/`
- `/events/design-systems-week-2026/en/program/`
- `/events/design-systems-week-2026/en/timetable/`
- `/events/design-systems-week-2024/en/program/`
- `/events/design-systems-week-2023/en/program/`

### Unieke inhoud

| Check                                                                                                                                                                                                                                                | WCAG                       | Methode                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------- |
| De paginatitel beschrijft wat er op de pagina staat en past bij de hoofdkop. Een titel met alleen het jaartal voldoet niet.                                                                                                                          | 2.4.2                      | Automatisch             |
| De sessietitels staan precies één niveau onder de sectiekop waar ze bij horen. Zo is duidelijk dat ze de inhoud van die sectie zijn, en niet op hetzelfde niveau staan.                                                                              | 1.3.1                      | Automatisch             |
| Nederlandse passages in de eigen inhoud van de pagina zijn als Nederlands gemarkeerd. Dat zijn sessietitels, beschrijvingen van sessies, biografieën van sprekers en tekst in secties.                                                               | 3.1.2                      | Automatisch + handmatig |
| Elke sessievideo heeft correcte ondertiteling. Waar het beeld informatie geeft die niet in de audio zit, heeft de video audiodescriptie of een media-alternatief. De video bevat niets dat vaker dan 3 keer per seconde flitst.                      | 1.2.2, 1.2.3, 1.2.5, 2.3.2 | Handmatig               |
| Elk portret van een spreker heeft een lege alt als het niets toevoegt aan de naam en biografie van de spreker ernaast. Een alt-tekst met inhoud hoort alleen bij een portret dat meer relevante informatie geeft of een interactief element benoemt. | 1.1.1                      | Handmatig               |
| Elke sprekerskaart staat binnen de eigen sessie, zodat duidelijk is welke sprekers bij welke talk horen.                                                                                                                                             | 1.3.1                      | Automatisch             |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 20. Slack

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/slack/>

### Unieke inhoud

| Check                                                                                                                                                                                 | WCAG  | Methode   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| Elke kanaallink, zoals “#nl-design-system” en “#nl-design-system-a11y”, maakt samen met de tekst in de lijst duidelijk dat de link een Slack-kanaal opent en waar het kanaal voor is. | 2.4.4 | Handmatig |
| De link “Doe mee op Slack” ziet eruit als een knop. Samen met de zin maakt de link duidelijk dat hij het externe aanmeldformulier opent.                                              | 2.4.4 | Handmatig |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 21. Toegankelijkheidsverklaring

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/toegankelijkheidsverklaring/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                             | WCAG         | Methode                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------- |
| De afbeelding van het statuslabel heeft een tekstalternatief met de informatie die het label toont: het label, het conformiteitsniveau en de datum van de laatste update.                                                                                                                                         | 1.1.1        | Handmatig                    |
| De link om de afbeelding van het statuslabel heeft een toegankelijke naam die niet leeg is. Die naam komt uit de afbeelding of uit de link zelf. Tekst in de buurt geeft de link geen naam. De naam maakt samen met de context duidelijk dat de link de volledige verklaring in het externe register opent.       | 4.1.2, 2.4.4 | Automatisch + handmatig      |
| De link “contact” in “Neem dan contact met ons op” maakt duidelijk waar hij heen gaat: de pagina van het kernteam.                                                                                                                                                                                                | 2.4.4        | Handmatig                    |
| Bepaal of het statuslabel een afbeelding van tekst bevat. Controleer bij een echte afbeelding van tekst elk criterium apart. 1.4.5: aanpasbaar of essentieel. 1.4.9: puur decoratie of essentieel. Geldt er geen uitzondering, gebruik dan echte tekst. Een tekstalternatief voldoet aan geen van beide criteria. | 1.4.5, 1.4.9 | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 22. Privacyverklaring

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/privacyverklaring/>

### Unieke inhoud

Geen checks voor unieke inhoud.

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.

## 23. Woordenlijst

URL: <https://documentatie-next-git-release-website-next-nl-design-system.vercel.app/woordenlijst/>

### Unieke inhoud

| Check                                                                                                                                                                                                                                                                                                               | WCAG  | Methode                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------- |
| Elke link “Verder lezen” heeft een begrijpelijk doel dat past bij de bestemming. Een link die een succescriterium noemt, opent bijvoorbeeld de pagina van dat criterium. Ruwe opmaakcode in een linktekst wordt automatisch gemarkeerd. Dat is alleen een fout als het doel van de link daardoor onduidelijk wordt. | 2.4.4 | Automatisch + handmatig      |
| Elke termgroep houdt de kop van de term, de synoniemen en de definitie bij elkaar als één groep van term en definitie. Voorbeelden van synoniemen zijn “screen reader”, “schermlezer” en “voorleessoftware”.                                                                                                        | 1.3.1 | Automatisch                  |
| Bepaal of de Engelse termen en synoniemen, zoals “Switch access”, “screen reader” en “Sip-and-puff”, en de Engelse links bij “Verder lezen” gangbare vaktermen zijn of passages in een andere taal. Wat in een andere taal is, is als Engels gemarkeerd.                                                            | 3.1.2 | Handmatig, bij nieuwe inhoud |

### Unieke functionaliteit

Geen checks voor unieke functionaliteit.
