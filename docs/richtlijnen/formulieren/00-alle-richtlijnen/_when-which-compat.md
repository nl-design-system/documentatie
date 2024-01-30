## Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief

Sommige formulierelementen werken (nog) niet goed of zijn heel complex te bedienen met een toetsenbord, screenreader en stembesturing.

Op [HTML5 Accessibility](https://html5accessibility.com/) houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen.

De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing.

Door te zorgen dat iedereen een formulierelement kan bedienen en begrijpen voldoe je aan de volgende WCAG-succescriteria:

- [1.3.2 Betekenisvolle volgorde](https://www.w3.org/Translations/WCAG21-nl/#info-en-relaties) (niveau A)
- [2.1.1 Toetsenbord](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) (niveau A)
- [2.4.6 Koppen en labels](https://www.w3.org/Translations/WCAG21-nl/#koppen-en-labels) (niveau AA)
- [3.3.2 Labels of Instructies](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html) (niveau A)
- [4.1.2 Naam, rol, waarde](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) (niveau A)

### Multiselect

Het multiselect formulierelement `<select multiple>` is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver.

Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken.

### Datum- en tijdkiezers

Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers.

De beste optie is om naast de picker ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen.

Veel browsers voegen zelf al een kiezer toe voor de `<input type="date">` en `<input type="time">`-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze pickers (nog) niet te stijlen zijn met CSS en de pickers zien er in de verschillende browsers anders uit en werken ook anders.

#### Input type="number" versus inputmode="numeric"

Een andere optie is het laten invoeren van alleen nummers met `<input type="number">`
Bijvoorbeeld:

```
<label for="dag1">Geboortedag</label>
<input id="dag1" type="number" autocomplete="bday-day" min="1" max="31"/>
```

GOV.UK heeft hier onderzoek naar gedaan en vindt [type=number qua gebruikersvriendelijkheid te foutgevoelig](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/).

> Met `<input type="number">` bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat.

Zij beveelt het gebruik van `inputmode="numeric"` aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert.

Bijvoorbeeld:

```
<label for="dag2">Geboortedag</label>
<input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day"/>
```

#### Selects voor dag, maand en jaar

Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Nooit leuk om te beseffen dat je wel erg oud bent, al scrollend door een lange, lange lijst jaartallen.

#### Tekstveld

Een makkelijke optie voor de gebruiker is een tekstveld, als die data niet verder automatisch verwerkt gaat worden. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen.

#### De keuze hangt af van de context

Welke optie je kiest, hangt af van wat je uitvraagt en wat met de data gaat gebeuren, het is afhankelijk van de context. Bijvoorbeeld;

- Kent men de datum uit het hoofd (bijvoorbeeld geboorte datum): gebruik drie losse select-opties.
- Kan men een datum prikken (bijvoorbeeld een afspraak) dan is een datumkiezer in combinatie met zelf invullen een goed plan. "Ik weet de datum niet maar woensdagen komen mij het best uit". Hou wel rekening met "niet beschikbare" dagen, gebruik in dat geval als alternatie bijvoorbeeld een select-optie met beperkte keuzes.
- Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt.

Lees hierover meer op [Ask users for Dates](https://design-system.service.gov.uk/patterns/dates/) van GOV.UK.

De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt.
