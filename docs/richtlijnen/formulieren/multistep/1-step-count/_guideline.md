<!-- @license CC0-1.0 -->

# Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt

Als een formulier meerdere stappen heeft, is het in veel gevallen wenselijk dat een gebruiker weet in welke stap zij zich bevindt en hoeveel stappen er nog volgen. Dit kan duidelijkheid geven en onzekerheid bij de gebruiker verminderen, met name wanneer uit onderzoek blijkt dat hier behoefte aan is.

Een goed patroon in tekst hiervoor is bijvoorbeeld de tekst: **Stap 2 van 6** of **Vraag 2 van 6**.

Voeg deze informatie toe op twee plekken:

- In de `<title>` in de `<head>` van de pagina.
- Boven het formulier, bijvoorbeeld in het kopje van het formulier of vlak onder het kopje van het formulier.

Aanpassen van de `<title>` in de `<head>` geldt voor WCAG ook voor dynamisch gegenereerde formulieren en dus ook voor de verschillende stappen. Wanneer de gebruiker technisch gezien op dezelfde pagina blijft, en je met script de volgende formulierstap in beeld brengt, dan moet de paginatitel aangepast worden zodat die klopt bij de stap. Je kunt met script de titel aanpassen:

```js
document.title = "Stap 3 van 6: Adresgegevens";
```

De stappen kort uitschrijven als tekst heeft de voorkeur boven een visuele weergave zoals in een progressbar. Tekst schaalt beter mee bij vergroting of op mobiele weergave. Bovendien is het sneller te lezen en wordt het beter gevonden.

Lees hierover [<span lang="en">Using progress indicators</span>](https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators) en [<span lang="en">Do less</span>](https://designnotes.blog.gov.uk/2014/07/07/do-less-problems-as-shared-spaces/) op GOV.UK.

Op dit moment hebben we nog onvoldoende inzichten 'of', danwel 'hoe' dit patroon het best werkt bij formulieren waarbij het aantal stappen afhankelijk is van eerder gegeven antwoorden of gemaakte keuzes. Dit noemen we ook wel 'conditionele stappen'. We leren hier graag meer over op basis van gebruikersonderzoek en praktijkervaringen.

Heb je inzichten of voorbeelden? Deel ze via de [GitHub Discussion 'Voortgang indicatie - Meerstappenformulier'](https://github.com/orgs/nl-design-system/discussions/369) of op [gebruikersonderzoeken.nl].
