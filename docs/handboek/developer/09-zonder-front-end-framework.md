# NL Design System gebruiken zonder front-end framework

Met het NL Design System bouw je in een paar stappen een pagina met alleen HTML en wat CSS. In dit voorbeeld bouw je stap voor stap een ontwerp na.

<div className="utrecht-root" style={{zoom: '50%', width: '100%', height: '1024px'}}>
  <div className="utrecht-body">
    <iframe title="Voorbeeld HTML pagina" style={{width: '100%', height: '1024px'}} src="/examples/zonder-front-end-framework.html"></iframe>
  </div>
</div>
<a href="/examples/zonder-front-end-framework.html" rel="noopener noreferrer">Bovenstaande voorbeeldpagina in volledig scherm bekijken</a>.

## Stappenplan overslaan?

Als je het stappenplan wilt overslaan en voor jezelf iets leuks wilt creëren, kopieer dan deze voorbeeldpagina en maak er je eigen versie van.

```
TODO: voorbeeldpagina HTML hier toevoegen.
```

## Paginaopzet

Dit is het ontwerp dat in dit voorbeeld zo goed mogelijk wordt nagebouwd: [Figma](https://www.figma.com/design/taAnsV55PVP0cmw18BnMDk/NL-Design-System---Templates---Voorbeeld?node-id=5550-611&t=VX2mUDweS42iaS1D-4)

Deze pagina is opgedeeld in de volgende componenten: logo, page header, breadcrumbs, heading, paragraph, button, unordered list en footer.

Een aantal van deze componenten is beschikbaar als [candidate component](/componenten/?status=CANDIDATE). Andere componenten kunnen van een community gebruikt worden, of zelf gemaakt worden. In dit voorbeeld wordt gekozen om de pagina zoveel mogelijk op te bouwen met Candidate componenten. Daarnaast is een aantal componenten alleen als Community component beschikbaar. In dat geval kies je degene die het beste bij het design past.

## Zelf de pagina opbouwen

### Stap 1: Gebruik een boilerplate als basis voor de pagina

TODO: link naar boilerplate pagina zodra deze is aangemaakt.

### Stap 2: Voeg de content toe aan de pagina

Om het effect van de componenten en hun styling goed te kunnen zien moet je de pagina vullen met content zoals tekst, plaatjes en kopteksten.

Ook is het hier van belang de juiste HTML elementen te gebruiken, dus niet bijvoorbeeld een `div` als knop of navigatie-element.
Om tijd te besparen is hier de content beschikbaar gemaakt:

### Stap 3: Zorg ervoor dat de componenten die worden ingeladen en de juiste styling hebben

Dit onderdeel kan stap voor stap uitgevoerd worden.

Aangezien niet elk component gestyled is volgens het ontwerp moet je wat aanpassingen maken in de css om deze wel aan te laten sluiten. Als eerste gaan we de footer een andere kleur geven:

```
<head>
  <style>
    .utrecht-page-footer {
      --utrecht-page-footer-background-color: #5115EF;
      background-image: none;
    }
  </style>
</head>
```

Voor de footer gebruik ik de footer van Amsterdam.
Om daarvan alle styling te gebruiken zijn er twee dingen nodig, zoals beschreven in de [README](https://github.com/Amsterdam/design-system/blob/develop/packages/css/README.md), namelijk design-system-css en design-system-tokens.

Deze worden als volgt geïmporteerd:

````
  <link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/index.css" />
  <link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-tokens@1.0.1/dist/index.css" />
```

Let inmiddels goed op voor de volgorde waarop je de dependencies inlaad. De CSS wordt overschreven door het eerst-volgende CSS bestand. Het kan dus fouten voorkomen wanneer je de @nl-design-system-* stylesheets als laatste importeert.

## Bijzonderheden
````
