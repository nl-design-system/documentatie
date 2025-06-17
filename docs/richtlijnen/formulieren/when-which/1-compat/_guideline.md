<!-- @license CC0-1.0 -->

# Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief

Sommige formulierelementen werken (nog) niet goed of zijn complex om te bedienen met toetsenbord, [screenreaders](/woordenlijst/#screenreader) of stembesturing.

Op [HTML5 Accessibility](https://html5accessibility.com/) houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen.

De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing.

Ervoor zorgen dat iedereen een formulierelement kan bedienen en begrijpen is nodig om te voldoen aan de volgende WCAG-succescriteria:

- [1.3.2 Betekenisvolle volgorde](/wcag/1.3.2) (niveau A).
- [2.1.1 Toetsenbord](/wcag/2.1.1) (niveau A).
- [2.4.6 Koppen en labels](/wcag/2.4.6) (niveau AA).
- [3.3.2 Labels of Instructies](/wcag/3.3.2) (niveau A).
- [4.1.2 Naam, rol, waarde](/wcag/4.1.2) (niveau A).

## Multiselect

Het multiselect formulierelement `<select multiple>` is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver.

Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken.

## Datum- en tijdkiezers

Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers.

De beste optie is om naast de kiezer ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen.

Veel browsers voegen zelf al een kiezer toe voor de `<input type="date">` en `<input type="time">`-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze kiezers (nog) niet te stijlen zijn met CSS. Daarnaast zien de kiezers er per browser verschillend uit en werken ze anders.

### Input type="number" versus inputmode="numeric"

Een andere optie is het laten invoeren van alleen nummers met `<input type="number">`
Bijvoorbeeld:

```html
<label for="dag1">Geboortedag</label> <input id="dag1" type="number" autocomplete="bday-day" min="1" max="31" />
```

GOV.UK heeft hier onderzoek naar gedaan en vindt [type=number qua gebruikersvriendelijkheid te foutgevoelig](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/).

> Met `<input type="number">` bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat.

Zij beveelt het gebruik van `inputmode="numeric"` aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert.

Bijvoorbeeld:

```html
<label for="dag2">Geboortedag</label> <input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day" />
```

### Selects voor dag, maand en jaar

Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Het kan confronterend zijn als, scrollend door een lange lijst aan jaartallen, beseft dat je wel erg oud aan het worden bent...

### Tekstveld

Als de data niet verder automatisch verwerkt gaat worden is een tekstveld een makkelijke optie. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen.

### De keuze hangt af van de context

Welke optie je kiest, is afhankelijk van de context. Wat vraag je uit? En wat gaat er met de data gebeuren? Bijvoorbeeld:

- Kent men de datum uit het hoofd (bijvoorbeeld geboortedatum)? Gebruik dan drie losse invulvelden.
- Kan men een datum prikken (bijvoorbeeld een afspraak)? Dan is een datumkiezer in combinatie met zelf invullen een goed plan. "Ik weet de datum niet maar woensdagen komen mij het best uit". Hou wel rekening met 'niet beschikbare' dagen, gebruik in dat geval als alternatief bijvoorbeeld een select-optie met beperkte keuzes.
- Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt.

Lees hierover meer op [Ask users for Dates](https://design-system.service.gov.uk/patterns/dates/) van GOV.UK.

De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt.
