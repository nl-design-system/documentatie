# NL Design System gebruiken zonder front-end framework

Met het NL Design System bouw je in een paar stappen een pagina met alleen HTML en wat CSS. In dit voorbeeld bouw je stap voor stap een ontwerp na.

<div className="utrecht-root" style={{zoom: '25%', width: '100%', height: '2048px'}}>
  <div className="utrecht-body">
    <iframe title="Voorbeeld HTML pagina" style={{width: '100%', height: '2048px'}} src="/examples/example-page.html"></iframe>
  </div>
</div>
<a href="/examples/example-page.html" target="_blank" rel="noopener noreferrer">Open de bovenstaande voorbeeldpagina in een nieuw tabblad</a>.

## Stappenplan overslaan?

Als je het stappenplan wilt overslaan, kopieer dan deze voorbeeldpagina en maak er je eigen versie van.

```
TODO: voorbeeldpagina HTML hier toevoegen.
```

## Paginaopzet

Deze pagina is opgedeeld in de volgende componenten: logo, page header, breadcrumbs, heading, paragraph, button en unordered list.

Een aantal van deze componenten is beschikbaar als [candidate component](https://nldesignsystem.nl/componenten/?status=CANDIDATE). Andere componenten kunnen van een community gebruikt worden, of zelf gemaakt worden. In dit voorbeeld wordt gekozen om componenten van de Utrecht community te gebruiken.

## Zelf de pagina opbouwen

### Stap 1: Gebruik een boilerplate als basis voor de pagina

TODO: link naar boilerplate pagina zodra deze is aangemaakt.

### Stap 2: Voeg de content toe aan de pagina

Om het effect van de componenten en hun styling goed te kunnen zien moet je de pagina vullen met content zoals tekst, plaatjes en kopteksten.

### Stap 3: Zorg ervoor dat de componenten die worden ingeladen en de juiste styling hebben

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

## Bijzonderheden
