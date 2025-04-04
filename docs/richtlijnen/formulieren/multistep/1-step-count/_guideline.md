<!-- @license CC0-1.0 -->

# Geef aan hoeveel stappen er zijn en in welke stap de gebruiker zich bevindt

Als een formulier meerdere stappen heeft, is het noodzakelijk dat een gebruiker weet in welke stap ze zich bevindt en hoeveel stappen er nog volgen. Dit geeft duidelijkheid en voorkomt onzekerheid bij de gebruiker.

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

Het duidelijk aangeven van het aantal stappen en de huidige locatie binnen de stappen is nodig om te voldoen de WCAG-succescriteria:

- [1.3.2 Betekenisvolle volgorde](/wcag/1.3.2) (niveau A).
- [2.4.2 Paginatitel](/wcag/2.4.2) (niveau A), deze richtlijn geldt ook voor dynamische pagina’s.
- [3.2.3 Consistente navigatie](/wcag/3.2.3) (niveau AA)
